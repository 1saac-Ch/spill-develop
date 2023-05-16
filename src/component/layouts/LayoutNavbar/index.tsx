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
        <div className={isSticky ? styles.navbarSticky : styles.navbar}>
            <div className={styles.maxContainer}>
                <div className={styles.left}>
                    <SpillLogo multiplySize={0.4} isDark={isSticky ? false : true} />
                    {isSticky && <Search placeholder="Find Your Product Here" position="right" />}

                </div>
                <div className={styles.right}>
                    {RightBeforeLogin.map((item, index) => (
                        <div key={index} className={styles.item}>
                            {typeof item.title === 'function' ? item.title() : item.title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LayoutNavbar