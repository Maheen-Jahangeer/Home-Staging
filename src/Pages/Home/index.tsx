import Navbar from "../../components/Navbar"
import house from "../../../asset/images/house.jpg";
import styles from './styles.scss';
import HomeCarousel from "../../components/HomeCarousel";

const Home = () => {
  return (
  <div className={styles.wrapper}>
    <Navbar />
    <HomeCarousel />
  </div>
  )
}

export default Home