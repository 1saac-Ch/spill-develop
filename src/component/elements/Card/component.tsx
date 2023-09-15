import React from 'react'
type CardProps = {
  imgUrl: string
  children: React.ReactNode
  imgHeight?: string
}

const Card = ({ imgUrl, children, imgHeight = 'h-[250px]' }: CardProps) => {
  const height = `h-[250px]`
  return (
    <div className="h-full cursor-pointer border-transparent border-2 hover:border-blue-50 rounded-xl">
      <div className="h-full bg-white overflow-hidden rounded-2xl shadow-[0px_4px_16px_rgba(77,77,77,0.12)]">
        <div className="flex flex-col h-full">
          <div>
            <img
              src={imgUrl}
              alt="Man looking at item at a store"
              className={`object-cover w-full ${imgHeight}`}
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Card
