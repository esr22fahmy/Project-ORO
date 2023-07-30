import React from 'react'
import styleHome from './Home.module.css'
import imgH from '../../img/homeIMG.png'
import { useTranslation } from "react-i18next";

export default function Home({ lang, dir }) {
const { t } = useTranslation("home");


  return (
    <>
      <section
        id={lang === "en" ? "home" : "الصفحة الرئيسية"}
        className={`${styleHome.sectionHome}`}
        style={{
          direction: dir,
          // fontFamily:
          //   lang === "en" ? "Assistant, sans-serif" : "Cairo, sans-serif",

        }}
      >
        <div className=" container  ">
          <div className=" row   ">
            <div className="col-lg-7 mt-5 ">
              <h1 className={`${styleHome.homeTite} mb-2`}>
                <span className={`${styleHome.AppColor}`}>{t("app")}</span>
                {t("Business")}
                <br></br>
                {t("Landing")}
              </h1>

              <p className={`${styleHome.colorLorem} w-100`}>{t("Lorem")}</p>
            </div>

            <div className=" col-lg-5  ">
              <div className="d-flex  justify-content-center">
                <img className="w-75" src={imgH} alt="" />
              </div>
              <div className={`${styleHome.line}`}></div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8 col-lg-6 mt-5 mt-lg-0 mt-xl-0">
              <button className={`${styleHome.btnDown} mb-3 mb-lg-0 mb-xl-0 `}>
                {t("Download")}
              </button>

              <span className="mx-2"></span>
              <button className={`${styleHome.btnLearn} `}>{t("Learn")}</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
