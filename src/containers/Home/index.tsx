import Navbar from "../../components/Navbar"
import house from "../../../asset/images/house.jpg";
import styles from './styles.scss';
import HomeCarousel from "../../components/HomeCarousel";

const HomeContainer = () => {
  return (
  <div className={styles.homeWrapper}>
    <Navbar />
    <HomeCarousel />
  </div>
  )
}

export default HomeContainer