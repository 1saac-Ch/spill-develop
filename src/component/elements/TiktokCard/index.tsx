
import React from 'react';
import { TikTokEmbed } from 'react-social-media-embed';


type TiktokProps = {
    tiktokUrl: string
    title?: string
}

const TiktokCard = ({ tiktokUrl }: TiktokProps) => {

    return (
        <div className="w-[400px]">
            <TikTokEmbed url={tiktokUrl} width="100%" />
        </div>
    )
}

export default TiktokCard
