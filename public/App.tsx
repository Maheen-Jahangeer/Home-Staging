import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeatureHomesPage from "../src/Pages/FeaturePage";
import Home from '../src/Pages/Home';
import RegisterProperty from "../src/Pages/RegisterPrope";
import Homes from "../src/Pages/Homes";
import BookNow from "../src/Pages/BookNow";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookNow />} />
        </Routes>
    </Router>
  )
}

export default App