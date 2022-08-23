import { Bathtub, Room, CropFree } from '@mui/icons-material';
import Button from '../../components/Button';
import styles from './styles.scss';
import flat1 from '../../../asset/images/flat2.jpg';
import home1 from "../../../asset/images/home1.jpg";
import home2 from "../../../asset/images/home2.jpg";
import home3 from "../../../asset/images/home3.jpg";
import home4 from "../../../asset/images/home4.jpg";
import home5 from "../../../asset/images/home5.jpg";
import home6 from "../../../asset/images/home6.jpg";
import home7 from "../../../asset/images/home7.jpg";
import home8 from "../../../asset/images/home8.jpg";
import { PropertiesCard } from '../../components/PropertyCard';
import { FeaturedPropertiesProps } from '../../components/FeaturedProperties/types';
import FeaturePropertiesContainer from '../../containers/FeaturePropertiesContainer';
import FeaturedPropertiesCard from '../../components/FeaturedProperties';

const BookNow = () => {

  const featurePropertiesData: FeaturedPropertiesProps[] = [
    {
      imageUrl: home1,
      title: "Shadow Valley1",
      address: "00 W 22nd New York, NY",
      bathCount: "2",
      bedRoomCount: '5',
      totalSqureFit: "2785"
    },
    {
      imageUrl: home2,
      title: "Shadow Valley2",
      address: "00 W 22nd New York, NY",
      bathCount: "2",
      bedRoomCount: '5',
      totalSqureFit: "2785"
    }, {
      imageUrl: home3,
      title: "Shadow Valley3",
      address: "00 W 22nd New York, NY",
      bathCount: "2",
      bedRoomCount: '5',
      totalSqureFit: "2785"
    }, {
      imageUrl: home4,
      title: "Shadow Valley4",
      address: "00 W 22nd New York, NY",
      bathCount: "2",
      bedRoomCount: '5',
      totalSqureFit: "2785"
    }, {
      imageUrl: home5,
      title: "Shadow Valley5",
      address: "00 W 22nd New York, NY",
      bathCount: "2",
      bedRoomCount: '5',
      totalSqureFit: "2785"
    }, {
      imageUrl: home6,
      title: "Shadow Valley6",
      address: "00 W 22nd New York, NY",
      bathCount: "2",
      bedRoomCount: '5',
      totalSqureFit: "2785"
    }, {
      imageUrl: home7,
      title: "Shadow Valley7",
      address: "00 W 22nd New York, NY",
      bathCount: "2",
      bedRoomCount: '5',
      totalSqureFit: "2785"
    }, {
      imageUrl: home8,
      title: "Shadow Valley8",
      address: "00 W 22nd New York, NY",
      bathCount: "2",
      bedRoomCount: '5',
      totalSqureFit: "2785"},
      {
        imageUrl: home1,
        title: "Shadow Valley1",
        address: "00 W 22nd New York, NY",
        bathCount: "2",
        bedRoomCount: '5',
        totalSqureFit: "2785"
      },
      {
        imageUrl: home2,
        title: "Shadow Valley2",
        address: "00 W 22nd New York, NY",
        bathCount: "2",
        bedRoomCount: '5',
        totalSqureFit: "2785"
      }, {
        imageUrl: home3,
        title: "Shadow Valley3",
        address: "00 W 22nd New York, NY",
        bathCount: "2",
        bedRoomCount: '5',
        totalSqureFit: "2785"
      }]

  const bookNowHandler = () => {
    console.log("Book now clicked")
  }
  return (
    <div className={styles.bookNowWrapper}>
      <div className={styles.bookNowFirstWrapper}>
        <p className={styles.bookNowTitle}>Home Name</p>
        <div className={styles.bookNowSeperator}></div>
        <div className={styles.bookNowFirstContainer}>
          <div className={styles.bookNowImgWrapper}>
            <div className={styles.bookNowImgContainer}>
              <img src={flat1} alt="Flat 1" />
            </div>
          </div>
          <div className={styles.bookNowDetailWrapper}>
            <div className={styles.bookNowDetailContainer}>
              <div className={styles.bookNowDetailIconContainer}>
                <Bathtub fontSize='large' />
                <p className={styles.bookNowDetailIconTitle}>4</p>
              </div >
              <div className={styles.bookNowDetailIconContainer}>
                <Room fontSize='large' />
                <p className={styles.bookNowDetailIconTitle}>2</p>
              </div>
              <div className={styles.bookNowDetailIconContainer}>
                <CropFree fontSize='large' />
                <p className={styles.bookNowDetailIconTitle}>1200 sqt</p>
              </div>
              <div className={styles.bookNowDetailSeperator} />
              <Button buttonLabel="Book Now" onClick={bookNowHandler} className={styles.bookNowButton}/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bookNowSecondWrapper}>
        <div className={styles.bookNowSecondContainer}>
          <p className={styles.bookNowSecondTitle}>You May Also Like</p>
          <div className={styles.bookNowSecondContainer}>
            {
              featurePropertiesData.map((property) => {
                return (
                  <FeaturedPropertiesCard imageUrl={property.imageUrl} title={property.title} address={property.address} bathCount={property.bathCount} bedRoomCount={property.bedRoomCount} totalSqureFit={property.totalSqureFit} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookNow