import { useState } from "react";
import Link from "next/link";

import styles from "./index.module.scss";
import TextInput from "@/component/elements/TextInput";
import Checkbox from "@/component/elements/Checkbox";
import Button from "@/component/elements/Button";
import { regex } from "@/utils/regex";
import SpillLogo from "@/component/elements/SpillLogo";

function Component() {
  const [noHp, setNoHp] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(false);

  const _handleChange = (e: any) => {
    let id = e.target.id
    if (id === "noHp") {
      if (regex.number.test(e.target.value)) {
        setNoHp(e.target.value);
      }
      if (noHp.length === 1 && e.nativeEvent.inputType === "deleteContentBackward") {
        setNoHp("");
      }
    } else if (id === "password") {
      setPassword(e.target.value);
    } else if (id === "remember") {
      setRemember(!remember);
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <SpillLogo multiplySize={0.5} isDark={true} />
      </div>
      <div className={styles.wrapper}>
        <h1>Login Yuk 🚀</h1>
        <p>Nikmati kemudahan dalam mencari produk!</p>
        <TextInput label="Nomor Handphone" placeholder="Nomor handphone kamu" variant="normal" value={noHp} id="username" onChange={_handleChange} />
        <TextInput label="Password" variant="password" placeholder="Tulis password kamu" value={password} id="password" onChange={_handleChange} />
        <div className={styles.checkbox}>
          <Checkbox checked={remember} label="Biarkan saya tetap masuk" id="remember" onChange={_handleChange} />
          <Link href="/forgot-password">Lupa Password</Link>
        </div>
        <div className={styles.bottom}>
          <Button>Login</Button>
          <p>Belum punya akun Spill?<Link href="/daftar">Daftar</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Component;