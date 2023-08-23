import React, { KeyboardEvent, useEffect, useState } from 'react'
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
import SearchRecomendationItem from '@/component/elements/SearchRecomendation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/component/ui/Dropdown'
import { Dialog, DialogContent } from '@/component/ui/Dialog'
import Image from 'next/image'
import DropDownNav from './DropDownNav'
import SearchMobile from './SearchMobile'
import { useMediaQuery } from '@mui/material'

type LayoutNavbarProps = {
  normal: boolean
}

const LayoutNavbar = ({ normal = false }: LayoutNavbarProps) => {
  const router = useRouter()
  const [isSticky, setIsSticky] = useState<Boolean>(false)
  const [isOpenRecommend, setIsOpenRecommend] = useState(false)
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false)
  const [isOpenSearch, setIsOpenSearch] = useState(false)

  const isMobile = useMediaQuery('(max-width: 768px)')
  const {
    onOpen: onOpenWriteReview,
    isOpen: isOpenWriteReview,
    setInOpenState,
  } = UseDisclosure()

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

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push('/catalogue-product')
    }
  }

  if (normal)
    return (
      <>
        <nav className="p-5 lg:px-[72px] flex items-center justify-between gap-[60px]">
          <NextLink href="/" passHref>
            <SpillLogo multiplySize={0.4} isDark={false} />
          </NextLink>
          <div className="hidden md:block relative flex-1">
            <Search
              placeholder="Find Your Product Here"
              position="right"
              onKeyPress={handleSearch}
              onBlur={() => setIsOpenRecommend(false)}
              onFocus={() => setIsOpenRecommend(true)}
            />
            {isOpenRecommend ? (
              <div className="w-full absolute  top-[64px] rounded-xl shadow-md bg-white overflow-hidden ">
                <h3 className="p-4 font-bold text-label-lg">
                  <span className="mr-2">🔥</span>Produk Paling Banyak Dicari:
                </h3>
                <SearchRecomendationItem />
                <SearchRecomendationItem />
              </div>
            ) : null}
          </div>

          <div className="hidden md:flex justify-center gap-[50px] items-center">
            {RightBeforeLoginNormal.map((item, index) => (
              <div key={index} className={styles.item}>
                {typeof item.title === 'function' ? item.title() : item.title}
              </div>
            ))}
          </div>

          <div className="flex md:hidden gap-[30px] items-center">
            <button>
              <Image
                width={22}
                height={22}
                alt="search"
                src="/icons/search.svg"
              />
            </button>
            <DropdownMenu
              open={isOpenMobileNav}
              onOpenChange={setIsOpenMobileNav}
            >
              <DropdownMenuTrigger>
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
              </DropdownMenuTrigger>
              <DropdownMenuContent className="md:hidden w-screen bg-white mt-6 rounded-none border-none shadow-lg space-y-8 pb-2">
                <DropdownMenuItem className="text-label-lg font-bold py-4 px-5 font-satoshi">
                  <Link className="w-full flex justify-center" href={'/login'}>
                    Log in
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-label-lg font-bold font-satoshi text-pink py-4 px-5">
                  <Link className="w-full flex justify-center" href={'/daftar'}>
                    Daftar
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button className={styles.review} onClick={onOpenWriteReview}>
                    Tulis Review
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
        {isOpenRecommend ? <Backdrop /> : null}
        <Dialog open={isOpenWriteReview} onOpenChange={setInOpenState}>
          <DialogContent>
            <div className="text-center w-[90vw] md:w-max border-2 boder-black bg-white p-7 rounded-[20px] font-satoshi space-y-6">
              <header className="space-y-2">
                <h2 className="text-title-lg md:text-headline-md font-bold">
                  Cari Produk Untuk Di Review
                </h2>
                <p className="mb-4 text-title-sm md:text-title-md font-satoshi">
                  Cari produk yang akan kamu review
                </p>
              </header>
              <Search placeholder="Cari produk apapun" />

              <p className="font-satoshi text-title-md">atau</p>

              <div className="relative">
                <section className="bg-[#E8FBF5] p-6 flex flex-col gap-5 rounded-[10px]">
                  <h2 className="text-title-md font-bold">
                    Produk yang kamu cari tidak ada di spill ?
                  </h2>
                  <p className="text-label-md md:text-title-md font-satoshi">
                    ayo bantu sarankan kami untuk <br className="md:hidden" />{' '}
                    menuliskan produk yang kamu cari
                  </p>
                  <button className="py-3 px-4 rounded-xl border border-[#1A1A1A] text-label-lg">
                    Sarankan Produk
                  </button>
                </section>

                <div className=" mt-5 shadow-md flex flex-col justify-start p-4 gap-4 absolute -top-5 bg-white w-full rounded-[10px]">
                  <h3 className="w-max font-semibold">
                    🔥 Produk Paling Banyak Dicari:
                  </h3>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <div>
                        <SearchIcon />
                      </div>
                      <h4>Item</h4>
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
                      <h4>Item</h4>
                    </div>
                    <Button variant="outline">Tulis Review</Button>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </>
    )

  return (
    <>
      <nav
        className={
          isSticky || isOpenMobileNav ? styles.navbarSticky : styles.navbar
        }
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center w-full justify-between gap-6">
            <div className="flex items-center gap-5 ">
              <NextLink href="/" passHref className="flex-none">
                <SpillLogo
                  multiplySize={0.4}
                  isDark={isSticky || isOpenMobileNav ? false : true}
                />
              </NextLink>
            </div>
            <div className="hidden md:block relative flex-1">
              {isSticky && (
                <Search
                  placeholder="Find Your Product Here"
                  position="right"
                  onKeyPress={handleSearch}
                  onBlur={() => setIsOpenRecommend(false)}
                  onFocus={() => setIsOpenRecommend(true)}
                />
              )}
              {isSticky && isOpenRecommend ? (
                <div className="w-full absolute  top-[64px] rounded-xl shadow-md bg-white overflow-hidden ">
                  <h3 className="p-4 font-bold text-label-lg">
                    <span className="mr-2">🔥</span>Produk Paling Banyak Dicari:
                  </h3>
                  <SearchRecomendationItem />
                  <SearchRecomendationItem />
                </div>
              ) : null}
            </div>
            <div className="hidden md:flex items-center gap-12">
              {RightBeforeLogin.map((item, index) => (
                <div key={index} className={styles.item}>
                  {typeof item.title === 'function' ? item.title() : item.title}
                </div>
              ))}
              <Dialog open={isOpenWriteReview} onOpenChange={setInOpenState}>
                <DialogContent>
                  <div className="text-center w-[90vw] md:w-max border-2 boder-black bg-white p-7 rounded-[20px] font-satoshi space-y-6">
                    <header className="space-y-2">
                      <h2 className="text-title-lg md:text-headline-md font-bold">
                        Cari Produk Untuk Di Review
                      </h2>
                      <p className="mb-4 text-title-sm md:text-title-md font-satoshi">
                        Cari produk yang akan kamu review
                      </p>
                    </header>
                    <Search placeholder="Cari produk apapun" />

                    <p className="font-satoshi text-title-md">atau</p>

                    <div className="relative">
                      <section className="bg-[#E8FBF5] p-6 flex flex-col gap-5 rounded-[10px]">
                        <h2 className="text-title-md font-bold">
                          Produk yang kamu cari tidak ada di spill ?
                        </h2>
                        <p className="text-label-md md:text-title-md font-satoshi">
                          ayo bantu sarankan kami untuk{' '}
                          <br className="md:hidden" /> menuliskan produk yang
                          kamu cari
                        </p>
                        <button className="py-3 px-4 rounded-xl border border-[#1A1A1A] text-label-lg">
                          Sarankan Produk
                        </button>
                      </section>

                      <div className=" mt-5 shadow-md flex flex-col justify-start p-4 gap-4 absolute -top-5 bg-white w-full rounded-[10px]">
                        <h3 className="w-max font-semibold">
                          🔥 Produk Paling Banyak Dicari:
                        </h3>
                        <div className="flex justify-between items-center">
                          <div className="flex gap-2">
                            <div>
                              <SearchIcon />
                            </div>
                            <h4>Item</h4>
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
                            <h4>Item</h4>
                          </div>
                          <Button variant="outline">Tulis Review</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="flex gap-6 md:hidden">
            {isSticky ? (
              <button onClick={() => setIsOpenSearch((prev) => !prev)}>
                <Image
                  width={22}
                  height={22}
                  src="/icons/search.svg"
                  alt="searchh"
                  className="w-8 h-8 cursor-pointer"
                />
              </button>
            ) : null}
            <DropDownNav
              trigger={
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
              }
              isOpen={isOpenMobileNav}
              setIsOpen={setIsOpenMobileNav}
            >
              <DropDownNav.Item className="text-label-lg font-bold py-4 px-5 font-satoshi">
                <Link className="w-full flex justify-center" href={'/login'}>
                  Log in
                </Link>
              </DropDownNav.Item>
              <DropDownNav.Item className="text-label-lg font-bold font-satoshi text-pink py-4 px-5">
                <Link className="w-full flex justify-center" href={'/daftar'}>
                  Daftar
                </Link>
              </DropDownNav.Item>
              <DropDownNav.Item>
                <Button className={styles.review} onClick={onOpenWriteReview}>
                  Tulis Review
                </Button>
              </DropDownNav.Item>
            </DropDownNav>
          </div>
        </div>
      </nav>

      {isOpenSearch && isMobile ? (
        <SearchMobile onClose={() => setIsOpenSearch(false)} />
      ) : null}
    </>
  )
}

export default LayoutNavbar
