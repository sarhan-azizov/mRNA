import styles from './table.module.scss';

export interface ButtonProps {
  children: any
}

export function Table(props: ButtonProps) {
  return (
    <button className={styles['button']}>{props.children}</button>
  );
}

export default Table;
