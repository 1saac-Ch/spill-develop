import ReactPlayer from 'react-player'

type CardYoutubeProps = {
  youtubeUrl?: string
  title?: string
}

const YoutubeCard = ({ youtubeUrl, title }: CardYoutubeProps) => {
  return (
    <div className="rounded-[20px] w-full overflow-hidden shadow-md">
      <div className="relative bg-red-300 h-[320px] w-full"></div>
      {/* <ReactPlayer
        url={youtubeUrl}
        width="100%"
        height="320px"
        config={{
          youtube: { playerVars: { disablekb: 1 } },
        }}
        controls={true}
      /> */}
      <div className="p-4">
        <h1 className="text-title-md font-bold">{title}</h1>
      </div>
    </div>
  )
}

export default YoutubeCard
