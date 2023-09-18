import { useState } from 'react'
import NextLink from 'next/link'
import Link from 'next/link'

import styles from './index.module.scss'
import TextInput from '@/component/elements/TextInput'
import Checkbox from '@/component/elements/Checkbox'
import Button from '@/component/elements/Button'
import { regex } from '@/utils/regex'
import SpillLogo from '@/component/elements/SpillLogo'
import { useForm } from 'react-hook-form'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

type FormField = {
  noHP: string
  password: string
}

function Component() {
  const [remember, setRemember] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormField>({
    defaultValues: {
      noHP: '',
      password: '',
    },
  })

  const _handleChange = (e: any) => {
    setRemember(!remember)
  }

  const onSubmit = async (e: FormField) => {
    setIsLoading(true)

    const res = await signIn('credentials', {
      ...e,
      redirect: false,
    })

    if (!res?.ok) {
      setLoginError('Username atau password salah')
      setIsLoading(false)
    } else {
      const currPath = router.asPath
      const url = new URL(currPath, 'http://localhost:3000')
      router.push(url.searchParams.get('callbackUrl') || '/')
    }
  }

  return (
    <main className={styles.root}>
      <div className={styles.header}>
        <NextLink href="/" passHref>
          <SpillLogo multiplySize={0.5} isDark={true} />
        </NextLink>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
        <header className="space-y-1 md:space-y-2 pb-3">
          <h1 className="text-headline-sm font-[900] text-center tracking-[0.01px] md:text-headline-md md:font-bold">
            Login Yuk 🚀
          </h1>
          <p className="text-title-sm md:text-title-md text-center">
            Nikmati kemudahan dalam mencari produk!
          </p>
        </header>
        {loginError ? (
          <p className="text-pink text-label-md font-satoshi">{loginError}</p>
        ) : null}
        <fieldset className="space-y-5" disabled={isLoading}>
          <TextInput
            label="Nomor Handphone"
            placeholder="Nomor handphone kamu"
            variant="normal"
            register={register}
            pattern={regex.noHp}
            name="noHP"
            required
          />
          {errors['noHP'] ? (
            <p className={'text-pink text-label-md font-satoshi'}>
              *mohon masukkan nomor hanphone dengan benar
            </p>
          ) : null}
          <TextInput
            label="Password"
            variant="password"
            placeholder="Tulis password kamu"
            register={register}
            name="password"
            required
          />
          <div className={styles.checkbox}>
            <Checkbox
              checked={remember}
              label="Biarkan saya tetap masuk"
              onChange={_handleChange}
            />
            <Link href="/forgot-password">Lupa Password</Link>
          </div>
          <div className={styles.bottom}>
            <Button
              className="disabled:cursor-not-allowed disabled:bg-blue-400"
              type="submit"
            >
              Login
            </Button>
            <p className="text-label-lg">
              Belum punya akun Spill?<Link href="/daftar">Daftar</Link>
            </p>
          </div>
        </fieldset>
      </form>
    </main>
  )
}

export default Component
