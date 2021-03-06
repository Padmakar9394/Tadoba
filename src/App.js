import React from "react";
import {Routes, Route} from "react-router-dom";

//Pages
import Home from "./Pages/HomePage/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import TouristHub from "./Pages/TouristHub";
import WorkWithUs from "./Pages/Workwithus";
import PageNotFound from "./Pages/Pagenotfound";
import Donation from "./Pages/Donation";
import Management from "./Pages/Management";
import OtherAdventures from "./Pages/otherAdventures";
import WildLifeSafari from "./Pages/wildlifeSafari";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Components
import Navbar from "./Components/navbar";

function App() {
  return (
    <>
      <div>
        <span className=""><Navbar /></span>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="shop" element={<Shop />}/>
          <Route path="tourist-hub" element={<TouristHub />}/>
          <Route path="work-with-us" element={<WorkWithUs />}/>
          <Route path="donation" element={<Donation />}/>
          <Route path="management" element={<Management />}/>
          <Route path="wildlife-safaris" element={<WildLifeSafari />}/>
          <Route path="other-adventures" element={<OtherAdventures />}/>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
