import React from 'react'
import SendIcon from '../elements/SendIcon'
import ReviewCard from './ReviewCard'

const WriteDiscussion = () => {
  return (
    <div className="w-full flex flex-col gap-10 md:gap-3">
      <form className="space-y-3">
        <label
          htmlFor="new-review"
          className="text-label-lg font-bold font-satoshi"
        >
          Apa yang menjadi keresahanmu dalam memilih produk?
        </label>
        <div className="relative rounded-xl h-[104px] border md:px-4 md:py-3">
          <textarea
            id="new-review"
            className="w-full p-4 md:p-0 resize-none h-full placeholder:text-abu text-label-lg placeholder:text-label-lg font-satoshi placeholder:font-satoshi"
            placeholder="Review kamu disini"
          />
          <button disabled className="absolute bottom-3 right-3" type="submit">
            <span>
              <SendIcon color="#1598CC" size={20} />
            </span>
          </button>
        </div>
      </form>

      <ReviewCard />
      <ReviewCard isReply={true} />
    </div>
  )
}

export default WriteDiscussion
