import HomeHeader from '../../containers/HomeHeader';
import banner2 from '../../../asset/images/banner.jpg';
import styles from './styles.scss';
import { ColorButton, SearchContainer } from '../Homes';
import home1 from "../../../asset/images/home1.jpg";
import home2 from "../../../asset/images/home2.jpg";
import home3 from "../../../asset/images/home3.jpg";
import home4 from "../../../asset/images/home4.jpg";
import home5 from "../../../asset/images/home5.jpg";
import home6 from "../../../asset/images/home6.jpg";
import home7 from "../../../asset/images/home7.jpg";
import home8 from "../../../asset/images/home8.jpg";
import FeaturedPropertiesCard from '../../components/FeaturedProperties';
import { FeaturedPropertiesProps } from '../../components/FeaturedProperties/types';
import { useState } from 'react';
import { ArrowRight, ArrowLeft } from '@mui/icons-material';
import { joinClass } from '../../utils';
import { Button } from '@mui/material';
// import Button from '../../components/Button';

const FeatureHomesPage = () => {
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
    ]
    const [selectedIndex, setSelectedIndex] = useState(0);
  const [dataIndex, setDataIndex] = useState(9);

  const nextKeyHandler = () => {
    setSelectedIndex(prevIndex => prevIndex + 9);
    setDataIndex(prevIndex => prevIndex + 9);
  }
  const previousHandler = () => {
    setSelectedIndex(prevIndex => prevIndex - 9);
    setDataIndex(prevIndex => prevIndex - 9)
  }
  return (
    <div className={styles.featuredHomesWrapper}>
        <HomeHeader image={banner2} title="Feature Homes" />
        <div className={styles.featuredHomesContainer}>
          <SearchContainer />
          <div className={styles.featuredHomesItemsContainer}>
              {
                featurePropertiesData?.slice(selectedIndex, dataIndex)?.map((property)=> {
                  return (
                    <FeaturedPropertiesCard imageUrl={property.imageUrl} address={property.address} title={property.title} bathCount={property.bathCount} bedRoomCount={property.bedRoomCount} totalSqureFit={property.totalSqureFit} />
                  )
                })
              }
              {
          featurePropertiesData.length > 9 &&
          <div className={styles.featuredHomesButtonContainer}>
            {
              selectedIndex != 0 && selectedIndex > 0 ?
                <ColorButton startIcon={<ArrowLeft />} className={joinClass(styles.featuredHomesSearchButton, styles.featuredHomesButton)} onClick={previousHandler}>
                  Previous
                </ColorButton> :
                <Button disabled variant='contained' startIcon={<ArrowLeft />} className={joinClass(styles.featuredHomesSearchButton, styles.featuredHomesButton, styles.featuredHomesButtonDisabled)}  >
                  Previous
                </Button>
            }
            {
              selectedIndex < featurePropertiesData.length - 9 ?
                <ColorButton endIcon={<ArrowRight />} className={joinClass(styles.featuredHomesSearchButton, styles.featuredHomesButton)} onClick={nextKeyHandler}>
                  Next
                </ColorButton> :
                <Button variant='contained' disabled endIcon={<ArrowRight />} className={joinClass(styles.featuredHomesSearchButton, styles.featuredHomesButton, styles.featuredHomesButtonDisabled)}  >
                  Next
                </Button>
            }
          </div>}
          </div>
        </div>
    </div>
  )
}

export default FeatureHomesPage