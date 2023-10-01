import React, { ChangeEvent, DragEvent, useRef, useState } from 'react'
import MainLayout from '@/component/layouts/MainLayout'
import Image from '@/component/elements/NextImage'
import TextInput from '@/component/elements/TextInput'
import StarIcon from '@/component/elements/StarIcon'
import Button from '@/component/elements/Button'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import UploadIcon from '@/assets/icons/upload.svg'
import { SubmitHandler, useForm } from 'react-hook-form'

import type { ReviewProductProps } from '@/pages/review-product/[id]'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

type FormFields = {
  judulReview: string
  deskripsi: string
}

type Props = ReviewProductProps

const ReviewProduct = ({ product, notFound }: Props) => {
  const [ratingValue, setRatingValue] = useState(1)
  const [files, setFiles] = useState<File[]>([])

  const fileInputRef = useRef<HTMLInputElement>(null)
  const [errorMsg, setErrorMsg] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormFields>({
    defaultValues: {
      deskripsi: '',
      judulReview: '',
    },
  })

  const { data: session } = useSession({ required: true })
  const router = useRouter()

  const { id, fromHome } = router.query

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const droppedFile = event.dataTransfer.files[0]

    if (
      droppedFile.type.startsWith('image/') ||
      droppedFile.type.startsWith('video/')
    ) {
      setFiles((prev) => [...prev, droppedFile])
      setErrorMsg('')
    } else {
      setErrorMsg('Only image and video files are allowed.')
    }
  }

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const handleFileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const selectedFile = event.target.files && event.target.files[0]
    if (selectedFile) {
      const fileSize = selectedFile?.size / 1000000 // MB
      if (fileSize > 5) {
        setErrorMsg('Max size 5 mb')
        return
      }
      if (
        selectedFile.type.startsWith('image/') ||
        selectedFile.type.startsWith('video/')
      ) {
        setFiles((prev) => [...prev, selectedFile])
        setErrorMsg('')
      } else {
        setErrorMsg('Only image and video files are allowed.')
      }
    }
  }

  const handleClick = (val: number) => {
    setRatingValue(val)
  }

  const handleRemoveFile = (name: string) => {
    setFiles((prev) => prev.filter((file) => file.name !== name))
  }

  const handleSubmitReview: SubmitHandler<FormFields> = async ({
    judulReview,
    deskripsi,
  }) => {
    if (!session?.accessToken) return

    setIsSubmitting(true)

    const formData = new FormData()
    formData.set('title', judulReview)
    formData.set('description', deskripsi)
    formData.set('rating', String(ratingValue))

    for (const file of files) {
      formData.set('media', file, file.name)
    }

    try {
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/review/${id}`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
          body: formData,
        }
      )

      let url = '/'
      if (fromHome) {
        url += '?withSuccess=true'
      } else {
        url += 'detail-product/' + id
      }

      if (resp.ok) {
        router.push(url)
      } else {
        throw new Error()
      }
    } catch (error) {
      setErrorMsg('Gagal mengirm review. Coba lagi nanti')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (notFound)
    return (
      <div className="min-h-[70vh] w-full flex items-center justify-center ">
        <p className="text-3xl font-bold">Not found sorry</p>
      </div>
    )

  const image = JSON.parse(product.images)[0]

  return (
    <div className="main-container">
      <div className="w-full flex flex-col gap-10">
        <button onClick={() => router.back()}>
          <div className=" cursor-pointer flex gap-2 items-center w-max pr-2 text-headline-sm">
            <KeyboardBackspaceIcon fontSize="inherit" />
            <h1 className="font-bold text-2xl">Review Produk</h1>
          </div>
        </button>
        <form
          onSubmit={handleSubmit(handleSubmitReview)}
          className="flex flex-col md:flex-row gap-8 bg-white"
        >
          <div className="rounded-xl overflow-hidden md:w-[400px]">
            <img
              src={image}
              alt="Picture of the author depdep"
              className="hover:scale-105 ease-in duration-300 object-cover w-[350px] h-[350px] mx-auto rounded-xl md:w-full md:h-auto md:aspect-square"
            />
          </div>
          <fieldset
            disabled={isSubmitting}
            className="flex flex-col flex-[1.2] rounded-2xl shadow-[0px_4px_16px_rgba(77,77,77,0.12)] p-9 gap-5"
          >
            <h1 className="text-medium leading-[24px] font-semibold font-satoshi text-dark">
              {product.product_title}
            </h1>

            <div className="flex flex-col gap-2">
              <h3 className="text-label-lg">Rating</h3>
              <div className="flex gap-3 justify-between md:justify-start">
                {new Array(5).fill('').map((_, index) => (
                  <div
                    key={index}
                    className="cursor-pointer"
                    onClick={() => handleClick(index + 1)}
                  >
                    <StarIcon
                      color={ratingValue > index ? '#F26E21' : '#A6A6A6'}
                      size={41}
                    />
                  </div>
                ))}
              </div>
            </div>
            <TextInput
              label="Judul Review"
              variant="normal"
              placeholder="Tuliskan Judul Review"
              id="title-review"
              name="judulReview"
              className="py-3 px-4 text-label-lg"
              required
              register={register}
            />
            {errors['judulReview'] ? (
              <p className={'text-pink text-label-md font-satoshi'}>
                Tolong isi field ini
              </p>
            ) : null}
            <TextInput
              label="Deskripsi"
              variant="textarea"
              placeholder="Tuliskan deskripsi"
              id="description-review"
              name="deskripsi"
              className="py-3 px-4 text-label-lg"
              required
              register={register}
            />
            {errors['deskripsi'] ? (
              <p className={'text-pink text-label-md font-satoshi'}>
                {errors['deskripsi'].message || 'Tolong isi field ini'}
              </p>
            ) : null}
            <div className=" flex flex-col justify-center w-full">
              <p className="text-label-lg mb-2">Upload video / photo</p>
              <div
                className="p-4 border-2 bg-[#e8f6fc] border-dashed border-gray-400 rounded-lg w-full flex flex-col items-center gap-1"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                <Image src={UploadIcon} alt="upload" width={48} height={48} />

                <p className="text-label-md font-satoshi">
                  Tarik dan Lepaskan kesini atau{' '}
                  <button
                    type="button"
                    disabled={files.length === 3}
                    className="underline font-[900] cursor-pointer disabled:cursor-not-allowed"
                    onClick={handleFileClick}
                  >
                    Pilih File
                  </button>
                </p>
                <input
                  type="file"
                  accept="image/*,video/*"
                  ref={fileInputRef}
                  id="input-file"
                  name="input-file"
                  className="hidden"
                  onChange={handleFileInput}
                />
              </div>

              {errorMsg ? (
                <p className="text-label-lg text-pink mt-2">* {errorMsg}</p>
              ) : null}
              {/* PREVIEW */}
              <div className="mt-3 overflow-hidden w-full flex justify-center md:justify-start gap-6">
                {files.map((file, i) => {
                  if (file.type.startsWith('image/')) {
                    return (
                      <div
                        className="w-max rounded-md overflow-hidden relative"
                        key={i}
                      >
                        <Image
                          src={URL.createObjectURL(file)}
                          alt="Dropped Image"
                          width={80}
                          height={80}
                          className="hover:scale-105 ease-in duration-300 object-cover w-[80px] h-[80px] opacity-90"
                        />
                        <button onClick={() => handleRemoveFile(file.name)}>
                          <Image
                            src="/icons/close.svg"
                            alt="close"
                            width={2}
                            height={2}
                            className="w-6 h-6 absolute right-0 top-0"
                          />
                        </button>
                      </div>
                    )
                  }
                  return (
                    <video
                      key={i}
                      src={URL.createObjectURL(file)}
                      className="max-w-xs"
                      controls
                    />
                  )
                })}
              </div>
            </div>
            <Button className="disabled:opacity-80" type="submit">
              {isSubmitting ? 'Mengirim review...' : 'Kirim Review'}
            </Button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

ReviewProduct.getLayout = (
  page:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
) => <MainLayout isNormal={true}>{page}</MainLayout>

export default ReviewProduct
