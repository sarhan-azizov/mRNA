import styles from './button.module.scss';

export interface ButtonProps {
  children: any
}

export function Button(props: ButtonProps) {
  return (
    <button className={styles['button']}>{props.children}</button>
  );
}

export default Button;
