import { Bathtub } from '@mui/icons-material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import house from '../../../asset/images/flat1.jpg';
import styles from './styles.scss';
import { FeaturedPropertiesProps } from './types';

const IconWithLabel = ({ title, Icon }: any) => {
  return (
    <div className={styles.featuredPropertyAssetsIconContainer}>
      <Icon color="inherit" fontSize="inherit" className={styles.featuredPropertyAssetsIcon} />
      <p className={styles.featuredPropertyAssetsIconLabel}>{title}</p>
    </div>
  )
}

const FeaturedPropertiesCard = ({imageUrl, title, address, bathCount, bedRoomCount, totalSqureFit}:FeaturedPropertiesProps) => {
  return (
    <div className={styles.featuredPropertyWrapper}>
      <div className={styles.featuredPropertyImageContainer}>
        <img src={imageUrl} alt="Featured home" className={styles.featuredPropertyImage} />
      </div>
      <div className={styles.featuredPropertyTitleWrapper}>
        <div className={styles.featuredPropertyTitleContainer}>
          <p className={styles.featuredPropertyTitle}>{title}</p>
          <div className={styles.featuredPropertyLocationIconContainer}>
            <LocationOnOutlinedIcon />
            <p className={styles.featuredPropertyLocationIcon}>{address}</p>
            </div>
            <div className={styles.featuredPropertySeperator}></div>
            <div className={styles.featuredPropertyAssetsIconWrapper}>
              <IconWithLabel title={`${bathCount} Baths`} Icon={Bathtub} />
              <IconWithLabel title={`${bedRoomCount} Bedrooms`} Icon={Bathtub} />
              <IconWithLabel title={`${totalSqureFit} Sqft`} Icon={Bathtub} />
            </div>
            <p className={styles.featuredPropertyPrice}>$ 75,000</p>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPropertiesCard;
