import { useEffect, useMemo, useState } from 'react'
import NextLink from 'next/link'

import styles from './index.module.scss'
import Button from '@/component/elements/Button'
import SpillLogo from '@/component/elements/SpillLogo'
import TextInput from '@/component/elements/TextInput'

import Modal from '@/component/elements/Modal'
import UseDisclosure from '@/component/elements/UseDisclosure'
import VerificationCode from '@/component/elements/VerificationInput'
import { useForm } from 'react-hook-form'
import { regex } from '@/utils/regex'

function InputPhoneNumber({ onSuccess }: { onSuccess: () => void }) {
  const [noHP, setNoHP] = useState('')
  const [error, setError] = useState('')
  const { onOpen, onClose, isOpen } = UseDisclosure()

  useEffect(() => {
    if (!regex.noHp.test(noHP) && !!noHP) {
      setError('mohon masukkan nomor hanphone dengan benar')
    } else {
      setError('')
    }
  }, [noHP])

  function handleBtnClick() {
    if (noHP && !error) {
      onOpen?.()
    }
  }
  return (
    <>
      <h1>Buat Password baru</h1>
      <p>Masukkan nomor handphone yang terdaftar untuk buat kata sandi baru</p>

      <label className="text-label-lg" htmlFor="new-pass">
        Nomor Handphone (WhatsApp)
      </label>

      <div
        className={`flex w-full border-[1px] border-solid mt-2 border-abu rounded-[12px] px-4 py-3 placeholder:text-label-lg ${
          error ? 'border border-pink' : ''
        }`}
      >
        <input
          required={true}
          placeholder="Tuliskan nomor handphone kamu"
          id="new-pass"
          className={`w-full bg-transparent `}
          value={noHP}
          onChange={(e) => setNoHP(e.target.value)}
        />
      </div>
      {error ? (
        <p className={'text-pink text-left text-label-md font-satoshi'}>
          *{error}
        </p>
      ) : null}
      <div className={styles.bottom}>
        <Button
          className="disabled:cursor-not-allowed disabled:opacity-80"
          disabled={error}
          onClick={handleBtnClick}
        >
          Lanjutkan
        </Button>
        <p>
          Belum punya akun Spill?<NextLink href="/daftar">Daftar</NextLink>
        </p>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="text-center border-2 space-y-5 boder-black bg-white p-10 rounded-xl w-[600px]">
          <div className="space-y-2 text-center">
            <h5 className="text-title-lg font-bold font-satoshi">{noHP}</h5>

            <p className="text-title-lg font-satoshi">
              Spill akan mengirimkan kode verifikasi, <br /> apakah yang kamu
              isi benar?
            </p>
          </div>

          <div className="flex gap-5">
            <Button onClick={onClose} variant="outline" className="flex-1 p-0">
              Batal
            </Button>
            <Button onClick={onSuccess} className="flex-1">
              Ya,benar{' '}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}

function InputVerificationCode({ onSuccess }: { onSuccess: () => void }) {
  return (
    <>
      <h1>Kode Verifikasi</h1>
      <p>Kode dikirimkan ke WhatsApp kamu untuk ganti password!</p>
      <VerificationCode />

      <div className={styles.bottom}>
        <Button onClick={onSuccess}>Verifikasi</Button>
        <p>Mohon tunggu 29 detik untuk kirim ulang</p>
      </div>
    </>
  )
}

function InputNewPassword() {
  const { register } = useForm<{ password: string; confirmPassword: string }>()
  return (
    <>
      <h1>Buat Password Baru</h1>
      <p>Masukkan password baru kamu!</p>

      <div className="space-y-5">
        <TextInput
          label="Password baru"
          placeholder="Tulis password baru kamu"
          variant="password"
          id="username"
          register={register}
        />

        <TextInput
          label="Konfirmasi password baru"
          placeholder="Tulis konfirmasi password baru kamu"
          variant="password"
          register={register}
        />
      </div>

      <div className={styles.bottom}>
        <Button>Simpan Password</Button>
      </div>
    </>
  )
}

export default function ForgotPassword() {
  const [activeSection, setActiveSection] = useState<number>(0)

  const SECTION = useMemo(
    () => ({
      0: (
        <InputPhoneNumber
          onSuccess={() => setActiveSection((prev) => prev + 1)}
        />
      ),
      1: (
        <InputVerificationCode
          onSuccess={() => setActiveSection((prev) => prev + 1)}
        />
      ),
      2: <InputNewPassword />,
    }),
    []
  )

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <NextLink href="/" passHref>
          <SpillLogo multiplySize={0.5} isDark={true} />
        </NextLink>
      </div>
      <div className={styles.wrapper}>
        {SECTION[activeSection as keyof typeof SECTION]}
      </div>
    </div>
  )
}
