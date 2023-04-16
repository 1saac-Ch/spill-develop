import React from 'react';
import styles from "./styles.module.scss"
type CheckboxProps = {
  checked: boolean;
  label: string;
  onChange: (e: any) => void,
  id?: string
};

function Component ({ checked, label, onChange, id }:CheckboxProps) {

  return (
    <div className={styles.wrapper}>
      <label  htmlFor={id} className={styles.checkbox}>
        <input type="checkbox" checked={checked} id={id} onChange={onChange} />
        <span></span>
      </label>
      <span>{label}</span>
    </div>
  );
};

export default Component;