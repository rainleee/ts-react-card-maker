import styles from './button.module.css';

type ButtonProps = {
  name: string;
  // TODO: event
  onClick: (event: any) => void;
};

const Button = ({ name, onClick }: ButtonProps) => (
  <button className={styles.button} onClick={onClick}>
    {name}
  </button>
);

export default Button;
