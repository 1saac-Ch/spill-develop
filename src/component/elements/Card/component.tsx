import React from 'react'
import NextImage from '../NextImage'
import product from '@/assets/images/product.png'
type CardProps = {
  imgUrl: string
  children: React.ReactNode
}

const Card = (props: CardProps) => {
  return (
    <div className="h-full cursor-pointer border-2 hover:border-blue-50 rounded-xl">
      <div className="h-full bg-white overflow-hidden rounded-2xl shadow-[0px_4px_16px_rgba(77,77,77,0.12)]">
        <div className="flex flex-col h-full">
          <div>
            {/* eslint-disable @next/next/no-img-element */}
            <img
              src={props.imgUrl}
              alt="Man looking at item at a store"
              width={400}
              height={400}
              // layout="responsive"
              className="object-cover w-full h-[400px]"
            />
          </div>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Card
