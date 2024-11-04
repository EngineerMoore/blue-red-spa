import { Routes,Route,Link } from "react-router-dom";

import Blue from "./components/Blue.jsx";
import Red from "./components/Red.jsx";
import Home from "./components/Home.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="" element={<Blue />} />
        <Route path="" element={<Red />} />
      </Routes>
    </>
  )
}

export default App
