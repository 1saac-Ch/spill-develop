import { Dispatch, useState } from 'react'
import NextLink from 'next/link'
import Link from 'next/link'

import styles from './index.module.scss'

import SpillLogo from '@/component/elements/SpillLogo'
import TextInput from '@/component/elements/TextInput'
import Button from '@/component/elements/Button'
import { regex } from '@/utils/regex'
import VerificationCode from '@/component/elements/VerificationInput'

import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  username: string
  noHP: string
  password: string
  confirmPassword: string
}

function Daftar({
  setRegisterActive,
}: {
  setRegisterActive: Dispatch<React.SetStateAction<boolean>>
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      username: '',
      noHP: '',
      password: '',
      confirmPassword: '',
    },
  })

  const handleRegister = (e: FormData) => {
    // setError('username', {
    //   message: 'username telah digunakan',
    // })
    // setRegisterActive(false)
  }

  const noError = !Object.keys(errors).length

  return (
    <>
      <h1 className="text-headline-sm font-[900] text-center tracking-[0.01px] md:text-headline-md md:font-bold">
        Daftar di Spill 🚀
      </h1>
      <p className="text-title-md text-center">
        Bisa cari produk apapun, tanpa ragu checkoutnya!
      </p>
      <form onSubmit={handleSubmit(handleRegister)} className="space-y-5">
        <div>
          <TextInput
            label="Nama"
            placeholder="Tuliskan nama kamu"
            variant="normal"
            register={register}
            required
            name="name"
          />
          {errors['name'] ? (
            <p className={'text-pink text-label-md font-satoshi'}>
              *format nama tidak sesuai
            </p>
          ) : null}
        </div>
        <div>
          <TextInput
            label="Username"
            placeholder="Tuliskan username"
            variant="normal"
            register={register}
            required
            name="username"
            message="format username tidak sesuai"
          />
          {errors['username'] ? (
            <p className={'text-pink text-label-md font-satoshi'}>
              *{errors['username'].message?.toString()}
            </p>
          ) : null}
        </div>
        <div>
          <TextInput
            label="Nomor Handphone (WhatsApp)"
            placeholder="08129389128"
            variant="normal"
            register={register}
            required
            pattern={regex.noHp}
            name="noHP"
          />
          {errors['noHP'] ? (
            <p className={'text-pink text-label-md font-satoshi'}>
              *mohon masukkan nomor hanphone dengan benar
            </p>
          ) : null}
        </div>
        <div>
          <TextInput
            label="Password"
            variant="password"
            placeholder="Tuliskan password kamu"
            register={register}
            pattern={regex.password}
            required
            name="password"
          />
          {errors['password'] ? (
            <p className={'text-pink text-label-md font-satoshi'}>
              *password harus terdiri dari minimal 8 karakter kombinasi huruf
              dan angka
            </p>
          ) : null}
        </div>
        <div>
          <TextInput
            label="Konfirmasi Password"
            placeholder="Your Confirmation Password Here"
            variant="confirm-password"
            register={register}
            watch={watch}
            required
            name="confirmPassword"
          />
          {errors['confirmPassword'] ? (
            <p className={'text-pink text-label-md font-satoshi'}>
              *harus sesuai dengan password
            </p>
          ) : null}
        </div>
        <div className={styles.checkbox}>
          <p className="text-label-lg">
            Dengan mendaftar, saya menyetujui
            <Link href="/syarat-kententuan">Syarat dan Ketentuan</Link>&
            <Link href="/kebijakan-privasi">Kebijakan Privasi</Link>
          </p>
        </div>
        <div className={styles.bottom}>
          <Button type="submit">Daftar</Button>
          <p className="text-label-lg">
            Sudah punya akun Spill?<Link href="/login">Login</Link>
          </p>
        </div>
      </form>
    </>
  )
}

function Verification() {
  return (
    <>
      <div className="space-y-2">
        <h1 className="text-headline-md font-bold text-center">
          Kode Verifikasi
        </h1>
        <p className="text-title-md font-satoshi text-center">
          Kode dikirimkan melalui WhatsApp, mohon lakukan pengecekan
        </p>
      </div>

      <VerificationCode />

      <Button>Verfikasi</Button>
      <p className="text-label-lg text-muted-foreground font-satoshi">
        Mohon tunggu 29 detik untuk kirim ulang
      </p>
    </>
  )
}

function Component() {
  const [registerActive, setRegisterActive] = useState(true)
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <NextLink href="/" passHref>
          <SpillLogo multiplySize={0.5} isDark={true} />
        </NextLink>
      </div>
      {registerActive ? (
        <div className={styles.wrapper}>
          <Daftar setRegisterActive={setRegisterActive} />
        </div>
      ) : (
        <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[90vw] md:w-[600px] rounded-[20px] p-8 md:p-10 space-y-5">
          <Verification />
        </div>
      )}
    </div>
  )
}

export default Component
