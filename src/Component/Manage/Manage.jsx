import React from 'react'
import styleManage from './Manage.module.css';
import imgTeam from '../../img/Vector Smart Object.png';
import { useTranslation } from "react-i18next";

export default function Team({ lang, dir }) {
        const { t } = useTranslation("manage");

  return (
    <>
     <section className='d-flex justify-content-center align-items-center'>
     <div
        id={lang === "en" ? "manage" : "الإدارة"}
        className={`${styleManage.sec} container  " `}
        style={{
          direction: dir,
          // fontFamily:
          //   lang === "en" ? "Assistant, sans-serif" : "Cairo, sans-serif",
        }}
      >
        <div className="row py-5   " >
          <div className=" col-lg-6 col-md-12 col-xs-12 ">
            <div>
              <p className={`${styleManage.Manage}`}>{t("Manage")}</p>
              <h2 className={`${styleManage.sectionTitle}`}>
                {t("Detailed")}
                <br /> {t("Company")}
              </h2>
            </div>
            <div>
              {/* {lang === "en" ? ( */}
              <p className={`${styleManage.parag} `}>{t("Praesent")}</p>

              <button href="#" className={`${styleManage.btnRead}`}>
                {t("Read")}
              </button>
            </div>
          </div>

          <div className=" col-lg-6 col-md-12 col-xs-12 ">
            <img className="w-100" src={imgTeam} alt="" />
          </div>
        </div>
      </div>















     </section>
    </>
  );
}
