import HomeHeader from '../../containers/HomeHeader';
import banner2 from '../../../asset/images/banner2.jpg';
import styles from './styles.scss';
import { SearchContainer } from '../Homes';
import FeaturedPropertiesCard from '../../components/FeaturedProperties';

const FeatureHomesPage = () => {
  const array = [1,2,2,2,2,2,2,2,2];
  return (
    <div className={styles.featuredHomesWrapper}>
        <HomeHeader image={banner2} title="Feature Homes" />
        <div className={styles.featuredHomesContainer}>
          <SearchContainer />
          <div className={styles.featuredHomesItemsContainer}>
              {
                array.map(()=> {
                  return (
                    <div />
                  )
                })
              }
          </div>
        </div>
    </div>
  )
}

export default FeatureHomesPage