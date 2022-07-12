import IconWithData from './iconWithData';
import flat1 from "../../../asset/images/flat1.jpg";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import styles from './styles.scss';
import { PropertiesCardProps } from './types';

const PropertiesCard = ({image, title, 
price, address, isSaved=false }:PropertiesCardProps) => {
  console.log("Is saved", isSaved)
  return (
    <div className={styles.propertiesCardWrapper}>
        {
          isSaved ? 
          <BookmarkOutlinedIcon color='inherit' fontSize='inherit' className={styles.propertiesCardWrapperIconBookMark} /> :
          <BookmarkBorderOutlinedIcon  color='inherit' fontSize='inherit' className={styles.propertiesCardWrapperIconBookMark}/>}
        <div className={styles.propertiesCardWrapperImage}>
            <img src={image} alt="flat card image" className={styles.propertiesCardWrapperImageImg} />
        </div>
        <div className={styles.propertiesCardWrapperDataContainer}>
            <p className={styles.propertiesCardWrapperAmount}>{price}</p>
            <p className={styles.propertiesCardWrapperTitle}>{title}</p>
            <p className={styles.propertiesCardWrapperAddress}>{address}</p>
            <div className={styles.propertiesCardWrapperIconContainer}>
                <IconWithData />
                <IconWithData />
                <IconWithData />
            </div>
        </div>
    </div>
  )
}

const PropertiesCardContainer = ({data}:any) => {
  return(
    <div className={styles.propertiesFlexWrapper}>
        {
          data.map((eachData:PropertiesCardProps)=> {
            return <PropertiesCard image={eachData.image} title={eachData.title} address={eachData.address} price={eachData.price} isSaved={data.isSaved} />
          })
        }
    </div>
  )
}

export default PropertiesCardContainer;