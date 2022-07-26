import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeatureHomesPage from "../src/Pages/FeaturePage";
import Home from '../src/Pages/Home';
import RegisterProperty from "../src/Pages/RegisterPrope";
import Homes from "../src/Pages/Homes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterProperty />} />
        </Routes>
    </Router>
  )
}

export default App