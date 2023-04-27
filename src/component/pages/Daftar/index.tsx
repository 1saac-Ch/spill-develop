import { useState } from "react";
import Link from "next/link";

import styles from "./index.module.scss";

import SpillLogo from "@/component/elements/SpillLogo";
import TextInput from "@/component/elements/TextInput";
import Button from "@/component/elements/Button";
import { regex } from "@/utils/regex";

function Component() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [noHp, setNoHp] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const _handleChange = (e: any) => {

    let id = e.target.id
    let value = e.target.value
    if (id === "username") {
      setUsername(value);
    } else if (id === "password") {
      if (regex.password.test(value)) {
        setPassword(value);
      }
    } else if (id === "name") {
      setName(value);
    } else if (id === "noHp") {
      if (regex.number.test(value)) {
        setNoHp(value);
      }
      if (noHp.length === 1 && e.nativeEvent.inputType === "deleteContentBackward") {
        setNoHp("");
      }
    } else if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <SpillLogo multiplySize={0.5} isDark={true} />
      </div>
      <div className={styles.wrapper}>
        <h1>Daftar di Spill 🚀</h1>
        <p>Bisa cari produk apapun, tanpa ragu checkoutnya!</p>
        <TextInput label="Nama" placeholder="Tuliskan nama kamu" variant="normal" value={name} id="name" onChange={_handleChange} />
        <TextInput label="Username" placeholder="Tuliskan username" variant="normal" value={username} id="username" onChange={_handleChange} />
        <TextInput label="Nomor Handphone (WhatsApp)" placeholder="08129389128" variant="normal" value={noHp} id="noHp" onChange={_handleChange} />
        <TextInput label="Password" variant="password" placeholder="Tuliskan password kamu" value={password} id="password" onChange={_handleChange} />
        <TextInput label="Konfirmasi Password" placeholder="Your Confirmation Password Here" variant="password" value={confirmPassword} id="confirmPassword" onChange={_handleChange} />
        <div className={styles.checkbox}>
          <p>Dengan mendaftar, saya menyetujui<Link href="/syarat-kententuan">Syarat dan Ketentuan</Link>&<Link href="/kebijakan-privasi">Kebijakan Privasi</Link></p>
        </div>
        <div className={styles.bottom}>
          <Button>Login</Button>
          <p>Sudah punya akun Spill?<Link href="/login">Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Component;