import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import Backdrop from '@/component/layouts/LayoutCatalogue/Backdrop'

import Button from '@/component/elements/Button'
import SpillLogo from '@/component/elements/SpillLogo'
import Search from '@/component/elements/Search'
import Link from 'next/link'
import styles from './styles.module.scss'
import SearchIcon from '@mui/icons-material/Search'
import UseDisclosure from '@/component/elements/UseDisclosure'
import Modal from '@/component/elements/Modal'
import SearchRecomendationItem from '@/component/elements/SearchRecomendation'

type LayoutNavbarProps = {
  normal: boolean
}

const LayoutNavbar = ({ normal = false }: LayoutNavbarProps) => {
  const router = useRouter()
  const [isSticky, setIsSticky] = useState<Boolean>(false)
  const [isOpenRecommend, setIsOpenRecommend] = useState(false)

  const {
    onOpen: onOpenWriteReview,
    onClose: onCloseWriteReview,
    isOpen: isOpenWriteReview,
  } = UseDisclosure()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (window.pageYOffset > 10) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }

  const RightBeforeLogin = [
    {
      title: () => (
        <Link
          href="/login"
          className={isSticky ? styles.login : styles.loginSticky}
        >
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
      title: () => (
        <Button
          className={isSticky ? styles.review : styles.reviewSticky}
          onClick={onOpenWriteReview}
        >
          Tulis Review
        </Button>
      ),
      link: '/',
    },
  ]

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
      title: () => (
        <Button className={styles.review} onClick={onOpenWriteReview}>
          Tulis Review
        </Button>
      ),
      link: '/',
    },
  ]

  if (normal)
    return (
      <>
        <div className={styles.navbarNormal}>
          <div className={styles.maxContainer}>
            <div className={styles.left}>
              <NextLink href="/" passHref>
                <SpillLogo multiplySize={0.4} isDark={false} />
              </NextLink>
              <div className="flex flex-col relative font-satoshi">
                <Search
                  placeholder="Find Your Product Hereeeeeeeee"
                  position="right"
                  onBlur={() => setIsOpenRecommend(false)}
                  onFocus={() => setIsOpenRecommend(true)}
                />
                {isOpenRecommend ? (
                  <div className="w-full absolute  top-[64px] rounded-xl shadow-md bg-white overflow-hidden ">
                    <h3 className="p-4 font-bold text-label-lg">
                      <span className="mr-2">🔥</span>Produk Paling Banyak
                      Dicari:
                    </h3>
                    <SearchRecomendationItem />
                    <SearchRecomendationItem />
                  </div>
                ) : null}
              </div>
            </div>

            <div className={styles.right}>
              {RightBeforeLoginNormal.map((item, index) => (
                <div key={index} className={styles.item}>
                  {typeof item.title === 'function' ? item.title() : item.title}
                </div>
              ))}
            </div>
          </div>

          <Modal isOpen={isOpenWriteReview} onClose={onCloseWriteReview}>
            <div className="text-center w-max border-2 boder-black bg-white p-7 rounded-xl">
              <h2 className="md:text-2xl font-bold">
                Cari Produk Untuk Di Review
              </h2>
              <p className="mb-4">Cari produk yang akan kamu review</p>
              <Search placeholder="Cari produk apapun" />
              <div className=" mt-5 shadow-md flex flex-col justify-start p-4 gap-4">
                <h3 className="w-max font-semibold">
                  🔥 Produk Paling Banyak Dicari:
                </h3>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <div>
                      <SearchIcon />
                    </div>
                    <h4>headphone Steelseries Mxasa</h4>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => router.push('/review-product')}
                  >
                    Tulis Review
                  </Button>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <div>
                      <SearchIcon />
                    </div>
                    <h4>headphone Steelseries Mxasa</h4>
                  </div>
                  <Button variant="outline">Tulis Review</Button>
                </div>
              </div>
            </div>
          </Modal>
        </div>
        {isOpenRecommend ? <Backdrop /> : null}
      </>
    )
  return (
    <nav className={isSticky ? styles.navbarSticky : styles.navbar}>
      <div className="container mx-auto px-5 py-2">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center w-full justify-between ">
            <div className="flex items-center gap-5 ">
              <NextLink href="/" passHref>
                <SpillLogo
                  multiplySize={0.4}
                  isDark={isSticky ? false : true}
                />
              </NextLink>
              <div className="hidden md:block">
                {isSticky && (
                  <Search
                    placeholder="Find Your Product Here"
                    position="right"
                  />
                )}
              </div>
            </div>
            <div className="hidden md:flex items-center gap-12">
              {RightBeforeLogin.map((item, index) => (
                <div key={index} className={styles.item}>
                  {typeof item.title === 'function' ? item.title() : item.title}
                </div>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpenWriteReview} onClose={onCloseWriteReview}>
        <div className="text-center w-max border-2 boder-black bg-white p-7 rounded-xl">
          <h2 className="md:text-2xl font-bold">Cari Produk Untuk Di Review</h2>
          <p className="mb-4">Cari produk yang akan kamu review</p>
          <Search placeholder="Cari produk apapun" />
          <div className=" mt-5 shadow-md flex flex-col justify-start p-4 gap-4">
            <h3 className="w-max font-semibold">
              🔥 Produk Paling Banyak Dicari:
            </h3>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <div>
                  <SearchIcon />
                </div>
                <h4>headphone Steelseries Mxasa</h4>
              </div>
              <Button
                variant="outline"
                onClick={() => router.push('/review-product')}
              >
                Tulis Review
              </Button>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <div>
                  <SearchIcon />
                </div>
                <h4>headphone Steelseries Mxasa</h4>
              </div>
              <Button variant="outline">Tulis Review</Button>
            </div>
          </div>
        </div>
      </Modal>
      {isMenuOpen && (
        <div className="md:hidden border-2 border-white px-5 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-black block">
              Home
            </a>
            <a href="#" className="text-black block">
              Home
            </a>
            <a href="#" className="text-black block">
              Home
            </a>
            <a href="#" className="text-black block">
              Home
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default LayoutNavbar
