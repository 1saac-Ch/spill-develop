import React from 'react'
import NextImage from '../NextImage';
import product from "@/assets/images/product.png"
type CardProps = {
  children: React.ReactNode
}

const Card = (props: CardProps) => {
  return (
    <div className="w-[405px] h-[530px] rounded-[20px] shadow-[0px_4px_16px_rgba(77,77,77,0.12)]">
      <NextImage src={product} width={405} height={405} alt="image" className="rounded-t-[20px]"/>
      {props.children}
    </div>
  )

}

export default Card