import { joinClass } from "../../..";
import banner from "../../../asset/images/banner.jpg";
import styles from './styles.scss';

const HomeHeader = () => {
  return (
    <div className={styles.hotelHeaderWrapper}>
        <div className={styles.hotelHeaderImageContainer}>
            <img src={banner} alt="Hotel header image" className={styles.hotelHeaderImage} />
        </div>
        <div className={styles.hotelHeaderTitleContainer}>
          <p className={styles.hotelHeaderTitle}>Homes</p>
          <p className={styles.hotelHeaderSubTitle}>Why don't you buy your <span className={joinClass(styles.hotelHeaderSubTitle,styles.hotelHeaderSubTitleSpan)}> dream </span> home ?</p>
        </div>
    </div>
  )
}

export default HomeHeader