import OnlineReview from '@/assets/images/OnlineReview.png'
import Image from 'next/image'
import Button from '../elements/Button/component'

const WriteReview = () => {
  return (
    <div className="bg-[#E8FBF5] flex flex-col md:flex-row items-center gap-6 p-6 rounded-lg w-[85%] md:w-auto mx-auto">
      <Image
        src={OnlineReview}
        alt="online-review"
        className="w-[200px] h-[200px] object-contain flex-none"
      />

      <div className="space-y-4">
        <h3 className="font-satoshi text-title-lg font-[700] md:font-[900] tracking-[0.01px]">
          Ingin Tulis Review?
        </h3>

        <p className="text-title-md font-satoshi">
          Yuk bantu menuliskan review untuk membantu pengguna lain menemukan
          produk mereka
        </p>

        <Button
          variant="outline"
          className="border-dark text-dark hover:border w-full md:w-[200px]"
        >
          Tulis Review
        </Button>
      </div>
    </div>
  )
}

export default WriteReview
