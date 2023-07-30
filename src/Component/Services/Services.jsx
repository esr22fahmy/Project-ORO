/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styleServices from "./Services.module.css";
import { useTranslation } from "react-i18next";


export default function Services({ lang, dir }) {
      const { t } = useTranslation("services");

  return (
    <>
      <section
        id={lang === "en" ? "services" : "الخدمات"}
        className={`${styleServices.bground} py-5 `}
        style={{
          direction: dir,
          // fontFamily:
          //   lang === "en" ? "Assistant, sans-serif" : "Cairo, sans-serif",
        }}
      >
        <div className=" container  ">
          <div className="text-center">
            <h2 className={`${styleServices.our} `}>{t("Services")}</h2>

            <div className={`${styleServices.lineOur}`}></div>
          </div>

          <div className={`${styleServices.spaceX} row`}>
            <div className="col-md-6 col-lg-4 col-xs-12">
              <div className={`${styleServices.servicesItem}`}>
                <div className={`${styleServices.icon} `}>
                  <i className={`${styleServices.gear} fa-solid fa-gear`}></i>
                </div>
                <div className="services-content">
                  <h3 className={`${styleServices.partSentence}`}>
                    <a className={`${styleServices.easy}`}>{t("Used")}</a>
                  </h3>
                  <p className={`${styleServices.maximus}`}>
                    {t("paragraphSer1")}
                  </p>
                </div>
              </div>
            </div>

            {/* 2 */}

            <div className="col-md-6 col-lg-4 col-xs-12">
              <div className={`${styleServices.servicesItem}`}>
                <div className={`${styleServices.icon} `}>
                  <i
                    className={`${styleServices.gear} fa-solid fa-arrow-trend-up`}
                  ></i>
                </div>
                <div className="services-content">
                  <h3 className={`${styleServices.partSentence}`}>
                    <a className={`${styleServices.easy}`}>
                      {t("AWESOME")}

                      {/* {lang === "en" ? " AWESOME DESIGN " : "تصميم رائع"} */}
                    </a>
                  </h3>
                  <p className={`${styleServices.maximus}`}>
                    {t("paragraphSer2")}
                  </p>
                </div>
              </div>
            </div>

            {/* 3 */}

            <div className="col-md-6 col-lg-4 col-xs-12">
              <div className={`${styleServices.servicesItem}`}>
                <div className={`${styleServices.icon} `}>
                  <i
                    className={`${styleServices.gear} fa-solid fa-user-group`}
                  ></i>
                </div>
                <div className="services-content">
                  <h3 className={`${styleServices.partSentence}`}>
                    <a className={`${styleServices.easy}`}>
                      {t("CUSTOMIZE")}

                      {/* {lang === "en" ? "  EASY TO CUSTOMIZE " : " سهل التخصيص"} */}
                    </a>
                  </h3>
                  <p className={`${styleServices.maximus}`}>
                    {t("paragraphSer3")}
                  </p>
                </div>
              </div>
            </div>

            {/* 4 */}

            <div className="col-md-6 col-lg-4 col-xs-12">
              <div className={`${styleServices.servicesItem}`}>
                <div className={`${styleServices.icon} `}>
                  <i
                    className={`${styleServices.gear} fa-solid fa-layer-group`}
                  ></i>
                </div>
                <div className="services-content">
                  <h3 className={`${styleServices.partSentence}`}>
                    <a className={`${styleServices.easy}`}>{t("UI")}</a>
                  </h3>
                  <p className={`${styleServices.maximus}`}>
                    {t("paragraphSer4")}
                  </p>
                </div>
              </div>
            </div>

            {/* 5 */}

            <div className="col-md-6 col-lg-4 col-xs-12">
              <div className={`${styleServices.servicesItem}`}>
                <div className={`${styleServices.icon} `}>
                  <i
                    className={`${styleServices.gear} fa-solid fa-mobile-screen-button`}
                  ></i>
                </div>
                <div className="services-content">
                  <h3 className={`${styleServices.partSentence}`}>
                    <a className={`${styleServices.easy}`}>
                      {/* {lang === "en" ? " APP DEVELOPMENT" : " تطوير التطبيقات "} */}
                      {t("AppDEVELOPMENT")}
                    </a>
                  </h3>
                  <p className={`${styleServices.maximus}`}>
                    {t("paragraphSer5")}

                    {/* {lang === "en"
                      ? " Ut maximus enim dolor. Aenean auctor risus eget tincidunt lobortis. Donec tincidunt bibendum gravida."
                      : "مشروعنا هو برنامج ولاء يمنح الجميع خصومات وخدمات يحتاجونها بشكل يومي يضم مجموعة واسعة "}
                   */}
                  </p>
                </div>
              </div>
            </div>

            {/* 6 */}

            <div className="col-md-6 col-lg-4 col-xs-12">
              <div className={`${styleServices.servicesItem}`}>
                <div className={`${styleServices.icon} `}>
                  <i className={`${styleServices.gear} fa-solid fa-rocket`}></i>
                </div>
                <div className="services-content">
                  <h3 className={`${styleServices.partSentence}`}>
                    <a className={`${styleServices.easy}`}>
                      {t("FRIENDLY")}

                      {/* {lang === "en"
                        ? " USER FRIENDLY INTERFACE"
                        : " واجهة سهلة الاستخدام"} */}
                    </a>
                  </h3>
                  <p className={`${styleServices.maximus}`}>
                    {t("paragraphSer5")}

                    {/* {lang === "en"
                      ? " Ut maximus enim dolor. Aenean auctor risus eget tincidunt lobortis. Donec tincidunt bibendum gravida."
                      : "مشروعنا هو برنامج ولاء يمنح الجميع خصومات وخدمات يحتاجونها بشكل يومي يضم مجموعة واسعة "}
 */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
