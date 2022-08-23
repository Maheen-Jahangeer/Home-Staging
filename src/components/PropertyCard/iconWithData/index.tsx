import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import styles from "./styles.scss";

const IconWithData = () => {
  return (
    <div className={styles.iconDataWrapper}>
        <BathtubOutlinedIcon color='inherit' fontSize='inherit' className={styles.iconDataWrapperIcon} />
        <p className={styles.iconDataWrapperIconLabel}>2 Baths</p>
    </div>
  )
}

export default IconWithData;