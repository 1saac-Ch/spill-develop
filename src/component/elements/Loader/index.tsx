import { Loading } from '@nextui-org/react';
import { classicNameResolver } from 'typescript';
import styles from "./styles.module.css";

type LoaderProps = {
  type?: "points" | "default"| "gradient" | "spinner";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

function Loader({type, size}: LoaderProps) {
  return (
    <div className={styles.root}>
      <Loading type={type} size={size} />
    </div>
  );
}

export default Loader;