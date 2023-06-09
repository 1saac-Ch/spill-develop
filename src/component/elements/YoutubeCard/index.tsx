
import React from 'react';
import ReactPlayer from 'react-player';

type CardYoutubeProps = {
    youtubeUrl?: string
    title?: string
}

const YoutubeCard = ({
    youtubeUrl,
    title
}: CardYoutubeProps) => {
    return (
        <div className='rounded-xl w-[460px] overflow-hidden shadow-md'>
            <ReactPlayer url={youtubeUrl} width="100%" height="320px" config={{
                youtube: { playerVars: { disablekb: 1 } },
            }} controls={true} />
            <div className='p-6'>
                <h1 className='font-tebal text-xl'>{title}</h1>
            </div>
        </div>
    )
}

export default YoutubeCard
