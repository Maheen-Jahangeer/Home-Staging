import Carousel from 'react-material-ui-carousel';
import PropertiesCardContainer from '../../components/PropertyCard';
import flat1 from "../../../asset/images/flat1.jpg";
import flat2 from "../../../asset/images/flat2.jpg";
import flat3 from "../../../asset/images/flat3.jpg";
import flat4 from "../../../asset/images/flat4.jpg";
import flat5 from "../../../asset/images/flat5.jpg";
import flat6 from "../../../asset/images/flat6.jpg";
import flat7 from "../../../asset/images/flat7.jpg";
import flat8 from "../../../asset/images/flat8.jpg";
import PropertiesCard from '../../components/PropertyCard';
import styles from "./styles.scss";
import { useState } from 'react';
import { PropertiesCardProps } from '../../components/PropertyCard/types';

const PropertiesCarousel= () => {
  const carouselCountArray = [1,2,3,4];
  const array = [1,2,3,2,2,2,2,2,2]
  const propertiesData:PropertiesCardProps[] = [
    {
      image:flat1,
      price:'$ 375,000',
      title:'Shadow Valley1',
      address:"Santa Cianta, CA 91390"
    },
    {
      image:flat2,
      price:'$ 375,000',
      title:'Shadow Valley2',
      address:"Santa Cianta, CA 91390"
    },{
      image:flat3,
      price:'$ 375,000',
      title:'Shadow Valley3',
      address:"Santa Cianta, CA 91390",
      isSaved:true
    },{
      image:flat4,
      price:'$ 375,000',
      title:'Shadow Valley4',
      address:"Santa Cianta, CA 91390"
    },{
      image:flat5,
      price:'$ 375,000',
      title:'Shadow Valley5',
      address:"Santa Cianta, CA 91390"
    },{
      image:flat6,
      price:'$ 375,000',
      title:'Shadow Valley6',
      address:"Santa Cianta, CA 91390"
    },{
      image:flat7,
      price:'$ 375,000',
      title:'Shadow Valley7',
      address:"Santa Cianta, CA 91390"
    },{
      image:flat8,
      price:'$ 375,000',
      title:'Shadow Valley8',
      address:"Santa Cianta, CA 91390"
    },{
      image:flat1,
      price:"$ 34,00",
      title:'Shadow Valley9',
      address:"Santa Cianta, CA 91390"
    },{
      image:flat5,
      price:'$ 375,000',
      title:'Shadow Valley10',
      address:"Santa Cianta, CA 91390"
    },{
      image:flat2,
      price:'$ 375,000',
      title:'Shadow Valley11',
      address:"Santa Cianta, CA 91390"
    },{
      image:flat8,
      price:'$ 375,000',
      title:'Shadow Valley12',
      address:"Santa Cianta, CA 91390"
    },{
      image:flat4,
      price:'$ 375,000',
      title:'Shadow Valley13',
      address:"Santa Cianta, CA 91390"
    },{
      image:flat7,
      price:'$ 375,000',
      title:'Shadow Valley14',
      address:"Santa Cianta, CA 91390"
    },{
      image:flat3,
      price:'$ 375,000',
      title:'Shadow Valley15',
      address:"Santa Cianta, CA 91390"
    },
    {
      image:flat6,
      price:'$ 375,000',
      title:'Shadow Valley16',
      address:"Santa Cianta, CA 91390"
    },
  ]
  const dataForMobileView = propertiesData.slice(0,3)
  const [initialIndex, setInitialIndex] = useState(0);
  const [incrementCount, setIncrementCount] = useState(4);
  return (<>
    <Carousel className={styles.carouselWrapper} 
    next={()=>{
      setInitialIndex(prevIndex => prevIndex+4);
      setIncrementCount(prevIndex => prevIndex+4)
      if(initialIndex == 12){
        setInitialIndex(0);
        setIncrementCount(4)
      }
    }
  }
  prev={() => {
    setInitialIndex(prevIndex => prevIndex-4);
    setIncrementCount(prevIndex => prevIndex-4)
  }}
    >
        {
          carouselCountArray.map((count,)=> {
            return(
              <PropertiesCardContainer data={propertiesData.slice(initialIndex,incrementCount)} />
            )
          })
        }
    </Carousel>
    <div className={styles.carouselMobileContainer}>
        <PropertiesCardContainer data={dataForMobileView} />
    </div>
    </>
  )
}

export default PropertiesCarousel;