import Navbar from "../../components/Navbar"
import house from "../../../asset/images/house.jpg";
import styles from './styles.scss';
import HomeCarousel from "../../components/HomeCarousel";
import HomeContainer from "../../containers/Home";
import IntroductionVideo from "../../containers/IntorudctionVideo";
import RolesContainer from "../../containers/RolesContainer";
import PropertiesCard from "../../components/PropertyCard";
import { alignProperty } from "@mui/material/styles/cssUtils";
import PropertiesCarousel from "../../containers/PropertiesCarosel";
import PropertiesRow from "../../containers/PropretiesRow";
import AgentProfileImage from "../../components/AgentProfileImage";
import AgentProfileContainer from "../../containers/AgentProfile";
import FeaturePropertiesContainer from "../../containers/FeaturePropertiesContainer";
import CustomerProfile from "../../components/CustomerProfile";
import FooterContainer from "../../containers/FooterContainer";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <HomeContainer />
      {/* <IntroductionVideo /> */}
      <RolesContainer />
      <PropertiesRow />
      <AgentProfileContainer />
      <FeaturePropertiesContainer />
      <FooterContainer />
    </div>
    // <CustomerProfile />
  )
}

export default Home