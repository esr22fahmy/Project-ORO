import React from 'react'
import styleManage from './Manage.module.css';
import imgTeam from '../../img/Vector Smart Object.png';
import { useTranslation } from "react-i18next";

export default function Team({ lang, dir }) {
        const { t } = useTranslation("manage");

  return (
    <>
      <div
        id={lang === "en" ? "manage" : "الإدارة"}
        className={`${styleManage.sec} container  `}
        style={{ direction: dir }}
      >
        <div className="row py-5">
          <div className=" col-lg-6 col-md-12 col-xs-12 ">
            <div>
              <p className={`${styleManage.Manage}`}>
                {t("Manage")}

                {/* {lang === "en" ? "Manage Statistics" : "إدارة الإحصائيات"} */}
              </p>
              {/* {lang === "en" ? ( */}
              <h2 className={`${styleManage.sectionTitle}`}>
                {t("Detailed")}
                <br /> {t("Company")}
              </h2>
              {/* // ) : (
              //   <h2 className={`${styleManage.sectionTitle}`}>
              //     احصائيات مفصلة عن
              //     <br /> شركتك
              //   </h2>
              // )} */}
            </div>
            <div>
              {/* {lang === "en" ? ( */}
              <p className={`${styleManage.parag} `}>
                {t("Praesent")}
                {/* Praesent imperdiet, tellus et euismod euismod, risus lorem
                  euismod erat, at finibus neque odio quis metus. Donec
                  vulputate arcu quam. Morbi quis tincidunt ligula. Sed rutrum
                  tincidunt pretium. Mauris auctor, purus a pulvinar fermentum,
                  odio dui vehicula lorem, nec pharetra justo risus quis mi. Ut
                  ac ex sagittis, viverra nisl vel, rhoncus odio.
                </p>
              ) : (
                <p className={`${styleManage.parag} `}>
                  نحن نضمن أفضل تجربة تسوق مع مفهوم اقتصادي. هذا هو شعارنا الذي
                  جعلنا نأتي بفكرة بطاقة برنامج الولاء الخاصة بنا Oro .مشروعنا
                  هو برنامج ولاء يمنح الجميع خصومات وخدمات يحتاجونها بشكل يومي
                  يضم مجموعة واسعة من العلامات التجارية الرائدة في أسواق مختلفة
                  مثل الموضة والجمال ، والأغذية والمشروبات والتأمين على الحياة
                  والسفر والمساعدة على الطرق.نحن نقدم مزايا خصومات و قسائم
                  مجانية تصل إلى 50٪ و عرض خاص شهري . نحن نقدم جميع التسهيلات
                  المتعلقة بالسلامة لك ولجميع أفراد الأسرة .
                </p>

              )} */}
              </p>

              <button href="#" className={`${styleManage.btnRead}`}>
                {t("Read")}

                {/* {lang === "en" ? " Read More" : " اقرأ أكثر"} */}
              </button>
            </div>
          </div>

          <div className=" col-lg-6 col-md-12 col-xs-12 ">
            <img className="w-100" src={imgTeam} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
