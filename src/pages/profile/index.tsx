import Button from '@/component/elements/Button/component'
import { useToast } from '@/hooks/useToast'

type Props = {}

export default function Profile({}: Props) {
  const { toast } = useToast()

  return (
    <div>
      <h1>HI</h1>
      <Button
        onClick={() => {
          toast({
            description: 'Password baru berhasil disimpan',
          })
        }}
      >
        Test Toast
      </Button>
    </div>
  )
}
