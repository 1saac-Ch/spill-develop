import MainLayout from '@/component/layouts/MainLayout'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import Image from 'next/image'
import React, { JSXElementConstructor, ReactElement } from 'react'

export default function Article() {
  return (
    <main className="py-10 px-5 space-y-5 bg-background">
      <div className="flex gap-4 items-center">
        <KeyboardBackspaceIcon />
        <h1 className="text-headline-sm font-[900]">Artikel</h1>
      </div>

      <article className="rounded-[20px] p-5 flex flex-col gap-5 bg-white shadow-md">
        <div className="relative w-full h-[200px]">
          <Image
            fill
            className="object-cover inset-0 rounded-[20px]"
            src={
              'https://s3-alpha-sig.figma.com/img/0505/ebd6/965c841fb79dcd825119b469f829a2d1?Expires=1691366400&Signature=WC8pWadwDcBKr4xhRsm1vvjzQsr3FBtfSo34iRpc20FfwMAWgLXZXgAc2Ubc~~kLnMkajmTSmBJf2Cp8osc8MxwYWQw5jBvJdkwmSaQLvXh5MLtV~3Zl3JA2pa~LXt0XVYUySL7JDKOFZsn7NpLh1o5CvZ546T-fXJG1dTVgP4Bz0Xy1aSKDLD0wGgMiV1bpQVzKpvcv3SGA3KB0NlV~12H3lbZa-yHTb4TbFmdNipUSyTu~-ZvjlExCfibVmLjZjEDiaQ4g589luDZzV~4iqN6pwV8R8zx-~n5zvHDpyrkQmtQSoAWyFOTyfzRZpzxuBiYxmqIGHJnC89xK8TxkAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
            }
            alt="article-img"
          />
        </div>

        <div className="space-y-2">
          <h1 className="text-title-lg font-bold font-satoshi">
            14 Strategi Efektif Mengembangkan Bisnis Menggunakan Digital
            Marketing
          </h1>
          <p className="text-body-lg font-satoshi self-stretch text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            consequat pharetra risus, ac varius libero elementum eget. Curabitur
            eu aliquam ante, non sollicitudin magna. Vestibulum quis nulla nec
            nibh tempor feugiat. Cras eu lorem sed nisi interdum ornare non eu
            dui. Morbi vehicula, nulla ac porttitor porta, purus lectus maximus
            felis, ac elementum ante velit vel ex. Cras et ultrices urna, non
            malesuada ex. Aenean cursus, ante eu porta consequat, mauris ex
            ullamcorper dui, non posuere lorem quam id ipsum. Pellentesque in
            augue vulputate elit posuere malesuada. Aliquam euismod hendrerit
            est quis mollis. Sed facilisis dui vitae neque pulvinar, vitae
            scelerisque sem lacinia. Maecenas et enim sed massa finibus
            vulputate. Morbi scelerisque est nec nibh rhoncus cursus. Vivamus
            sagittis arcu in ipsum pretium, id laoreet metus malesuada. Fusce
            blandit nisi erat, ut posuere massa porta in. Donec in varius
            turpis, eget egestas risus. Maecenas tellus urna, pharetra nec mi
            ac, pretium semper lacus.
            <br /> <br />
            Suspendisse tempor pretium  Vestibulum erat diam, consectetur eu
            enim congue, vestibulum tempor justo. Nam at nunc at leo lacinia
            placerat eu eu tortor. Quisque congue, nulla non semper interdum,
            turpis lorem finibus nisl, ut ornare ipsum elit pellentesque tellus.
            Quisque a rhoncus lectus, vitae ullamcorper mi. Phasellus diam enim,
            tempor ac maximus id, volutpat id odio. Cras felis nisl, laoreet at
            tortor ut, lobortis finibus tortor. Sed dignissim, felis quis
            convallis pulvinar, dui ex laoreet velit, ut tristique enim enim in
            ipsum. Curabitur id dictum dui. Pellentesque mi leo accumsan at
            purus quis, ultrices dapibus dolor. Morbi dapibus interdum mauris,
            in luctus lectus dapibus sit amet. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            <br /> <br />
            <span className="ml-10">Lorem</span> ipsum dolor sit amet,
            consectetur adipiscing elit. Nunc consequat pharetra risus, ac
            varius libero elementum eget. Curabitur eu aliquam ante, non
            sollicitudin magna. Vestibulum quis nulla nec nibh tempor feugiat.
            Cras eu lorem sed nisi interdum ornare non eu dui. Morbi vehicula,
            nulla ac porttitor porta, purus lectus maximus felis, ac elementum
            ante velit vel ex. Cras et ultrices urna, non malesuada ex. Aenean
            cursus, ante eu porta consequat, mauris ex ullamcorper dui, non
            posuere lorem quam id ipsum. Pellentesque in augue vulputate elit
            posuere malesuada. Aliquam euismod hendrerit est quis mollis. Sed
            facilisis dui vitae neque pulvinar, vitae scelerisque sem lacinia.
            Maecenas et enim sed massa finibus vulputate. Morbi scelerisque est
            nec nibh rhoncus cursus. Vivamus sagittis arcu in ipsum pretium, id
            laoreet metus malesuada. Fusce blandit nisi erat, ut posuere massa
            porta in. Donec in varius turpis, eget egestas risus. Maecenas
            tellus urna, pharetra nec mi ac, pretium semper lacus. Suspendisse
            tempor pretium ipsum, ut pretium odio auctor in. Vestibulum erat
            diam, consectetur eu enim congue, vestibulum tempor justo. Nam at
            nunc at leo lacinia placerat eu eu tortor. Quisque congue, nulla non
            semper interdum, turpis lorem finibus nisl, ut ornare ipsum elit
            pellentesque tellus. Quisque a rhoncus lectus, vitae ullamcorper mi.
            Phasellus diam enim, tempor ac maximus id, volutpat id odio. Cras
            felis nisl, laoreet at tortor ut, lobortis finibus tortor. Sed
            dignissim, felis quis convallis pulvinar, dui ex laoreet velit, ut
            tristique enim enim in ipsum. Curabitur id dictum dui. Pellentesque
            mi leo, accumsan at purus quis, ultrices dapibus dolor. Morbi
            dapibus interdum mauris, in luctus lectus dapibus sit amet.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </p>
        </div>
      </article>

      <div className="flex flex-col gap-5">
        <h3 className="text-left text-headline-sm font-bold mt-8">Terkait</h3>

        <div className="p-5 flex items-center gap-5 rounded-[20px] shadow-lg bg-white">
          <div className="relative w-[60px] h-[60px] flex-none">
            <Image
              fill
              className="object-cover inset-0 rounded-[8px]"
              src={
                'https://s3-alpha-sig.figma.com/img/0505/ebd6/965c841fb79dcd825119b469f829a2d1?Expires=1691366400&Signature=WC8pWadwDcBKr4xhRsm1vvjzQsr3FBtfSo34iRpc20FfwMAWgLXZXgAc2Ubc~~kLnMkajmTSmBJf2Cp8osc8MxwYWQw5jBvJdkwmSaQLvXh5MLtV~3Zl3JA2pa~LXt0XVYUySL7JDKOFZsn7NpLh1o5CvZ546T-fXJG1dTVgP4Bz0Xy1aSKDLD0wGgMiV1bpQVzKpvcv3SGA3KB0NlV~12H3lbZa-yHTb4TbFmdNipUSyTu~-ZvjlExCfibVmLjZjEDiaQ4g589luDZzV~4iqN6pwV8R8zx-~n5zvHDpyrkQmtQSoAWyFOTyfzRZpzxuBiYxmqIGHJnC89xK8TxkAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
              }
              alt="article-img"
            />
          </div>

          <h4 className="text-title-md font-medium truncate">
            14 Strategi Efektif Mengembangkan Bisnis Menggunakan Digital
            Marketing
          </h4>
        </div>
      </div>
    </main>
  )
}

Article.getLayout = (
  page: ReactElement<any, string | JSXElementConstructor<any>>
) => <MainLayout isNormal={true}>{page}</MainLayout>
