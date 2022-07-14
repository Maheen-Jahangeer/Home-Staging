import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../src/Pages/Home';
import Homes from "../src/Pages/Homes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  )
}

export default App