import styles from './styles.module.scss';
import Link from 'next/link';
import Button from '@/component/elements/Button';
import Search from '@/component/elements/Search';
import SpillLogo from '../elements/SpillLogo';
type ComponentProps = {
  children?: React.ReactNode;
};
function Component({ children }: ComponentProps) {
  const RightBeforeLogin = [
    {
      title: () => <Link href="/login" className={styles.login}>Login</Link>,
      link: '/login',
    },
    {
      title: () => <Link href="/register" className={styles.register}>Register</Link>,
      link: '/register',
    },
    {
      title: () => <Button className={styles.review}>Post a Job</Button>,
      link: '/',
    }
  ]

  return (
    <div className={styles.root} >
      <div className={styles.navbar}>
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
      {children}
    </div>
  )
}

export default Component;