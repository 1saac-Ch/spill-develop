import Image from 'next/image'
import Link from 'next/link'

export default function RelatedArticle() {
  return (
    <Link
      href={`/article/1`}
      className="p-5 flex items-center gap-5 rounded-[20px] shadow bg-white"
    >
      <div className="relative w-[60px] h-[60px] lg:w-[120px] lg:h-[120px] flex-none lg:rounded-[20px]">
        <Image
          fill
          className="object-cover inset-0 rounded-[8px]"
          src={
            'https://s3-alpha-sig.figma.com/img/0505/ebd6/965c841fb79dcd825119b469f829a2d1?Expires=1691366400&Signature=WC8pWadwDcBKr4xhRsm1vvjzQsr3FBtfSo34iRpc20FfwMAWgLXZXgAc2Ubc~~kLnMkajmTSmBJf2Cp8osc8MxwYWQw5jBvJdkwmSaQLvXh5MLtV~3Zl3JA2pa~LXt0XVYUySL7JDKOFZsn7NpLh1o5CvZ546T-fXJG1dTVgP4Bz0Xy1aSKDLD0wGgMiV1bpQVzKpvcv3SGA3KB0NlV~12H3lbZa-yHTb4TbFmdNipUSyTu~-ZvjlExCfibVmLjZjEDiaQ4g589luDZzV~4iqN6pwV8R8zx-~n5zvHDpyrkQmtQSoAWyFOTyfzRZpzxuBiYxmqIGHJnC89xK8TxkAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          }
          alt="article-img"
        />
      </div>

      <h4 className="text-title-md font-bold line-clamp-2 font-satoshi">
        14 Strategi Efektif Mengembangkan Bisnis Menggunakan Digital Marketing
      </h4>
    </Link>
  )
}
