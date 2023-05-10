import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home'
import Services from './Component/Services/Services';
import Manage from "./Component/Manage/Manage";
import Features from "./Component/Features/Features";
import Pricing from "./Component/Pricing/Pricing";
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer';
import React, { useState } from "react";
import i18n from "i18next";
// const Home = await import("./Home.js");

function App() {
  const [showSectUp, setShowSectUp] = useState(false);
  const [language, setLanguage] = React.useState("en"); // 'en' , 'ar' 
  const [direction, setDirection] = React.useState("ltr"); 

  function handleScroll() {
    // console.log(window.scrollY);

    if (window.scrollY >= 150) {
      setShowSectUp(true);
    } else {
      setShowSectUp(false);
    }
  }

  window.addEventListener("scroll", handleScroll);

  function handleSectUpClick() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

    // const handleLanguageChange = () => {
    //   if (language === "en") {
    //     setLanguage("ar");
    //     setDirection("rtl");
    //   } else {
    //     setLanguage("en");
    //     setDirection("ltr");
    //   }
    // };
  const handleLanguageChange = () => {
    if (language === "en") {
      i18n.changeLanguage("ar");
      setLanguage("ar");
      setDirection("rtl");
      // console.log("y")
    } else {
      i18n.changeLanguage("en");
      setLanguage("en");
      setDirection("ltr");
            // console.log("n");

    }
  };
  return (
    <>
      <Navbar
        // onLanguageChange={handleLanguageChange}
        lang={language}
        dir={direction}
      />
      <button
        className="btnChangeLang   rounded-1 "
        onClick={handleLanguageChange}
      >
        {language === "en" ? "العربية " : "english"}
      </button>

      <Home lang={language} dir={direction} />
      <div>
        {/* up icon */}
        {showSectUp && (
          <button className=" scrollUp" onClick={handleSectUpClick}>
            <i className="fas fa-chevron-up"></i>
          </button>
        )}
      </div>
      <Services lang={language} dir={direction} />
      <Manage lang={language} dir={direction} />
      <Features lang={language} dir={direction} />
      <Pricing lang={language} dir={direction} />
      <Contact lang={language} dir={direction} />
      <Footer lang={language} dir={direction} />
    </>
  );
}

export default App;
