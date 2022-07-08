import { joinClass } from '../../..';
import styles from './styles.scss';

const Button = ({buttonLabel,onClick,className}:any) => {
  return (
    <>
    <button className={joinClass(styles.button, className && className)}>{buttonLabel}</button>
    </>
  )
}

export default Button