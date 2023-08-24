import { JSXElementConstructor, ReactElement } from 'react'
import MainLayout from '@/component/layouts/MainLayout'
import Image from 'next/image'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import RelatedArticle from '@/component/article/RelatedArticle'
import { useRouter } from 'next/router'

export default function ArticleDetail() {
  const router = useRouter()
  return (
    <main className="bg-background">
      <div className="flex gap-4 items-center main-container">
        <button onClick={() => router.back()}>
          <KeyboardBackspaceIcon />
        </button>
        <h1 className="text-headline-sm font-[900] font-satoshi">Artikel</h1>
      </div>
      <div className="main-container flex flex-col gap-5 lg:grid lg:grid-cols-[800px_1fr] lg:gap-8">
        <article className="rounded-[20px] p-5 flex flex-col gap-5 bg-white shadow-sm">
          <div className="relative w-full h-[200px]">
            <Image
              fill
              className="object-cover inset-0 rounded-[20px]"
              src={'/content.png'}
              alt="article-img"
            />
          </div>

          <div className="space-y-2">
            <h1 className="text-title-lg font-bold font-satoshi">
              14 Strategi Efektif Mengembangkan Bisnis Menggunakan Digital
              Marketing
            </h1>
            <p className="text-body-lg font-satoshi">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              consequat pharetra risus, ac varius libero elementum eget.
              Curabitur eu aliquam ante, non sollicitudin magna. Vestibulum quis
              nulla nec nibh tempor feugiat. Cras eu lorem sed nisi interdum
              ornare non eu dui. Morbi vehicula, nulla ac porttitor porta, purus
              lectus maximus felis, ac elementum ante velit vel ex. Cras et
              ultrices urna, non malesuada ex. Aenean cursus, ante eu porta
              consequat, mauris ex ullamcorper dui, non posuere lorem quam id
              ipsum. Pellentesque in augue vulputate elit posuere malesuada.
              Aliquam euismod hendrerit est quis mollis. Sed facilisis dui vitae
              neque pulvinar, vitae scelerisque sem lacinia. Maecenas et enim
              sed massa finibus vulputate. Morbi scelerisque est nec nibh
              rhoncus cursus. Vivamus sagittis arcu in ipsum pretium, id laoreet
              metus malesuada. Fusce blandit nisi erat, ut posuere massa porta
              in. Donec in varius turpis, eget egestas risus. Maecenas tellus
              urna, pharetra nec mi ac, pretium semper lacus. <br /> <br />
              Suspendisse tempor pretium Vestibulum erat diam, consectetur eu
              enim congue, vestibulum tempor justo. Nam at nunc at leo lacinia
              placerat eu eu tortor. Quisque congue, nulla non semper interdum,
              turpis lorem finibus nisl, ut ornare ipsum elit pellentesque
              tellus. Quisque a rhoncus lectus, vitae ullamcorper mi. Phasellus
              diam enim, tempor ac maximus id, volutpat id odio. Cras felis
              nisl, laoreet at tortor ut, lobortis finibus tortor. Sed
              dignissim, felis quis convallis pulvinar, dui ex laoreet velit, ut
              tristique enim enim in ipsum. Curabitur id dictum dui.
              Pellentesque mi leoaccumsan at purus quis, ultrices dapibus dolor.
              Morbi dapibus interdum mauris, in luctus lectus dapibus sit amet.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
              <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              consequat pharetra risus, ac varius libero elementum eget.
              Curabitur eu aliquam ante, non sollicitudin magna. Vestibulum quis
              nulla nec nibh tempor feugiat. Cras eu lorem sed nisi interdum
              ornare non eu dui. Morbi vehicula, nulla ac porttitor porta, purus
              lectus maximus felis, ac elementum ante velit vel ex. Cras et
              ultrices urna, non malesuada ex. Aenean cursus, ante eu porta
              consequat, mauris ex ullamcorper dui, non posuere lorem quam id
              ipsum. Pellentesque in augue vulputate elit posuere malesuada.
              Aliquam euismod hendrerit est quis mollis. Sed facilisis dui vitae
              neque pulvinar, vitae scelerisque sem lacinia. Maecenas et enim
              sed massa finibus vulputate. Morbi scelerisque est nec nibh
              rhoncus cursus. Vivamus sagittis arcu in ipsum pretium, id laoreet
              metus malesuada. Fusce blandit nisi erat, ut posuere massa porta
              in. Donec in varius turpis, eget egestas risus. Maecenas tellus
              urna, pharetra nec mi ac, pretium semper lacus. Suspendisse tempor
              pretium ipsum, ut pretium odio auctor in. Vestibulum erat diam,
              consectetur eu enim congue, vestibulum tempor justo. Nam at nunc
              at leo lacinia placerat eu eu tortor. Quisque congue, nulla non
              semper interdum, turpis lorem finibus nisl, ut ornare ipsum elit
              pellentesque tellus. Quisque a rhoncus lectus, vitae ullamcorper
              mi. Phasellus diam enim, tempor ac maximus id, volutpat id odio.
              Cras felis nisl, laoreet at tortor ut, lobortis finibus tortor.
              Sed dignissim, felis quis convallis pulvinar, dui ex laoreet
              velit, ut tristique enim enim in ipsum. Curabitur id dictum dui.
              Pellentesque mi leo, accumsan at purus quis, ultrices dapibus
              dolor. Morbi dapibus interdum mauris, in luctus lectus dapibus sit
              amet. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas.
            </p>
          </div>
        </article>

        <div className="flex flex-col gap-5 mt-10 md:mt-0">
          <h3 className="text-left text-headline-sm font-bold">Terkait</h3>
          <RelatedArticle />
          <RelatedArticle />
          <RelatedArticle />
          <RelatedArticle />
        </div>
      </div>
    </main>
  )
}

ArticleDetail.getLayout = (
  page: ReactElement<any, string | JSXElementConstructor<any>>
) => <MainLayout isNormal={true}>{page}</MainLayout>
