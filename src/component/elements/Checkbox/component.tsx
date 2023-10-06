import styles from './styles.module.scss'
import CheckIcon from '@mui/icons-material/Check'

type CheckboxProps = {
  checked: boolean
  label: string
  onChange: (e: any) => void
  id?: string
}

function Component({ checked, label, onChange, id }: CheckboxProps) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.checkbox}>
        <input type="checkbox" checked={checked} id={id} onChange={onChange} />
        <span className="flex items-center justify-center">
          {checked && <CheckIcon className="text-white w-4 h-4" />}
        </span>
      </label>
      <span>{label}</span>
    </div>
  )
}

export default Component
