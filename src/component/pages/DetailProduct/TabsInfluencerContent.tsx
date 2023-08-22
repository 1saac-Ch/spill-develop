import ContentCard from '@/component/ContentCard'
import { dataContentYotube } from '@/component/ContentCard/api.youtube'
import { dataContentTiktok } from '@/component/main/MainContentTiktok/api.tiktok'
import YoutubeCard from '@/component/elements/YoutubeCard'
import TiktokCard from '@/component/elements/TiktokCard'

export default function TabsInfluencerContent() {
  return (
    <div className="space-y-10">
      <ContentCard
        dataContent={dataContentYotube}
        title="Konten Review Pilihan"
      >
        {(content) =>
          content.map((item, i) => (
            <YoutubeCard
              youtubeUrl={item.url}
              title={item.title_content}
              key={i}
            />
          ))
        }
      </ContentCard>
      <ContentCard
        dataContent={dataContentYotube}
        title="Konten Review Pilihan"
      >
        {(content) =>
          content.map((item, i) => (
            <YoutubeCard
              youtubeUrl={item.url}
              title={item.title_content}
              key={i}
            />
          ))
        }
      </ContentCard>
      <ContentCard
        dataContent={dataContentYotube}
        title="Konten Review Pilihan"
      >
        {(content) =>
          content.map((item, i) => (
            <YoutubeCard
              youtubeUrl={item.url}
              title={item.title_content}
              key={i}
            />
          ))
        }
      </ContentCard>

      <ContentCard
        dataContent={dataContentTiktok}
        title="Konten Tiktok Pilihan"
      >
        {(content) =>
          content.map((item, i) => <TiktokCard tiktokUrl={item.url} key={i} />)
        }
      </ContentCard>
    </div>
  )
}
