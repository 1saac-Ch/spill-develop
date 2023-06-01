import React from 'react'
import Button from '@/component/elements/Button'
import SpillLogo from '@/component/elements/SpillLogo'
import SearchIcon from '@mui/icons-material/Search'
import Link from 'next/link'
import styles from './styles.module.scss'
import { SearchInput } from './SearchInput'
import Backdrop from './Backdrop'

const SearchRecomendationItem = () => {
  return (
    <p className="p-4 font-satoshi cursor-pointer hover:bg-accent text-label-lg">
      <SearchIcon className="w-4 h-4 mr-2" />
      Scarlet beauty pelembab
    </p>
  )
}

const LayoutNavbar = () => {
  const [isOpenRecommend, setIsOpenRecommend] = React.useState(false)
  const RightBeforeLoginNormal = [
    {
      title: () => (
        <Link href="/login" className={styles.login}>
          Log in
        </Link>
      ),
      link: '/login',
    },
    {
      title: () => (
        <Link href="/daftar" className={styles.register}>
          Daftar
        </Link>
      ),
      link: '/daftar',
    },
    {
      title: () => <Button className={styles.review}>Tulis Review</Button>,
      link: '/',
    },
  ]

  return (
    <>
      <div className={styles.navbarNormal}>
        <div className={styles.maxContainer}>
          <div className={styles.left}>
            <SpillLogo multiplySize={0.4} isDark={false} />

            <div className="flex flex-col relative font-satoshi">
              <SearchInput
                onBlur={() => setIsOpenRecommend(false)}
                onFocus={() => setIsOpenRecommend(true)}
                placeholder="Find Your Product Here"
              />
              {isOpenRecommend ? (
                <div className="w-full absolute top-[64px] rounded-xl shadow-md bg-white overflow-hidden ">
                  <h3 className="p-4 font-bold text-label-lg">
                    <span className="mr-2">🔥</span>Produk Paling Banyak Dicari:
                  </h3>
                  <SearchRecomendationItem />
                  <SearchRecomendationItem />
                </div>
              ) : null}
            </div>
          </div>
          <div className={styles.right}>
            {RightBeforeLoginNormal.map((item, index) => (
              <div key={index}>
                {typeof item.title === 'function' ? item.title() : item.title}
              </div>
            ))}
          </div>
        </div>
      </div>

      {isOpenRecommend ? <Backdrop /> : null}
    </>
  )
}

export default LayoutNavbar
