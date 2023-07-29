import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LeftArrow from '@/assets/icons/LeftArrow.svg'
import RightArrow from '@/assets/icons/RightArrow.svg'
import { cn } from '@/utils/classname'

export default function Pagination({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'flex justify-center items-center gap-4 md:ml-auto mb-14',
        className
      )}
    >
      <Link href={'/'}>
        <Image
          src={LeftArrow}
          className="w-4 h-4 object-contain"
          alt="left-arrow"
        />
      </Link>

      {Array(5)
        .fill(0)
        .map((_, i) => (
          <Link
            key={i}
            href={'#'}
            className={`${
              i === 0
                ? 'bg-blue-50 text-white'
                : 'bg-transparent bg-white text-dark border border-abu'
            } w-11 h-11 flex items-center justify-center rounded-xl text-label-lg font-bold`}
          >
            {i + 1}
          </Link>
        ))}
      <Link href={'/'}>
        <Image
          src={RightArrow}
          className="w-4 h-4 object-contain"
          alt="right-arrow"
        />
      </Link>
    </div>
  )
}
