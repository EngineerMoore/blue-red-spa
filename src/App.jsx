import NavBar from "./components/NavBar.jsx";
import BodyMain from "./components/BodyMain.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <NavBar />
        <BodyMain />
        <Footer />
      </div>
    </>
  )
}

export default App
