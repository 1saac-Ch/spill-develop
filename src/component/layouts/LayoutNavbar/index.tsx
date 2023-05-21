import React, { useEffect, useState } from 'react'
import Button from '@/component/elements/Button';
import SpillLogo from '@/component/elements/SpillLogo';
import Search from '@/component/elements/Search';
import Link from 'next/link';
import styles from "./styles.module.scss";

type LayoutNavbarProps = {
    normal: boolean;
}

const LayoutNavbar = ({ normal = false }: LayoutNavbarProps) => {
    const [isSticky, setIsSticky] = useState<Boolean>(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 10) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };


    const RightBeforeLogin = [
        {
            title: () => <Link href="/login" className={isSticky ? styles.login : styles.loginSticky}>Log in</Link>,
            link: '/login',
        },
        {
            title: () => <Link href="/daftar" className={styles.register}>Daftar</Link>,
            link: '/daftar',
        },
        {
            title: () => <Button className={isSticky ? styles.review : styles.reviewSticky}>Tulis Review</Button>,
            link: '/',
        }
    ]

    const RightBeforeLoginNormal = [
        {
            title: () => <Link href="/login" className={styles.login}>Log in</Link>,
            link: '/login',
        },
        {
            title: () => <Link href="/daftar" className={styles.register}>Daftar</Link>,
            link: '/daftar',
        },
        {
            title: () => <Button className={styles.review}>Tulis Review</Button>,
            link: '/',
        }
    ]

    if (normal)
        return (
            <div className={styles.navbarNormal}>
                <div className={styles.maxContainer}>
                    <div className={styles.left}>
                        <SpillLogo multiplySize={0.4} isDark={false} />
                        <Search placeholder="Find Your Product Here" position="right" />

                    </div>
                    <div className={styles.right}>
                        {RightBeforeLoginNormal.map((item, index) => (
                            <div key={index} className={styles.item}>
                                {typeof item.title === 'function' ? item.title() : item.title}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    return (
        <nav className={isSticky ? styles.navbarSticky : styles.navbar}>
            <div className="container mx-auto px-5 py-2">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center w-full justify-between ">
                        <div className="flex items-center gap-5 ">
                            <SpillLogo multiplySize={0.4} isDark={isSticky ? false : true} />
                            <div className='hidden md:block'>
                                {isSticky && <Search placeholder="Find Your Product Here" position="right" />}
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
                            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
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
            {isMenuOpen && (
                <div className="md:hidden border-2 border-white px-5 bg-white">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="text-black block">Home</a>
                        <a href="#" className="text-black block">Home</a>
                        <a href="#" className="text-black block">Home</a>
                        <a href="#" className="text-black block">Home</a>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default LayoutNavbar