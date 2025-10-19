import {BrowserRouter, useLocation} from "react-router-dom";
import RouteLinks from "./RouteLinks/RouteLinks"
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <>
      <BrowserRouter>
        <RouteLinks />
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
