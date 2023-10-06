import { cn } from '@/utils/classname'
import { useId } from 'react'
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
  ValidationRule,
} from 'react-hook-form'

const InputClassname =
  'py-3 px-4 rounded-xl border border-[#A6A6A6] placeholder:text-label-lg placeholder:text-muted-foreground'

export default function Input<T extends FieldValues>({
  register,
  label,
  name,
  placeholder,
  errors,
  pattern,
}: {
  register: UseFormRegister<T>
  label: string
  name: Path<T>
  placeholder: string
  errors: FieldErrors<T>
  pattern?: ValidationRule<RegExp>
}) {
  const id = useId()

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        placeholder={placeholder}
        className={cn(InputClassname, errors[name] && 'border-pink')}
        type="text"
        {...register(name, {
          required: 'Tolong isi field ini',
          minLength: { value: 8, message: 'Gunakan 8 karakter' },
          pattern,
        })}
      />
      {errors[name] ? (
        <p className={'text-pink text-label-md font-satoshi'}>
          *{errors[name]?.message?.toString()}
        </p>
      ) : null}
    </>
  )
}
