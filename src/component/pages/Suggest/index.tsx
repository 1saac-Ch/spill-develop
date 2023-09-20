import SuggestLayout from './SuggestLayout'
import NextLink from 'next/link'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import Image from 'next/image'
import Button from '@/component/elements/Button/component'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Link from 'next/link'
import Input from '@/component/ui/Input'
import Alert from '@/component/alert'

type FormData = {
  namaBrand: string
  namaProduk: string
  tipeProduk: string
  seriProduk: string
}

export default function Suggest() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const [showDialog, setShowDialog] = useState(false)

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setShowDialog(true)
  }

  return (
    <main className="px-5 w-full lg:px-[72px]">
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
          <h1 className="text-title-lg md:text-headline-sm font-bold">
            Sarankan Produk kepada Kami
          </h1>
          <p className="text-title-md font-satoshi">
            Sarankan dengan menuliskan secara jelas kepada kami tentang
            produknya, agar kami bisa menambahkan pada database kami
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          <Image
            width={272}
            height={240}
            src={'/presentation.png'}
            alt="presentation"
            className="object-cover mx-auto md:w-[400px] md:h-[400px]"
          />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 self-stretch flex-1"
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
        </div>
      </section>

      <Alert open={showDialog} setOpen={setShowDialog}>
        <div className="flex flex-col gap-2 self-stretch text-center font-satoshi">
          <h3 className="text-title-lg md:text-headline-md font-bold">
            Terimakasih sudah menyarankan kepada Kami
          </h3>
          <p className="text-title-sm md:text-title-md font-satoshi">
            Silahkan cek email anda yang terdaftar, kami akan memberi tahu anda
            jika kami sudah menambahkan produk sesuai apa yang Anda sarankan
          </p>
        </div>

        <Button>Sarankan Produk Lainnya</Button>
        <Link
          href={'/'}
          className="flex border hover:border-2 disabled:hover:border disabled:cursor-not-allowed  font-semibold items-center justify-center px-5 h-[50px] rounded-[10px] text-small leading-low font-satoshi bg-none w-full border-black text-black"
        >
          Kembali ke Home
        </Link>
      </Alert>
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
