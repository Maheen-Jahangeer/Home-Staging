import house from '../../../asset/images/house.jpg';
import house2 from '../../../asset/images/house2.jpg';
import house3 from '../../../asset/images/house3.jpg';
// import Slider from 'react-slick';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import styles from './styles.scss';

const AutoplaySlider = withAutoplay(AwesomeSlider)

const HomeCarousel = () => {
  return (
    <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={100}
    >
        <div className={styles.homeCaroselImageWrapper}>
            <img src={house} alt="home images" className={styles.homeCaroselImageWrapperImg}/>
        </div>
        <div className={styles.homeCaroselImageWrapper}>
            <img src={house2} alt="home images" className={styles.homeCaroselImageWrapperImg}/>
        </div>
        <div className={styles.homeCaroselImageWrapper}>
            <img src={house3} alt="home images" className={styles.homeCaroselImageWrapperImg}/>
  </div>
    </AutoplaySlider>
  )
}

// const HomeImageMap = () => {
    
//     return(<>
//     {
//         homeImages.map((homeimage)=> {
//             return(
//                 <HomeImage image={homeimage} />
//             )
//         })
//     }
//     </>)
// }

const HomeImage = ({image}:any) => {
    return(
        <div className={styles.homeCaroselImageWrapper}>
            <img src={image} alt="home images" className={styles.homeCaroselImageWrapperImg}/>
        </div>
    )
}

export default HomeCarousel