import styles from './styles.module.scss'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import React from 'react'
import { cn } from '@/utils/classname'
import { UseFormRegister, UseFormWatch } from 'react-hook-form'

type TextInputProps = {
  label: string
  value: string
  onChange: (e: any) => void
  variant: 'normal' | 'password' | 'textarea' | 'confirm-password'
  id: string
  placeholder?: string
  className?: string
  required?: boolean
  register: UseFormRegister<any>
  name: any
  pattern?: RegExp
  message?: string
  watch: UseFormWatch<any>
}

function Component({
  label,
  value,
  onChange,
  variant,
  id,
  name,
  placeholder,
  className,
  required = false,
  register,
  pattern,
  watch,
  message,
}: TextInputProps) {
  const [showPassword, setShowPassword] = React.useState<boolean>(false)

  const _handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const Variants = (className: string = '') => {
    switch (variant) {
      case 'normal':
        return (
          <div className={cn(styles.wrapper, className)}>
            <input
              className="outline-none disabled:cursor-not-allowed disabled:text-muted-foreground"
              required={required}
              placeholder={placeholder}
              {...register(name, {
                pattern: {
                  value: pattern,
                  message,
                } as any,
              })}
            />
          </div>
        )
      case 'textarea':
        return (
          <div className={cn(styles.wrapper, className)}>
            <textarea
              className="disabled:cursor-not-allowed disabled:text-muted-foreground"
              required={required}
              {...register(name, {
                pattern,
                maxLength: {
                  message: 'Tidak lebih dari 255 karakter !',
                  value: 255,
                },
              })}
              rows={3}
              placeholder={placeholder}
              onChange={onChange}
              value={value}
            />
          </div>
        )
      case 'password':
        return (
          <div className={cn(styles.wrapper, className)}>
            <input
              required={required}
              className="outline-none disabled:cursor-not-allowed disabled:text-muted-foreground"
              type={showPassword ? 'text' : 'password'}
              id={id}
              placeholder={placeholder}
              {...register(name, {
                pattern,
              })}
            />
            <div className={styles.icon} onClick={_handleShowPassword}>
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </div>
          </div>
        )
      case 'confirm-password':
        return (
          <div className={cn(styles.wrapper, className)}>
            <input
              required={required}
              type={showPassword ? 'text' : 'password'}
              className="outline-none disabled:cursor-not-allowed disabled:text-muted-foreground"
              id={id}
              placeholder={placeholder}
              {...register(name, {
                pattern,
                validate: (val: string) => {
                  if (watch('password') != val) {
                    return 'Konfirmasi password harus sesuai dengan password'
                  }
                },
              })}
            />
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
      {Variants(className)}
    </div>
  )
}

export default Component
