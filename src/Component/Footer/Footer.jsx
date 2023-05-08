import React from "react";
import styleFooter from "./Footer.module.css";
import imgFooter from '../../img/oro2.png'
import { useTranslation } from "react-i18next";

export default function Footer({ dir }) {
  const { t } = useTranslation("footer");
  
  return (
    <>
      <footer
        className={`${styleFooter.secFooter} container py-5 `}
        style={{ direction: dir }}
      >
        <div className="container py-5 ">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-3 col-md-6 col-sm-12  col-mb-12 mb-5 mb-lg-0 mb-xl-0">
                <div className="widget">
                  <div className={`${styleFooter.textwid}`}>
                    <img className="w-75 mb-4" src={imgFooter} alt="" />
                    <p>{t("Pfooter")}</p>
                  </div>
                  <div className={`${styleFooter.socialIcon}`}>
                    <a className={`${styleFooter.facebook}`} href="#1">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <span className=" px-2"></span>
                    <a className={`${styleFooter.twitter} `} href="#1">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <span className=" px-2"></span>

                    <a className={`${styleFooter.instagram} `} href="#1">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <span className=" px-2"></span>

                    <a className={`${styleFooter.linkedin} `} href="#1">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <h3 className={`${styleFooter.footerTitel} `}>
                  {t("Products")}
                </h3>
                <ul className={`${styleFooter.footerLink}`}>
                  <li>
                    <a href="#1">{t("Tracking")}</a>
                  </li>
                  <li>
                    <a href="#1">{t("Application")}</a>
                  </li>
                  <li>
                    <a href="#1">{t("Resource")}</a>
                  </li>
                  <li>
                    <a href="#1">{t("Enterprise")}</a>
                  </li>
                  <li>
                    <a href="#1">{t("Employee")}</a>
                  </li>
                </ul>
              </div>
              {/* 2 */}
              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 ">
                <h3 className={`${styleFooter.footerTitel} ms-4`}>
                  {t("Resources")}
                </h3>
                <ul className={`${styleFooter.footerLink}`}>
                  <li>
                    <a href="#1">{t("Payment")}</a>
                  </li>
                  <li>
                    <a href="#1">{t("Fee")}</a>
                  </li>
                  <li>
                    <a href="#1">{t("Getting")}</a>
                  </li>
                  <li>
                    <a href="#1">{t("Identity")}</a>
                  </li>
                  <li>
                    <a href="#1">{t("Card")}</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                <h3 className={`${styleFooter.footerTitel} ms-4`}>
                  {t("Contact")}
                </h3>
                <ul className={`${styleFooter.footerLink}`}>
                  <li>
                    <a className={`${styleFooter.icon}`} href="#1">
                      <i className="fa-solid fa-location-dot"></i>
                      {t("Madison")} {t("cairo")}
                    </a>

                    <div className=" clearfix"></div>
                  </li>
                  <li className="my-3">
                    <a className={`${styleFooter.icon} `} href="#1">
                      <i className="fa-solid fa-tty"></i>
                      {t("phone")}
                    </a>
                    <div className=" clearfix"></div>
                  </li>
                  <li className=" ">
                    <a className={`${styleFooter.icon}`} href="#1">
                      <i className="fa-solid fa-envelope"></i>
                      {t("email")}
                    </a>
                    <div className=" clearfix"></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="endSec">
          <div className="container">
            <div className="row">
              <div className="col-md-12 ">
                <div className={`${styleFooter.line}`}>
                  <p className=" text-center">
                    {t("Designed")}
                    <a
                      className={`${styleFooter.UIdeck} ms-1`}
                      rel="nofollow"
                      href="https://uideck.com"
                    >
                      EG-Coder
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
