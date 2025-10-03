import {BrowserRouter, useLocation} from "react-router-dom";
import RouteLinks from "./RouteLinks/RouteLinks"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {

  // const hiddenPaths = ['/500', '/404']

  // const shouldHideLayout = hiddenPaths.includes(location.pathname)
  return (
    <>
      <BrowserRouter>
        {/* {!shouldHideLayout && <Header />} */}
        <RouteLinks />
        <Footer />
        {/* {!shouldHideLayout && <Footer />} */}
      </BrowserRouter>

    </>
  )
}

export default App
