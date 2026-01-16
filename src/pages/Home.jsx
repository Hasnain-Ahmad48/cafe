import React, {useEffect} from "react";
import HeroSection from "../components/HeroSection";
import MenuSection from "../components/MenuSection";
import DealsSection from "../components/DealsSection";
import {useLocation} from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({behavior: "smooth"});
      }
    }
  }, [location]);
  return (
    <>
      <HeroSection />
      <section id="menu-section">
        <MenuSection />
      </section>
      <section id="deals-section">
        <DealsSection />
      </section>
    </>
  );
};

export default Home;
