import {
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { signOut } from 'next-auth/react'

import Button from '@/component/elements/Button'
import SpillLogo from '@/component/elements/SpillLogo'
import Link from 'next/link'
import styles from './styles.module.scss'
import UseDisclosure from '@/component/elements/UseDisclosure'
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

import dynamic from 'next/dynamic'

import useClickOutside from '@/hooks/useClickOutside'
import { useDebounce } from '@/hooks/useDebounce'
import useFetcher from '@/hooks/useFetcher'

const SearchInput = dynamic(() => import('./SearchInput'), {
  ssr: false,
})

type LayoutNavbarProps = {
  normal: boolean
  selectionProduct: Product[]
}

function RecomendationItem({
  product,
  onClickReview,
}: {
  product: Product
  onClickReview: () => void
}) {
  return (
    <div className="flex justify-between items-center mb-1">
      <div className="flex items-center gap-2 py-4 font-satoshi">
        <img src="/icons/search.svg" alt="search" className="w-4 h-4 mr-2" />
        <h4 className="text-label-lg tracking-[0.01px]">
          {product.product_title}
        </h4>
      </div>
      <Button
        variant="outline"
        onClick={onClickReview}
        className=" hover:border py-[10px] px-4 h-min"
      >
        Tulis Review
      </Button>
    </div>
  )
}

const LayoutNavbar = ({
  normal = false,
  selectionProduct,
}: LayoutNavbarProps) => {
  const router = useRouter()
  const { openSearch, setOpenSearch } = useContext(searchContext)
  const [isSticky, setIsSticky] = useState<Boolean>(false)
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false)
  const [isOpenSearchNav, setIsOpenSearchNav] = useState(false)
  const searchContainerRef = useRef<HTMLDivElement>(null)

  const [searchInput, setSearchInput] = useState('')

  const [openDropDownRecomendation, setOpenDropDownRecomendation] =
    useState(false)

  useClickOutside(searchContainerRef, () => {
    setOpenDropDownRecomendation(false)
  })

  const isMobile = useMediaQuery('(max-width: 768px)')
  const { status, data: session } = useSession()

  const {
    onOpen: onOpenWriteReview,
    isOpen: isOpenWriteReview,
    setInOpenState,
  } = UseDisclosure()

  const onClickReview = useCallback((id: string) => {
    setInOpenState(false)
    router.push(`/review-product/${id}?fromHome=true`)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (openSearch) {
      setOpenSearch?.(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query])

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
        <a
          href="https://link.spiil.com"
          target="_blank"
          className={cn(
            isSticky ? styles.review : styles.reviewSticky,
            'h-auto py-3 px-4 flex justify-center items-center gap-2 rounded-xl relative hover:bg-transparent hover:text-inherit hover:border-current',
            styles.newContent
          )}
        >
          #Link Spiill
        </a>
      ),
    },
    {
      title: () => (
        <Button
          className={cn(
            isSticky ? styles.review : styles.reviewSticky,
            isSticky ? 'text-dark' : 'text-white',
            'h-auto py-3 px-4 flex justify-center items-center gap-2 rounded-xl bg-transparent hover:bg-pink hover:text-white'
          )}
          onClick={onOpenWriteReview}
        >
          Tulis Review
        </Button>
      ),
    },
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
  ]

  const RightAfterLogin = [
    {
      title: () => (
        <a
          href="https://link.spiil.com"
          target="_blank"
          className={cn(
            isSticky ? styles.review : styles.reviewSticky,
            'h-auto py-3 px-4 flex justify-center items-center gap-2 rounded-xl relative hover:bg-transparent hover:text-inherit hover:border-current',
            styles.newContent
          )}
        >
          #Link Spiill
        </a>
      ),
    },
    {
      title: () => (
        <button
          onClick={onOpenWriteReview}
          className={cn(
            isSticky ? styles.review : styles.reviewSticky,
            isSticky ? 'text-dark' : 'text-white',
            'h-auto py-3 px-4 flex justify-center items-center gap-2 rounded-xl bg-transparent hover:bg-pink hover:text-white'
          )}
        >
          Tulis Review
        </button>
      ),
      link: '/login',
    },

    {
      title: () => (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex cursor-pointer h-11 gap-2 justify-center items-center bg-transparent">
              <Image
                src={'/profile.jpeg'}
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
                {session?.user.username}
              </p>

              <Image
                src={isSticky || normal ? '/icons/v-black.svg' : '/icons/v.svg'}
                alt="bottom-arrow"
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
              />
            </div>
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
        <a
          href="https://link.spiil.com"
          target="_blank"
          className={cn(
            styles.review,
            'h-auto py-3 px-4 flex justify-center items-center gap-2 rounded-xl relative hover:bg-transparent hover:text-inherit hover:border-current',
            styles.newContent
          )}
        >
          #Link Spiill
        </a>
      ),
    },
    {
      title: () => (
        <Button
          className={cn(
            styles.review,
            'h-auto py-3 px-4 flex justify-center items-center gap-2 rounded-xl text-black bg-transparent hover:bg-pink hover:text-white'
          )}
          onClick={onOpenWriteReview}
        >
          Tulis Review
        </Button>
      ),
    },

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
  ]

  const RightAfterLoginNormal = [
    {
      title: () => (
        <a
          href="https://link.spiil.com"
          target="_blank"
          className={cn(
            styles.review,
            'h-auto py-3 px-4 flex justify-center items-center gap-2 rounded-xl relative hover:bg-transparent hover:text-inherit hover:border-current',
            styles.newContent
          )}
        >
          #Link Spiill
        </a>
      ),
    },
    {
      title: () => (
        <button
          onClick={onOpenWriteReview}
          className={cn(
            styles.review,
            'h-auto py-3 px-4 flex justify-center items-center gap-2 rounded-xl bg-transparent hover:bg-pink hover:text-white'
          )}
        >
          Tulis Review
        </button>
      ),
      link: '/login',
    },

    {
      title: () => (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex cursor-pointer h-11 gap-2 justify-center items-center bg-transparent">
              <Image
                src={'/profile.jpeg'}
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
                {session?.user.username}
              </p>

              <Image
                src={isSticky || normal ? '/icons/v-black.svg' : '/icons/v.svg'}
                alt="bottom-arrow"
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
              />
            </div>
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

  const isReady = status !== 'loading'
  const isAuthenticated = status === 'authenticated'

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault()
    const element = e.currentTarget.querySelector('#search') as HTMLInputElement
    const searchParam = new URLSearchParams({
      product: element.value,
    })

    router.push(`/catalogue-product?${searchParam.toString()}`)
  }

  if (normal) {
    const NavContent =
      status === 'authenticated'
        ? RightAfterLoginNormal
        : RightBeforeLoginNormal

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
              <DropdownMenuContent className="md:hidden w-screen bg-white mt-6 rounded-none border-none shadow-lg space-y-8 pb-2">
                <DropdownMenuItem className="text-label-lg font-bold font-satoshi p-0 hover:bg-white">
                  {isAuthenticated ? (
                    <div className="w-full flex items-center justify-center gap-2 hover:bg-white h-full py-4">
                      <Image
                        src="/profile.jpeg"
                        alt="profile"
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full object-cover"
                      />

                      <p className="text-label-lg font-bold">
                        {session?.user.username}
                      </p>
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

                <DropdownMenuItem className="">
                  <Button
                    className={cn(
                      styles.review,
                      'bg-transparent text-inherit hover:bg-pink hover:text-white py-3 rounded-xl'
                    )}
                    onClick={onOpenWriteReview}
                  >
                    Tulis Review
                  </Button>
                </DropdownMenuItem>

                <DropDownNav.Item>
                  <a
                    href="https://link.spiil.com"
                    target="_blank"
                    className={cn(
                      styles.review,
                      'w-full flex items-center justify-center font-satoshi relative',
                      styles.newContent
                    )}
                  >
                    #Link Spiill
                  </a>
                </DropDownNav.Item>

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
        <Dialog open={isOpenWriteReview} onOpenChange={setInOpenState}>
          <DialogContent onOpenAutoFocus={(e) => e.preventDefault()}>
            <div className="text-center w-[90vw] md:w-max border-2 boder-black bg-white p-7 rounded-[20px] font-satoshi space-y-6 relative">
              <header className="space-y-2">
                <h2 className="text-title-lg md:text-headline-md font-bold">
                  Cari Produk Untuk Di Review
                </h2>
                <p className="mb-4 text-title-sm md:text-title-md font-satoshi">
                  Cari produk yang akan kamu review
                </p>
              </header>
              <div ref={searchContainerRef}>
                <form
                  onSubmit={handleSearchSubmit}
                  className="flex items-center justify-between py-[18px] px-[16px] bg-[#E8FBF5] w-full rounded-[12px]"
                >
                  <input
                    placeholder="Cari produk apapun"
                    id="search"
                    value={searchInput}
                    autoFocus={false}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="w-full border-none  outline-none bg-[#E8FBF5] text-[14px] leading-low"
                    onFocus={() => setOpenDropDownRecomendation(true)}
                  />
                  <button type="submit">
                    <img
                      src="/icons/search.svg"
                      alt="search"
                      className="text-abu2 w-[18px] h-[18px]"
                    />
                  </button>
                </form>
                {openDropDownRecomendation ? (
                  <div className="absolute left-0 right-0 z-[5] bg-white mx-7 min-h-[160px] shadow-md rounded-[12px] p-4">
                    <h3 className="w-max font-semibold text-title-sm mb-4">
                      🔥 Produk Paling Banyak Dicariiii:
                    </h3>
                    {selectionProduct.map((item) => (
                      <RecomendationItem
                        onClickReview={() => onClickReview(item.product_id)}
                        key={item.id}
                        product={item}
                      />
                    ))}
                  </div>
                ) : null}
              </div>

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
                <DialogContent onOpenAutoFocus={(e) => e.preventDefault()}>
                  <div className="text-center w-[90vw] md:w-max border-2 boder-black bg-white p-7 rounded-[20px] font-satoshi space-y-6 relative">
                    <header className="space-y-2">
                      <h2 className="text-title-lg md:text-headline-md font-bold">
                        Cari Produk Untuk Di Review
                      </h2>
                      <p className="mb-4 text-title-sm md:text-title-md font-satoshi">
                        Cari produk yang akan kamu review
                      </p>
                    </header>
                    <div ref={searchContainerRef}>
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
                        />
                        <button type="submit">
                          <img
                            src="/icons/search.svg"
                            alt="search"
                            className="text-abu2 w-[18px] h-[18px]"
                          />
                        </button>
                      </form>
                      {openDropDownRecomendation ? (
                        <div className="absolute translate-y-1 left-0 right-0 z-[5] bg-white mx-7 shadow-md rounded-[12px] p-4">
                          <ReviewRecomendation
                            searchInput={searchInput}
                            selectionProduct={selectionProduct}
                            onClickReview={onClickReview}
                          />
                        </div>
                      ) : null}
                    </div>

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
                        <Link
                          target="_blank"
                          href="https://forms.gle/ZTrPGMwSpAZtrE9V6"
                          className="py-3 px-4 rounded-xl border border-[#1A1A1A] text-label-lg"
                        >
                          Sarankan Produk
                        </Link>
                      </section>
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
                  width={32}
                  height={32}
                  src="/icons/search.svg"
                  alt="searchh"
                  className="w-10 h-8 cursor-pointer"
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
                      src="/profile.jpeg"
                      alt="profile"
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full object-cover"
                    />

                    <p className="text-label-lg font-bold">
                      {session?.user.username}
                    </p>
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
                <Button
                  className={
                    (styles.review,
                    'bg-transparent text-inherit hover:bg-pink hover:text-white py-3 rounded-xl border border-black hover:border-pink')
                  }
                  onClick={onOpenWriteReview}
                >
                  Tulis Review
                </Button>
              </DropDownNav.Item>

              <DropDownNav.Item>
                <a
                  href="https://link.spiil.com"
                  target="_blank"
                  className={cn(
                    styles.review,
                    'w-full flex items-center justify-center relative font-satoshi',
                    styles.newContent
                  )}
                >
                  #Link Spiill
                </a>
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

      {isOpenSearch && isMobile ? (
        <SearchMobile onClose={() => setIsOpenSearch(false)} />
      ) : null}
    </>
  )
}

function ReviewRecomendation({
  searchInput,
  selectionProduct,
  onClickReview,
}: {
  searchInput: string
  selectionProduct: Product[]
  onClickReview: (id: string) => void
}) {
  const debouncedKeyword = useDebounce(searchInput, 800)

  const { data, isLoading } = useFetcher<{
    messag: string
    data: Product[]
  }>(`/home/user/search?product=${debouncedKeyword}`, false, {
    enabled: !!debouncedKeyword,
  })

  let isEmpty = !data?.data.length

  let content

  if (!searchInput.length) {
    content = (
      <>
        <h3 className="w-max font-semibold text-title-sm mb-4">
          🔥 Produk Paling Banyak Dicari:
        </h3>
        {selectionProduct.map((item) => (
          <RecomendationItem
            onClickReview={() => onClickReview(item.product_id)}
            key={item.id}
            product={item}
          />
        ))}
      </>
    )
  } else if (isLoading) {
    content = (
      <div className="font-satoshi text-label-lg flex items-center justify-center">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-spin"
        >
          <path
            d="M1.90321 7.29677C1.90321 10.341 4.11041 12.4147 6.58893 12.8439C6.87255 12.893 7.06266 13.1627 7.01355 13.4464C6.96444 13.73 6.69471 13.9201 6.41109 13.871C3.49942 13.3668 0.86084 10.9127 0.86084 7.29677C0.860839 5.76009 1.55996 4.55245 2.37639 3.63377C2.96124 2.97568 3.63034 2.44135 4.16846 2.03202L2.53205 2.03202C2.25591 2.03202 2.03205 1.80816 2.03205 1.53202C2.03205 1.25588 2.25591 1.03202 2.53205 1.03202L5.53205 1.03202C5.80819 1.03202 6.03205 1.25588 6.03205 1.53202L6.03205 4.53202C6.03205 4.80816 5.80819 5.03202 5.53205 5.03202C5.25591 5.03202 5.03205 4.80816 5.03205 4.53202L5.03205 2.68645L5.03054 2.68759L5.03045 2.68766L5.03044 2.68767L5.03043 2.68767C4.45896 3.11868 3.76059 3.64538 3.15554 4.3262C2.44102 5.13021 1.90321 6.10154 1.90321 7.29677ZM13.0109 7.70321C13.0109 4.69115 10.8505 2.6296 8.40384 2.17029C8.12093 2.11718 7.93465 1.84479 7.98776 1.56188C8.04087 1.27898 8.31326 1.0927 8.59616 1.14581C11.4704 1.68541 14.0532 4.12605 14.0532 7.70321C14.0532 9.23988 13.3541 10.4475 12.5377 11.3662C11.9528 12.0243 11.2837 12.5586 10.7456 12.968L12.3821 12.968C12.6582 12.968 12.8821 13.1918 12.8821 13.468C12.8821 13.7441 12.6582 13.968 12.3821 13.968L9.38205 13.968C9.10591 13.968 8.88205 13.7441 8.88205 13.468L8.88205 10.468C8.88205 10.1918 9.10591 9.96796 9.38205 9.96796C9.65819 9.96796 9.88205 10.1918 9.88205 10.468L9.88205 12.3135L9.88362 12.3123C10.4551 11.8813 11.1535 11.3546 11.7585 10.6738C12.4731 9.86976 13.0109 8.89844 13.0109 7.70321Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    )
  } else if (isEmpty) {
    content = (
      <div className="font-satoshi flex items-center justify-center">
        <p className="text-black text-body-md">Search not found</p>
      </div>
    )
  } else {
    content = (
      <>
        {data?.data.slice(0, 5).map((searchItem) => (
          <RecomendationItem
            key={searchItem.id}
            onClickReview={() => onClickReview(searchItem.product_id)}
            product={searchItem}
          />
        ))}
      </>
    )
  }

  return content
}

export default LayoutNavbar
