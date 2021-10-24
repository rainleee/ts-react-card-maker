import styles from './button.module.css';

type ButtonProps = {
  name: string;
  onClick: (event: React.SyntheticEvent<HTMLElement>) => void;
};

const Button = ({ name, onClick }: ButtonProps) => (
  <button className={styles.button} onClick={onClick}>
    {name}
  </button>
);

export default Button;
