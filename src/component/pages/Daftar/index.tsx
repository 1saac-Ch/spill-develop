import { Dispatch, useState } from 'react'
import NextLink from 'next/link'
import Link from 'next/link'

import styles from './index.module.scss'

import SpillLogo from '@/component/elements/SpillLogo'
import TextInput from '@/component/elements/TextInput'
import Button from '@/component/elements/Button'
import { regex } from '@/utils/regex'
import VerificationCode from '@/component/elements/VerificationInput'

function Daftar({
  setRegisterActive,
}: {
  setRegisterActive: Dispatch<React.SetStateAction<boolean>>
}) {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [noHp, setNoHp] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const _handleChange = (e: any) => {
    let id = e.target.id
    let value = e.target.value
    if (id === 'username') {
      setUsername(value)
    } else if (id === 'password') {
      if (regex.password.test(value)) {
        setPassword(value)
      }
    } else if (id === 'name') {
      setName(value)
    } else if (id === 'noHp') {
      if (regex.number.test(value)) {
        setNoHp(value)
      }
      if (
        noHp.length === 1 &&
        e.nativeEvent.inputType === 'deleteContentBackward'
      ) {
        setNoHp('')
      }
    } else if (id === 'confirmPassword') {
      setConfirmPassword(value)
    }
  }
  return (
    <>
      <h1>Daftar di Spill 🚀</h1>
      <p>Bisa cari produk apapun, tanpa ragu checkoutnya!</p>
      <TextInput
        label="Nama"
        placeholder="Tuliskan nama kamu"
        variant="normal"
        value={name}
        id="name"
        onChange={_handleChange}
      />
      <TextInput
        label="Username"
        placeholder="Tuliskan username"
        variant="normal"
        value={username}
        id="username"
        onChange={_handleChange}
      />
      <TextInput
        label="Nomor Handphone (WhatsApp)"
        placeholder="08129389128"
        variant="normal"
        value={noHp}
        id="noHp"
        onChange={_handleChange}
      />
      <TextInput
        label="Password"
        variant="password"
        placeholder="Tuliskan password kamu"
        value={password}
        id="password"
        onChange={(e: any) => setPassword(e.target.value)}
      />
      <TextInput
        label="Konfirmasi Password"
        placeholder="Your Confirmation Password Here"
        variant="password"
        value={confirmPassword}
        id="confirmPassword"
        onChange={(e: any) => setConfirmPassword(e.target.value)}
      />
      <div className={styles.checkbox}>
        <p>
          Dengan mendaftar, saya menyetujui
          <Link href="/syarat-kententuan">Syarat dan Ketentuan</Link>&
          <Link href="/kebijakan-privasi">Kebijakan Privasi</Link>
        </p>
      </div>
      <div className={styles.bottom}>
        <Button onClick={() => setRegisterActive(false)}>Login</Button>
        <p>
          Sudah punya akun Spill?<Link href="/login">Login</Link>
        </p>
      </div>
    </>
  )
}

function Verification() {
  return (
    <>
      <div className="space-y-2">
        <h1 className="text-headline-md font-bold">Kode Verifikasi</h1>
        <p className="text-title-md font-satoshi">
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
        <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[600px] rounded-[20px] p-[40px] text-center space-y-5 font-satoshi">
          <Verification />
        </div>
      )}
    </div>
  )
}

export default Component
