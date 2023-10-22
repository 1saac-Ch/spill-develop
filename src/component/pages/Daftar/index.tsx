import Link from 'next/link'

import styles from './index.module.scss'

import SpillLogo from '@/component/elements/SpillLogo'
import TextInput from '@/component/elements/TextInput'
import Button from '@/component/elements/Button'
import { regex } from '@/utils/regex'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useRouter } from 'next/router'

type FormData = {
  fullname: string
  username: string
  no_hp: string
  password: string
  confirmPassword: string
}

function Daftar() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorRegister, setErrorRegister] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm<FormData>({
    defaultValues: {
      fullname: '',
      username: '',
      no_hp: '',
      password: '',
      confirmPassword: '',
    },
  })

  const router = useRouter()

  const handleRegister = async (e: FormData) => {
    setIsSubmitting(true)
    try {
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullname: e.fullname,
            username: e.username,
            no_hp: e.no_hp,
            password: e.password,
          }),
          method: 'POST',
        }
      )
      const data = await resp.json()
      if (!resp.ok) {
        setErrorRegister(data.message)
      } else {
        router.replace('/login')
      }
    } catch (error) {
      setErrorRegister('Registrasi gagal')
      return null
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <h1 className="text-headline-sm font-[900] text-center tracking-[0.01px] md:text-headline-md md:font-bold">
        Daftar di Spill 🚀
      </h1>
      <p className="text-title-md text-center">
        Bisa cari produk apapun, tanpa ragu checkoutnya!
      </p>
      {errorRegister ? (
        <p className={'text-pink text-title-md'}>{errorRegister}</p>
      ) : null}

      <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset disabled={isSubmitting} className="space-y-5">
          <div>
            <TextInput
              pattern={regex.fullname}
              label="Nama"
              placeholder="Tuliskan nama kamu"
              variant="normal"
              register={register}
              required
              name="fullname"
            />
            {errors['fullname'] ? (
              <p className={'text-pink text-label-md font-satoshi'}>
                *Nama setidaknya berisi 6 karakter
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
              pattern={regex.username}
              message="Username tidak boleh berisi karakter spesial"
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
              name="no_hp"
            />
            {errors['no_hp'] ? (
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
                *password harus terdiri dari minimal 8 karakter, maksimal 16,
                berisi kombinasi huruf dan angka
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
            <Button className="disabled:bg-opacity-80" type="submit">
              {isSubmitting ? 'Loading...' : 'Daftar'}
            </Button>
            <p className="text-label-lg">
              Sudah punya akun Spill?
              <Link scroll={false} href="/login">
                Login
              </Link>
            </p>
          </div>
        </fieldset>
      </form>
    </>
  )
}

function Component() {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Link href="/" scroll={false}>
          <SpillLogo multiplySize={0.5} isDark={true} />
        </Link>
      </div>

      <div className={styles.wrapper}>
        <Daftar />
      </div>
    </div>
  )
}

export default Component
