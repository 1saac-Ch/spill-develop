import React, {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react'

export default function VerificationCode() {
  const [otp, setOtp] = useState(new Array(4).fill(''))
  const [activeInputIndex, setActiveInputIndex] = useState(0)
  const activeInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    activeInputRef.current?.focus()
  }, [activeInputIndex])

  function handleOtpChange(e: ChangeEvent<HTMLInputElement>, index: number) {
    const { value } = e.target

    setOtp((prev) => {
      const newOTP = [...prev]
      newOTP[index] = value
      return newOTP
    })

    if (value && activeInputIndex !== 3) {
      setActiveInputIndex((curr) => curr + 1)
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>, idx: number) {
    if (e.key !== 'Backspace') return
    if (activeInputIndex !== 0) {
      setActiveInputIndex((curr) => curr - 1)
    }

    setOtp((prev) => {
      const newOTP = [...prev]
      newOTP[idx] = ''
      return newOTP
    })
  }
  return (
    <div className="flex gap-5 justify-center">
      {otp.map((val, idx) => (
        <input
          ref={activeInputIndex === idx ? activeInputRef : null}
          key={idx}
          type="text"
          className={
            'appearance-none w-[60px] h-11 rounded-xl border border-neutral-400 text-center font-bold'
          }
          value={val}
          onChange={(e) => handleOtpChange(e, idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
        />
      ))}
    </div>
  )
}
