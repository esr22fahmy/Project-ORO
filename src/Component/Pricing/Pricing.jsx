import React from "react";
import stylePricing from './Pricing.module.css';
import imgCard1 from '../../img/Card_1-768x567.png'
import imgCard2 from "../../img/Card_2-768x566.png";
import imgCard3 from "../../img/Card_3-768x567.png";
import { useTranslation } from "react-i18next";

export default function Testimonial({ lang, dir }) {
     const { t } = useTranslation("pricing");

  return (
    <>
      <section
        id={lang === "en" ? "pricing" : "التسعير"}
        className="section-padding py-5   "
        style={{ direction: dir }}
      >
        <div className="container ">
          <div className="section-header text-center">
            <h2 className={`${stylePricing.sectionTitle}`}>{t("Pricing")}</h2>
            <div className={`${stylePricing.line}`}></div>
          </div>
          <div className={`${stylePricing.spaceX}   `}>
            <div className=" row   ">
              <div className=" col-12 col-sm-12  col-lg-4 col-md-6 col-xl-4  text-center">
                <div className={`${stylePricing.table}`}>
                  <img className="w-100" src={imgCard1} alt="" />
                  <div>
                    <h3 className={`${stylePricing.title}`}>{t("Pro")}</h3>
                  </div>
                  <ul className={`${stylePricing.description}`}>
                    <li>{t("ProUser")}</li>
                    <li>{t("ProStorage")}</li>
                    <li>{t("ProEmail")}</li>
                    <li>{t("ProLifetime")}</li>
                  </ul>
                  <button className={stylePricing.btn}>{t("Buy")}</button>
                </div>
              </div>
              {/* 2 */}
              <div className="col-12 col-sm-12 col-lg-4 col-md-6 col-xl-4  text-center  ">
                <div className={`${stylePricing.table}`}>
                  <img className="w-100" src={imgCard2} alt="" />

                  <div>
                    <h3 className={`${stylePricing.title}`}>{t("PLUS")}</h3>
                  </div>
                  <ul className={`${stylePricing.description}`}>
                    <li>{t("PLUSuser")}</li>
                    <li>{t("PLUSstorage")}</li>
                    <li>{t("PLUSPriority")}</li>
                    <li>{t("PLUSLifetime")}</li>
                  </ul>
                  <button className={stylePricing.btn}>{t("Buy")}</button>
                </div>
              </div>
              {/* 3 */}
              <div className="col-12 col-sm-12 col-lg-4 col-xl-4  col-md-6  text-center ">
                <div className={`${stylePricing.table}`}>
                  <img className="w-100" src={imgCard3} alt="" />

                  <div>
                    <h3 className={`${stylePricing.title}`}>{t("PLUS2")}</h3>
                  </div>
                  <ul className={`${stylePricing.description}`}>
                    <li>{t("PLUSuser2")}</li>
                    <li>{t("PLUSstorage2")}</li>
                    <li>{t("PLUSPriority2")}</li>
                    <li>{t("PLUSLifetime2")}</li>
                  </ul>
                  <button className={stylePricing.btn}>{t("Buy")}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
