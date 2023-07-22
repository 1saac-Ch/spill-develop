import React, { useState } from 'react'
import NextLink from 'next/link'

import styles from './index.module.scss'
import Button from '@/component/elements/Button'
import SpillLogo from '@/component/elements/SpillLogo'

import TextInput from '@/component/elements/TextInput'

export default function ForgotPassword() {
  const [noHP, setNoHP] = useState('')

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <NextLink href="/" passHref>
          <SpillLogo multiplySize={0.5} isDark={true} />
        </NextLink>
      </div>
      <div className={styles.wrapper}>
        <h1>Buat Password baru</h1>
        <p>
          Masukkan nomor handphone yang terdaftar untuk buat kata sandi baru
        </p>

        <TextInput
          label="Nomor Handphone (WhatsApp)"
          placeholder="Tuliskan nomor handphone kamu"
          variant="normal"
          value={noHP}
          id="username"
          onChange={(e: any) => setNoHP(e.target.value)}
          className="px-4 h-11 placeholder:text-label-lg"
        />

        <div className={styles.bottom}>
          <Button>Lanjutkan</Button>
          <p>
            Belum punya akun Spill?<NextLink href="/daftar">Daftar</NextLink>
          </p>
        </div>
      </div>
    </div>
  )
}
