import styles from "./styles.module.scss";
import clsx from "clsx";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import React from "react";


type TextInputProps = {
  label: string,
  value: string,
  onChange: (e: any) => void,
  variant: "normal" | "password" | 'textarea',
  id: string,
  placeholder?: string
}

function Component({ label, value, onChange, variant, id, placeholder }: TextInputProps) {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const _handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const Variants = () => {
    switch (variant) {
      case "normal":
        return (
          <div className={styles.wrapper}>
            <input placeholder={placeholder} id={id} onChange={onChange} value={value} />
          </div>
        )
      case "textarea":
        return (
          <div className={styles.wrapper}>
            <textarea rows={3} placeholder={placeholder} onChange={onChange} value={value}/>
          </div>
        )
      case "password":
        return (
          <div className={styles.wrapper}>
            <input type={showPassword ? "text" : "password"} id={id} placeholder={placeholder} onChange={onChange} value={value} />
            <div className={styles.icon} onClick={_handleShowPassword}>
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </div>
          </div>
        )
    }
  }

  return (
    <div className={styles.root}>
      <label>{label}</label>
      {Variants()}
    </div>
  )
}

export default Component