import { TikTokEmbed } from 'react-social-media-embed'

type TiktokProps = {
  tiktokUrl: string
  title?: string
}

const TiktokCard = ({ tiktokUrl }: TiktokProps) => {
  return (
    <div className="w-[400px]">
      {/* <TikTokEmbed url={tiktokUrl} width="100%" /> */}
      <div className="w-full bg-purple-200 aspect-[12/16]" />
    </div>
  )
}

export default TiktokCard
