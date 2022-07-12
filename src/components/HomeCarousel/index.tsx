import house from '../../../asset/images/house.jpg';
import house2 from '../../../asset/images/house2.jpg';
import house3 from '../../../asset/images/house3.jpg';
import Carousel from 'react-material-ui-carousel';
import { Typography } from '@mui/material';
import styles from './styles.scss';

const HomeCarousel = () => {
    const array = [
        house, house2, house3]
    return (
        <Carousel>
            {
                array.map((houseImage) => {
                    return (<HomeImage image={houseImage} />)
                })
            }
        </Carousel>
    )
}

const HomeImage = ({ image }: any) => {
    return (
        <div className={styles.homeCaroselImageWrapper}>
            <img src={image} alt="home images" className={styles.homeCaroselImageWrapperImg} />
            <div className={styles.homeCaroselOverlay}></div>
            <div className={styles.homeCaroselCardTitle}>
            <p className={styles.homeCaroselTitle}>Delivering Space</p>
            <p className={styles.homeCaroselTitle}> That Inspires</p>
                <p className={styles.homeCaroselSubtitle}>Find your <span className={styles.homeCaroselSubtitleSpan}>dream home</span> </p>
            </div>
        </div>
    )
}

export default HomeCarousel