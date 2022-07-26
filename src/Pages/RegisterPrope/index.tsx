import flat1 from '../../../asset/images/flat1.jpg';
import styles from './styles.scss';

const RegisterProperty = () => {
  return (
    <div className={styles.registerPropertyWrapper}>
        <div className={styles.registerPropertyContainer}>
            <div className={styles.registerPropertyLeftContainer}>
                <div className={styles.registerPropertyLeftImageContainer}>
                    <img src={flat1} alt="flat image" className={styles.registerPropertyLeftImage}/>
                </div>
                <div>
                    {/* //to-do*/}

                </div>
            </div>
        </div>
    </div>
  )
}

export default RegisterProperty