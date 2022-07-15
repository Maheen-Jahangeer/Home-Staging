import { joinClass } from "../../..";
import styles from './styles.scss';
import { HomeHeaderProps } from "./types";

const HomeHeader = ({ image, title}: HomeHeaderProps) => {
  return (
    <div className={styles.hotelHeaderWrapper}>
      <div className={styles.hotelHeaderImageContainer}>
        <img src={image} alt="Hotel header image" className={styles.hotelHeaderImage} />
      </div>
      <div className={styles.hotelHeaderTitleContainer}>
        <p className={styles.hotelHeaderTitle}>{title}</p>
        <p className={styles.hotelHeaderSubTitle}>Why don't you buy your <span className={joinClass(styles.hotelHeaderSubTitle, styles.hotelHeaderSubTitleSpan)}> dream </span> home ?</p>
      </div>
    </div>
  )
}

export default HomeHeader