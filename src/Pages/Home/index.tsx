import Navbar from "../../components/Navbar"
import house from "../../../asset/images/house.jpg";
import styles from './styles.scss';
import HomeCarousel from "../../components/HomeCarousel";
import HomeContainer from "../../containers/Home";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <HomeContainer />
    </div>
  )
}

export default Home