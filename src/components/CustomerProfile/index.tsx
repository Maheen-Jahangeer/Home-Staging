import customer1 from "../../../asset/images/customer1.jpg";
import { CommentIcon } from "../../containers/IntorudctionVideo";
import styles from './styles.scss';

const CustomerProfile = () => {
  return (
    <div className={styles.customerProfileWrapper}>
        <div className={styles.customerProfileIconHolder}>
          <CommentIcon />
        </div>
        <div className={styles.customerProfileImageContainer}>
            <img src={customer1} alt="Customer Profile image" className={styles.customerProfileImage}/>
        </div>
    </div>
  )
}

export default CustomerProfile