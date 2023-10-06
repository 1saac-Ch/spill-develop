import BannerStyle from './banner.module.scss'
import { cn } from '@/utils/classname'

export default function Banner() {
  return (
    <div className="w-full min-h-[320px] rounded-lg lg:rounded-3xl xl:flex items-center overflow-hidden relative hidden">
      <div
        className={cn(
          BannerStyle.bannerImage,
          'w-[670px] h-full absolute z-[2]'
        )}
      />

      <div
        className={cn(
          BannerStyle.bannerContent,
          'p-10 h-full font-satoshi text-white space-y-4 z-[5] ml-[480px] bg-[#111827] relative'
        )}
      >
        <h1 className="text-display-sm font-[900] leading-[44px] tracking-[0.01px] max-w-[625px]">
          Welcome to{' '}
          <span className="bg-linear bg-clip-text text-transparent">Spill</span>{' '}
          - platform terbaik untuk berbagi review produk!
        </h1>

        <p className="text-title-lg font-satoshi tracking-[0.01px]">
          &quot;Temukan ribuan pengguna aktif di Spiill yang siap menerima
          informasi dan merekomendasikan produk brand Anda kepada teman dan
          keluarga mereka!&quot;
        </p>

        <button className="px-4 py-3 bg-blue-50 rounded-xl font-[700]">
          Hubungi Kami
        </button>
      </div>
    </div>
  )
}
