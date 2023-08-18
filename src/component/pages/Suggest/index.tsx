import SuggestLayout from './SuggestLayout'
import NextLink from 'next/link'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import Image from 'next/image'
import Button from '@/component/elements/Button/component'
import { Dialog, DialogContent } from '@/component/ui/Dialog'
import { useState } from 'react'
import { cn } from '@/utils/classname'
import { FieldErrors, UseFormRegister, useForm } from 'react-hook-form'

const InputClassname =
  'py-3 px-4 rounded-xl border border-[#A6A6A6] placeholder:text-label-lg placeholder:text-muted-foreground'

type FormData = {
  namaBrand: string
  namaProduk: string
  tipeProduk: string
  seriProduk: string
}

function Input({
  register,
  label,
  name,
  placeholder,
  errors,
}: {
  register: UseFormRegister<FormData>
  label: string
  name: keyof FormData
  placeholder: string
  errors: FieldErrors<FormData>
}) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        placeholder={placeholder}
        className={cn(InputClassname, errors[name] && 'border-pink')}
        type="text"
        {...register(name, {
          required: 'Tolong isi field ini',
          minLength: { value: 8, message: 'Gunakan 8 karakter' },
        })}
      />
      {errors[name] ? (
        <p className={'text-pink text-label-md font-satoshi'}>
          {errors[name]?.message}
        </p>
      ) : null}
    </>
  )
}

export default function Suggest() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const [showDialog, setShowDialog] = useState(false)

  function onSubmit(val: FormData) {
    setShowDialog(true)
  }

  return (
    <main className="container px-5">
      <NextLink href="/" passHref>
        <div className=" cursor-pointer flex gap-4 items-center w-max pr-2 mt-10 mb-6">
          <KeyboardBackspaceIcon fontSize="large" />
          <h1 className="text-headline-sm font-[900] tracking-[0.1px]">
            Sarankan Produk
          </h1>
        </div>
      </NextLink>

      <section className="flex flex-col p-6 gap-10 self-stretch rounded-[20px] shadow-lg mb-20">
        <div className="space-y-2">
          <h1 className="text-title-lg font-bold">
            Sarankan Produk kepada Kami
          </h1>
          <p className="text-title-md font-satoshi">
            Sarankan dengan menuliskan secara jelas kepada kami tentang
            produknya, agar kami bisa menambahkan pada database kami
          </p>
        </div>

        <Image
          width={272}
          height={240}
          src={'/presentation.png'}
          alt="presentation"
          className="object-cover mx-auto"
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 self-stretch"
        >
          <div className="flex flex-col gap-2">
            <Input
              errors={errors}
              placeholder="Tulis nama brandnya"
              label="Nama Brand"
              name="namaBrand"
              register={register}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Input
              errors={errors}
              placeholder="Tulis nama produknya"
              label="Nama Produk"
              name="namaProduk"
              register={register}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Input
              errors={errors}
              placeholder="Tulis tipe dari produk"
              label="Tipe produk"
              name="tipeProduk"
              register={register}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Input
              errors={errors}
              placeholder="Tulis seri dari produk"
              label="Seri Produk"
              name="seriProduk"
              register={register}
            />
          </div>

          <Button type="submit" className="rounded-xl">
            Sarankan Produk
          </Button>
        </form>
      </section>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-white flex flex-col max-w-[600px] w-[80vw] p-6 rounded-[20px] items-center">
          <Image
            src={'/check.png'}
            alt="check"
            width={128}
            height={128}
            className="object-contain"
          />
          <div className="flex flex-col gap-2 self-stretch text-center font-satoshi">
            <h3 className="text-title-lg font-bold">
              Terimakasih sudah menyarankan kepada Kami
            </h3>
            <p className="text-title-sm font-satoshi">
              Silahkan cek email anda yang terdaftar, kami akan memberi tahu
              anda jika kami sudah menambahkan produk sesuai apa yang Anda
              sarankan
            </p>
          </div>

          <Button>Sarankan Produk Lainnya</Button>
          <Button variant="outline" className="w-full border-black text-black">
            Kembali ke Home
          </Button>
        </DialogContent>
      </Dialog>
    </main>
  )
}

Suggest.getLayout = (
  page:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
) => <SuggestLayout isNormal={true}>{page}</SuggestLayout>
