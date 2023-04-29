import React from 'react'
import Button from '@/component/elements/Button';
import SpillLogo from '@/component/elements/SpillLogo';
import Search from '@/component/elements/Search';
import Link from 'next/link';
import styles from "./styles.module.scss";

const LayoutNavbar = () => {
    const RightBeforeLogin = [
        {
            title: () => <Link href="/login" className={styles.login}>Log in</Link>,
            link: '/login',
        },
        {
            title: () => <Link href="/register" className={styles.register}>Daftar</Link>,
            link: '/register',
        },
        {
            title: () => <Button className={styles.review}>Tulis Review</Button>,
            link: '/',
        }
    ]
    return (
        <div className={styles.navbar}>
            <div className={styles.maxContainer}>
                <div className={styles.left}>
                    <SpillLogo multiplySize={0.4} />
                    <Search placeholder="Find Your Product Here" position="right" />
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