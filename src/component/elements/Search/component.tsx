import styles from "./styles.module.scss";
import SearchIcon from '@mui/icons-material/Search';
import Button from "@/component/elements/Button";
type SearchProps = {
  placeholder?: string;
  onChange?: (e: any) => void;
  onClick?: (e: any) => void;
  value?: string;
  className?: string;
  position?: "left" | "right";
  variant?: "wording"
};

function Component({ ...props }: SearchProps) {
  const Variant = () => {
    switch (props.variant) {
      case "wording":
        return (
          <div className={styles.wrapperWording} >
            <SearchIcon className={styles.icon} />
            <input {...props} />
            <Button className={styles.button} onClick={props.onClick}>Cari</Button>
          </div>
        )
      default:
        return (
          <div className={styles.wrapper} >
            <input {...props} />
            <SearchIcon className={styles.icon} />
          </div>
        )
    }
  }
  return (
    <>
      {Variant()}
    </>
  )
}

export default Component;