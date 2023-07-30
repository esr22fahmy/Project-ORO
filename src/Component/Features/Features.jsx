import React from "react";
import img1 from "../../img/1.png";
import img2 from "../../img/2.png";
import img3 from "../../img/3.png";
import img4 from "../../img/4.png";
import img5 from "../../img/5.png";
import img6 from "../../img/6.png";
import styleFeatures from "./Features.module.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";

defineElement(lottie.loadAnimation);

export default function Pricing({ lang, dir }) {
  const { t } = useTranslation("features");

  let [image, setImage] = useState(img1);

  return (
    <>
      <section
        id={lang === "en" ? "features" : "المميزات"}
        className={`${styleFeatures.bground} py-5 `}
        style={{
          direction: dir,
          // fontFamily:
          //   lang === "en" ? "Assistant, sans-serif" : "Cairo, sans-serif",
        }}
      >
        <div className="container">
          <div className="section-header text-center">
            <h2 className={`${styleFeatures.sectionTitle}`}>{t("Awesome")}</h2>
            <div className={`${styleFeatures.lineFeat}`}></div>
          </div>
          <div className={`${styleFeatures.spaceX} row align-items-center`}>
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              {/*content left  */}
              <div className="content-left">
                <div
                  id="box-item-1"
                  className={`${styleFeatures.boxItem}`}
                  onClick={() => setImage(img1)}
                >
                  <span className={`${styleFeatures.icon}`}>
                    <lord-icon
                      src="https://cdn.lordicon.com/nkmsrxys.json"
                      trigger="hover"
                      colors="primary:#A28547,secondary:#A28547"
                      style={{ width: "43px", height: "43px" }}
                    ></lord-icon>
                    <div className=" clearfix"></div>
                  </span>
                  <div className="text">
                    <h4
                      className={`${styleFeatures.word} ms-md-5 ms-sm-5 ms-lg-5 ms-xl-5`}
                    >
                      {t("Bootstrap")}
                    </h4>
                    <p className={`${styleFeatures.paragraph}`}>
                      {t("paragraphBoot")}
                    </p>
                  </div>
                </div>
                {/* 2 */}
                <div
                  className={`${styleFeatures.boxItem}`}
                  onClick={() => setImage(img2)}
                >
                  <span className={`${styleFeatures.icon}`}>
                    <lord-icon
                      src="https://cdn.lordicon.com/qhgmphtg.json"
                      trigger="hover"
                      colors="primary:#A28547,secondary:#A28547"
                      style={{ width: "40px", height: "40px" }}
                    ></lord-icon>
                    <div className=" clearfix"></div>
                  </span>
                  <div className="text">
                    <h4
                      className={`${styleFeatures.word}ms-md-5 ms-sm-5 ms-lg-5 ms-xl-5`}
                    >
                      {t("Fully")}
                    </h4>
                    <p className={`${styleFeatures.paragraph}`}>
                      {t("paragraphFully")}
                    </p>
                  </div>
                </div>
                {/* 3 */}
                <div
                  className={`${styleFeatures.boxItem}`}
                  onClick={() => setImage(img3)}
                >
                  <span className={`${styleFeatures.icon} `}>
                    <lord-icon
                      src="https://cdn.lordicon.com/sbiheqdr.json"
                      trigger="hover"
                      colors="primary:#A28547,secondary:#A28547"
                      style={{ width: "50px", height: "50px" }}
                    ></lord-icon>

                    <div className=" clearfix"></div>
                  </span>
                  <div className="text">
                    <h4
                      className={`${styleFeatures.word}ms-md-5 ms-sm-5 ms-lg-5 ms-xl-5`}
                    >
                      {t("HTML5")}
                    </h4>
                    <p className={`${styleFeatures.paragraph}`}>
                      {t("paragraphHTML5")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* img */}
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 ">
              <div className="d-flex  justify-content-center">
                <img id="myImage" alt="mobile" className="" src={image} />
              </div>
            </div>
            {/* ===================================== */}
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              {/* content-right */}
              <div className="content-left">
                {/* 1 */}
                <div
                  className={`${styleFeatures.boxItem}`}
                  onClick={() => setImage(img4)}
                >
                  <span className={`${styleFeatures.icon2}`}>
                    <lord-icon
                      src="https://cdn.lordicon.com/rgyftmhc.json"
                      trigger="morph"
                      colors="primary:#A28547,secondary:#A28547"
                      style={{ width: "50px", height: "50px" }}
                    ></lord-icon>
                    <div className=" clearfix"></div>
                  </span>
                  <div className="text ">
                    <div>
                      <h4
                        className={`${styleFeatures.word}ms-md-5 ms-sm-5 ms-lg-5 ms-xl-5`}
                      >
                        {t("Modern")}
                      </h4>
                      <p className={`${styleFeatures.paragraph}`}>
                        {t("paragraphModern")}
                      </p>
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div
                  className={`${styleFeatures.boxItem}`}
                  onClick={() => setImage(img5)}
                >
                  <span className={`${styleFeatures.icon2}`}>
                    <lord-icon
                      src="https://cdn.lordicon.com/cmrzxpzz.json"
                      trigger="morph"
                      colors="primary:#A28547,secondary:#A28547"
                      style={{ width: "50px", height: "50px" }}
                    ></lord-icon>

                    <div className=" clearfix"></div>
                  </span>
                  <div className="text ">
                    <div>
                      <h4
                        className={`${styleFeatures.word}ms-md-5 ms-sm-5 ms-lg-5 ms-xl-5`}
                      >
                        {t("Multi")}
                      </h4>
                      <p className={`${styleFeatures.paragraph}`}>
                        {t("paragraphMulti")}
                      </p>
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <div
                  className={`${styleFeatures.boxItem}`}
                  onClick={() => setImage(img6)}
                >
                  <span className={`${styleFeatures.icon2}`}>
                    <lord-icon
                      src="https://cdn.lordicon.com/fhtaantg.json"
                      trigger="hover"
                      colors="primary:#A28547,secondary:#A28547"
                      style={{ width: "50px", height: "50px" }}
                    ></lord-icon>
                    <div className=" clearfix"></div>
                  </span>
                  <div className="text ">
                    <div>
                      <h4
                        className={`${styleFeatures.word}ms-md-5 ms-sm-5 ms-lg-5 ms-xl-5`}
                      >
                        {t("Working")}
                      </h4>
                      <p className={`${styleFeatures.paragraph}`}>
                        {t("paragraphWorking")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
