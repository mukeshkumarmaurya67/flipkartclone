import "./App.css";
import Banner1 from "./Components/Home Components/Banner1";
import BestOfBeauty from "./Components/Home Components/BestOfBeauty";
import BestOfElectronics from "./Components/Home Components/BestOfElectronics";
import BestOfKitchen from "./Components/Home Components/BestOfKitchen";
import Category from "./Components/Home Components/Category";
import Footer from "./Components/Home Components/Footer";
import Header from "./Components/Home Components/Header";
import MobileFooterMenu from "./Components/Home Components/MobileFooterMenu";
import SpecialOfFashion from "./Components/Home Components/SpecialOfFashion";
import SpecialOfSale from "./Components/Home Components/SpecialOfSale";
import SpecialOfTravel from "./Components/Home Components/SpecialOfTravel";
import Chatboat from "./Components/Home Components/Chatboat";
import { useContext } from "react";
import { globalContext } from "./App";

function Home({dkmode}) {





  return (
    <>
      <div className="wrapper">
        <Header dkmode={dkmode} />
        <div className="inner-wrapper">
          <Category />
          <Banner1 />
          <BestOfElectronics />
          <SpecialOfSale />
          <BestOfKitchen />
          <SpecialOfFashion />
          <BestOfBeauty />
          <SpecialOfTravel />
        </div>
        <Footer />
        <MobileFooterMenu />

      </div>
      {/* <p>Hi {name.valid}</p> */}
    </>
  );
}

export default Home;
