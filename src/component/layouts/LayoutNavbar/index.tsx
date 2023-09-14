import { FormEvent, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import Backdrop from '@/component/layouts/LayoutCatalogue/Backdrop'
import { signOut } from 'next-auth/react'

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
import { useSession } from 'next-auth/react'
import { cn } from '@/utils/classname'
import { searchContext } from '../LayoutCatalogue'
import SearchInput from './SearchInput'

type LayoutNavbarProps = {
  normal: boolean
}

function RecomendationItem({ id = 1 }) {
  const router = useRouter()
  return (
    <div className="flex justify-between items-center mb-1">
      <div className="flex items-center gap-2 py-4 font-satoshi cursor-pointer">
        <SearchIcon className="w-4 h-4 mr-2" />
        <h4 className="text-label-lg tracking-[0.01px]">Item</h4>
      </div>
      <Button
        variant="outline"
        onClick={() => router.push(`/review-product/${id}`)}
        className="hover:border"
      >
        Tulis Review
      </Button>
    </div>
  )
}

const LayoutNavbar = ({ normal = false }: LayoutNavbarProps) => {
  const router = useRouter()
  const { openSearch, setOpenSearch } = useContext(searchContext)
  const [isSticky, setIsSticky] = useState<Boolean>(false)
  const [isOpenRecommend, setIsOpenRecommend] = useState(false)
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false)
  const [isOpenSearchNav, setIsOpenSearchNav] = useState(false)
  const [search, setSearch] = useState('')

  const [searchInput, setSearchInput] = useState('')

  const [openDropDownRecomendation, setOpenDropDownRecomendation] =
    useState(false)

  const isMobile = useMediaQuery('(max-width: 768px)')
  const { status } = useSession()

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

  const isOpenSearch =
    typeof openSearch === 'boolean' ? openSearch : isOpenSearchNav

  const setIsOpenSearch =
    typeof setOpenSearch === 'function' ? setOpenSearch : setIsOpenSearchNav

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

  const RightAfterLogin = [
    {
      title: () => (
        <button
          onClick={onOpenWriteReview}
          className={
            isSticky || normal
              ? cn(styles.login, 'border border-black py-3 px-4 rounded-xl')
              : cn(
                  styles.loginSticky,
                  'border border-white py-3 px-4 rounded-xl'
                )
          }
        >
          Write a review
        </button>
      ),
      link: '/login',
    },

    {
      title: () => (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="flex h-11 gap-2 justify-center items-center bg-transparent">
              <Image
                src={'/profile.jpg'}
                alt="avatar"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover"
              />

              <p
                className={`text-label-lg ${
                  isSticky || normal ? 'text-black' : ''
                } font-bold`}
              >
                User
              </p>

              <Image
                src={isSticky || normal ? '/icons/v-black.svg' : '/icons/v.svg'}
                alt="bottom-arrow"
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="hidden w-[140px] p-4 md:flex justify-center items-center bg-white hover:bg-gray-200 transition-none relative z-[99999]">
            <button
              onClick={() => signOut()}
              className="text-label-lg text-pink font-satoshi"
            >
              Logout
            </button>
          </DropdownMenuContent>
        </DropdownMenu>
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

  const handleSearch = () => {
    if (search) {
      router.push(`/catalogue-product?q=${search}`)
    }
  }

  const isReady = status !== 'loading'
  const isAuthenticated = status === 'authenticated'

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault()
    const element = e.currentTarget.querySelector('#search') as HTMLInputElement
    const searchParam = new URLSearchParams({
      q: element.value,
    })

    router.push(`/catalogue-product?${searchParam.toString()}`)
  }

  if (normal) {
    const NavContent =
      status === 'authenticated' ? RightAfterLogin : RightBeforeLoginNormal

    return (
      <>
        <nav className="p-5 bg-white relative z-50 lg:px-[72px] flex items-center justify-between gap-[60px]">
          <NextLink href="/" passHref>
            <SpillLogo multiplySize={0.4} isDark={false} />
          </NextLink>

          <SearchInput />

          <div className="hidden md:flex justify-center gap-[50px] items-center">
            {isReady &&
              NavContent.map((item, index) => (
                <div key={index} className={styles.item}>
                  {typeof item.title === 'function' ? item.title() : item.title}
                </div>
              ))}
          </div>

          <div className="flex md:hidden gap-[30px] items-center">
            <button onClick={() => setIsOpenSearch(true)}>
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
              <DropdownMenuContent className="md:hidden w-screen bg-blue-200 mt-6 rounded-none border-none shadow-lg space-y-8 pb-2">
                <DropdownMenuItem className="text-label-lg font-bold font-satoshi p-0 hover:bg-white">
                  {isAuthenticated ? (
                    <div className="w-full flex items-center justify-center gap-2 hover:bg-white h-full py-4">
                      <Image
                        src="/profile.jpg"
                        alt="profile"
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover"
                      />

                      <p className="text-label-lg font-bold">User</p>
                    </div>
                  ) : (
                    <Link
                      className="w-full flex justify-center py-4"
                      href={'/login'}
                    >
                      Log in
                    </Link>
                  )}
                </DropdownMenuItem>

                <DropdownMenuItem className="hover:bg-white">
                  <Button className={styles.review} onClick={onOpenWriteReview}>
                    Tulis Review
                  </Button>
                </DropdownMenuItem>

                <DropdownMenuItem className="text-label-lg font-bold font-satoshi text-pink ">
                  {isAuthenticated ? (
                    <button onClick={() => signOut()} className="mx-auto py-4">
                      Logout
                    </button>
                  ) : (
                    <Link
                      className="w-full py-4 hover:bg-gray-200 flex justify-center"
                      href={'/daftar'}
                    >
                      Daftar
                    </Link>
                  )}
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
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center justify-between py-[18px] px-[16px] bg-[#E8FBF5] w-full rounded-[12px]"
              >
                <input
                  placeholder="Cari produk apapun"
                  id="search"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="w-full border-none  outline-none bg-[#E8FBF5] text-[14px] leading-low"
                  onFocus={() => setOpenDropDownRecomendation(true)}
                  onBlur={() => setOpenDropDownRecomendation(false)}
                />
                <button type="submit">
                  <SearchIcon className="text-abu2 w-[18px] h-[18px]" />
                </button>
              </form>

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
                  <Link
                    href="/suggest"
                    className="py-3 px-4 rounded-xl border border-[#1A1A1A] text-label-lg"
                  >
                    Sarankan Produk
                  </Link>
                </section>

                {openDropDownRecomendation && !!searchInput ? (
                  <div className="absolute top-0 bg-white w-full min-h-[160px]">
                    <h3 className="w-max font-semibold text-title-sm">
                      🔥 Produk Paling Banyak Dicari:
                    </h3>

                    <RecomendationItem />
                    <RecomendationItem />
                  </div>
                ) : null}
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {isOpenSearch && isMobile ? (
          <SearchMobile onClose={() => setIsOpenSearch(false)} />
        ) : null}
      </>
    )
  }

  const NavContent =
    status === 'authenticated' ? RightAfterLogin : RightBeforeLogin

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
            {isSticky ? <SearchInput /> : null}
            <div className="hidden md:flex items-center gap-12">
              {isReady &&
                NavContent.map((item, index) => (
                  <div key={index} className={styles.item}>
                    {typeof item.title === 'function'
                      ? item.title()
                      : item.title}
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
                    <form
                      onSubmit={handleSearchSubmit}
                      className="flex items-center justify-between py-[18px] px-[16px] bg-[#E8FBF5] w-full rounded-[12px]"
                    >
                      <input
                        placeholder="Cari produk apapun"
                        id="search"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        className="w-full border-none  outline-none bg-[#E8FBF5] text-[14px] leading-low"
                        onFocus={() => setOpenDropDownRecomendation(true)}
                        onBlur={() => setOpenDropDownRecomendation(false)}
                      />
                      <button type="submit">
                        <SearchIcon className="text-abu2 w-[18px] h-[18px]" />
                      </button>
                    </form>

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

                      {openDropDownRecomendation && !!searchInput ? (
                        <div className="absolute top-0 bg-white w-full min-h-[160px]">
                          <h3 className="w-max font-semibold text-title-sm">
                            🔥 Produk Paling Banyak Dicari:
                          </h3>

                          <RecomendationItem />
                          <RecomendationItem />
                        </div>
                      ) : null}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="flex gap-6 md:hidden">
            {isSticky ? (
              <button onClick={() => setIsOpenSearch(true)}>
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
              <DropDownNav.Item className="text-label-lg font-bold font-satoshi p-0 hover:bg-white">
                {isAuthenticated ? (
                  <div className="w-full flex items-center justify-center gap-2 hover:bg-white h-full py-4">
                    <Image
                      src="/profile.jpg"
                      alt="profile"
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full object-cover"
                    />

                    <p className="text-label-lg font-bold">User</p>
                  </div>
                ) : (
                  <Link
                    className="w-full flex justify-center py-4"
                    href={'/login'}
                  >
                    Log in
                  </Link>
                )}
              </DropDownNav.Item>

              <DropDownNav.Item>
                <Button className={styles.review} onClick={onOpenWriteReview}>
                  Tulis Review
                </Button>
              </DropDownNav.Item>

              <DropDownNav.Item className="text-label-lg font-bold font-satoshi text-pink ">
                {isAuthenticated ? (
                  <button onClick={() => signOut()} className="mx-auto py-4">
                    Logout
                  </button>
                ) : (
                  <Link
                    className="w-full py-4 hover:bg-gray-200 flex justify-center"
                    href={'/daftar'}
                  >
                    Daftar
                  </Link>
                )}
              </DropDownNav.Item>
            </DropDownNav>
          </div>
        </div>
      </nav>

      {isOpenRecommend ? <Backdrop /> : null}

      {isOpenSearch && isMobile ? (
        <SearchMobile onClose={() => setIsOpenSearch(false)} />
      ) : null}
    </>
  )
}

export default LayoutNavbar
