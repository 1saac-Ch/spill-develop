import styles from './styles.module.scss'
type ComponentProps = {
  children?: React.ReactNode;
};
function Component({ children }: ComponentProps) {
  return (
    <div className={styles.container} >
      <h1>Layout</h1>
      {children}
    </div>
    )
}

export default Component;