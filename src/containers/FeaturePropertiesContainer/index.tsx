import React from 'react'
import home1 from "../../../asset/images/home1.jpg";
import home2 from "../../../asset/images/home2.jpg";
import home3 from "../../../asset/images/home3.jpg";
import home4 from "../../../asset/images/home4.jpg";
import home5 from "../../../asset/images/home5.jpg";
import home6 from "../../../asset/images/home6.jpg";
import home7 from "../../../asset/images/home7.jpg";
import home8 from "../../../asset/images/home8.jpg";
import FeaturedPropertiesCard from '../../components/FeaturedProperties';
import styles from "./styles.scss";

import { FeaturedPropertiesProps } from '../../components/FeaturedProperties/types'
// import { Button } from '@mui/material';
import Button from '../../components/Button';

const FeaturePropertiesContainer = () => {
  return <FeaturePropertiesRow />
}

const FeaturePropertiesRow = () => {
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
      totalSqureFit: "2785"}
    // }, {
    //   imageUrl: home1,
    //   title: "Shadow Valley9",
    //   address: "00 W 22nd New York, NY",
    //   bathCount: "2",
    //   bedRoomCount: '5',
    //   totalSqureFit: "2785"
    // }, {
    //   imageUrl: home5,
    //   title: "Shadow Valley10",
    //   address: "00 W 22nd New York, NY",
    //   bathCount: "2",
    //   bedRoomCount: '5',
    //   totalSqureFit: "2785"
    // }
  ]
  return (
    <div className={styles.featurePropertiesRowWrapper}>
      <div className={styles.featurePropertiesRowTitleWrapper}>
        <div className={styles.featurePropertiesRowTitleContainer}>
          <p className={styles.featurePropertiesRowTitle}> Look our top featured properties</p>
          <p className={styles.featurePropertiesRowSubTitle}>On behalf of private inverstors, families and institutions partners, we but and operate multifamily real estate  with the goals of cash flow.</p>
        </div>
        <Button className={styles.featurePropertiesRowButton}>Load More</Button>
      </div>
      <div className={styles.featurePropertiesRowContainer}>
        {
          featurePropertiesData.map((propertiesData: FeaturedPropertiesProps) => {
            return (
              <FeaturedPropertiesCard imageUrl={propertiesData.imageUrl} title={propertiesData.title}
                address={propertiesData.address} bathCount={propertiesData.bathCount} bedRoomCount={propertiesData.bedRoomCount} totalSqureFit={propertiesData.totalSqureFit}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default FeaturePropertiesContainer