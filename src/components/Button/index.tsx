import { Props } from './types';
import icon from './assets/icon.png';
import styles from './styles.module.scss';

const Button = ({ withIcon, disabled, title }: Props) => {

  return (
    <span>
      <button
        disabled={disabled}
        className={styles.button}
      >
        {withIcon && <img src={icon} alt="icon" />}
        {title}
      </button>
    </span>
  );
};

export default Button;
