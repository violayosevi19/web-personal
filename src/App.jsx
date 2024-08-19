import { Routes as ReactRoute, Route } from "react-router-dom";
// import "./App.css";
import Layout from "./component";
import Home from "./pages/index";
// import LandingPage from "./pages/landingPage";
// import AboutMe from "./pages/aboutMe";

function App() {
  return (
    <>
      <ReactRoute>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="#education" element={<LandingPage />} /> */}
          {/* <Route exact path="/#education" element={<AboutMe />} /> */}
        </Route>
      </ReactRoute>
    </>
  );
}

export default App;
