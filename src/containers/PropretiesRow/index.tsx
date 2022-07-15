// import { Button } from '@mui/material';
import Button from '../../components/Button';
import PropertiesCarousel from '../PropertiesCarosel';
import styles from './styles.scss';

const PropertiesRow = () => {
  return (
    <div>
        <div className={styles.propertiesRowTitleWrapper}>
            <div className={styles.propertiesRowTitleContainer}>
                <p className={styles.propertiesRowTitle}>Our recently added properties</p>
                <p className={styles.propertiesRowSubTitle}>On Behalf of private inverstors, families and institutional partners. We buy and operate mutifamily real estate with the goals of cash flow.</p>
            </div>
            <Button className={styles.propertiesRowButton}>Load more</Button>
        </div>
        <PropertiesCarousel />
    </div>
  )
}

export default PropertiesRow