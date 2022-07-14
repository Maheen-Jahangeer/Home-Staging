import { ArrowLeft, ArrowRight, SearchOffOutlined, StyleSharp } from '@mui/icons-material';
import { Button, ButtonProps, styled } from '@mui/material';
import Navbar from '../../components/Navbar';
import flat1 from "../../../asset/images/flat1.jpg";
import flat2 from "../../../asset/images/flat2.jpg";
import flat3 from "../../../asset/images/flat3.jpg";
import flat4 from "../../../asset/images/flat4.jpg";
import flat5 from "../../../asset/images/flat5.jpg";
import flat6 from "../../../asset/images/flat6.jpg";
import flat7 from "../../../asset/images/flat7.jpg";
import flat8 from "../../../asset/images/flat8.jpg";
import { PropertiesCard } from '../../components/PropertyCard';
import HomeHeader from '../../containers/HomeHeader';
import styles from './styles.scss';
import { PropertiesCardProps } from '../../components/PropertyCard/types';
import { joinClass } from '../../..';
import { useState } from 'react';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => (
  {
    color: theme.palette.getContrastText("#222d42"),
    backgroundColor: "#222d42",
    '&:hover': {
      backgroundColor: "#0e42a3",
    },
  }));

const Homes = () => {
  const array = [1, 2, 3, 2, 1, 1, 1, 1, 1, 11, 2, 1, 1, 2, 3];
  const propertiesData: PropertiesCardProps[] = [
    {
      image: flat1,
      price: '$ 375,000',
      title: 'Shadow Valley1',
      address: "Santa Cianta, CA 91390"
    },
    {
      image: flat2,
      price: '$ 375,000',
      title: 'Shadow Valley2',
      address: "Santa Cianta, CA 91390"
    }, {
      image: flat3,
      price: '$ 375,000',
      title: 'Shadow Valley3',
      address: "Santa Cianta, CA 91390",
      isSaved: true
    },{
      image: flat7,
      price: '$ 375,000',
      title: 'Shadow Valley7',
      address: "Santa Cianta, CA 91390"
    }, {
      image: flat8,
      price: '$ 375,000',
      title: 'Shadow Valley8',
      address: "Santa Cianta, CA 91390"
    }, {
      image: flat1,
      price: "$ 34,00",
      title: 'Shadow Valley9',
      address: "Santa Cianta, CA 91390"
    }, {
      image: flat5,
      price: '$ 375,000',
      title: 'Shadow Valley10',
      address: "Santa Cianta, CA 91390"
    }, {
      image: flat2,
      price: '$ 375,000',
      title: 'Shadow Valley11',
      address: "Santa Cianta, CA 91390"
    }, {
      image: flat8,
      price: '$ 375,000',
      title: 'Shadow Valley12',
      address: "Santa Cianta, CA 91390"
    }, {
      image: flat4,
      price: '$ 375,000',
      title: 'Shadow Valley13',
      address: "Santa Cianta, CA 91390"
    }, {
      image: flat7,
      price: '$ 375,000',
      title: 'Shadow Valley14',
      address: "Santa Cianta, CA 91390"
    }, {
      image: flat3,
      price: '$ 375,000',
      title: 'Shadow Valley15',
      address: "Santa Cianta, CA 91390"
    },
    {
      image: flat6,
      price: '$ 375,000',
      title: 'Shadow Valley16',
      address: "Santa Cianta, CA 91390"
    }, {
      image: flat4,
      price: '$ 375,000',
      title: 'Shadow Valley4',
      address: "Santa Cianta, CA 91390"
    }, {
      image: flat5,
      price: '$ 375,000',
      title: 'Shadow Valley5',
      address: "Santa Cianta, CA 91390"
    }, {
      image: flat6,
      price: '$ 375,000',
      title: 'Shadow Valley6',
      address: "Santa Cianta, CA 91390"
    }, {
      image: flat7,
      price: '$ 375,000',
      title: 'Shadow Valley7',
      address: "Santa Cianta, CA 91390"
    }, {
      image: flat8,
      price: '$ 375,000',
      title: 'Shadow Valley8',
      address: "Santa Cianta, CA 91390"
    }, {
      image: flat1,
      price: "$ 34,00",
      title: 'Shadow Valley9',
      address: "Santa Cianta, CA 91390"
    }, {
      image: flat5,
      price: '$ 375,000',
      title: 'Shadow Valley10',
      address: "Santa Cianta, CA 91390"
    }, {
      image: flat2,
      price: '$ 375,000',
      title: 'Shadow Valley11',
      address: "Santa Cianta, CA 91390"
    }, {
      image: flat8,
      price: '$ 375,000',
      title: 'Shadow Valley12',
      address: "Santa Cianta, CA 91390"
    }, {
      image: flat4,
      price: '$ 375,000',
      title: 'Shadow Valley13',
      address: "Santa Cianta, CA 91390"
    }
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
    <div className={styles.homesWrapper}>
      <HomeHeader />
      <div className={styles.homesContainer}>
        <div className={styles.homesSearchContainer}>
          <input type="text" placeholder='Search homes, places, features.....' className={styles.homesSearchInput} />
          <ColorButton variant='contained' startIcon={<SearchOffOutlined />} color="inherit" className={styles.homesSearchButton}>
            Search
          </ColorButton>
        </div>
        <div className={styles.homesItemsContainer}>
          {
            propertiesData.slice(selectedIndex, dataIndex).map((data: PropertiesCardProps) => {
              return <PropertiesCard image={data.image} title={data.title} address={data.address} price={data.price} />
            })
          }
        </div>
        {
          propertiesData.length > 9 &&
          <div className={styles.homesButtonContainer}>
            {
              selectedIndex != 0 && selectedIndex > 0 ?
                <ColorButton startIcon={<ArrowLeft />} className={joinClass(styles.homesSearchButton, styles.homesButton)} onClick={previousHandler}>
                  Previous
                </ColorButton> :
                <Button disabled variant='contained' startIcon={<ArrowLeft />} className={joinClass(styles.homesSearchButton, styles.homesButton)}  >
                  Previous
                </Button>
            }
            {
              selectedIndex < propertiesData.length - 9 ?
                <ColorButton endIcon={<ArrowRight />} className={joinClass(styles.homesSearchButton, styles.homesButton)} onClick={nextKeyHandler}>
                  Next
                </ColorButton> :
                <Button variant='contained' disabled endIcon={<ArrowRight />} className={joinClass(styles.homesSearchButton, styles.homesButton)}  >
                  Next
                </Button>
            }
          </div>}
      </div>
    </div>
  )
}

export default Homes