/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styleContent from "./Contact.module.css";
import { useTranslation } from "react-i18next";

export default function Contact({ lang, dir }) {

       const { t } = useTranslation("contact");
  return (
    <>
      <section
        id={lang === "en" ? "contact" : "اتصل بنا"}
        className={`${styleContent.sec} py-5`}
        style={{ direction: dir }}
      >
        <div className="container">
          <div className="section-header text-center">
            <h2 className={`${styleContent.sectionTitle}`}>{t("Countact")}</h2>
            <div className={`${styleContent.line}`}></div>
          </div>
          <div className={`${styleContent.spaceX} row`}>
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="contact-block">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className={`${styleContent.formGroup}`}>
                        <input
                          type="text"
                          className={`${styleContent.formControl} form-control `}
                          id="name"
                          name="name"
                          placeholder={t("Name")}
                          required=""
                          data-error="Please enter your name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={`${styleContent.formGroup}`}>
                        <input
                          type="text"
                          placeholder={t("Email")}
                          id="email"
                          className={`${styleContent.formControl} form-control `}
                          name="email"
                          required=""
                          data-error="Please enter your email"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className={`${styleContent.formGroup}`}>
                        <input
                          type="text"
                          placeholder={t("Subject")}
                          id="msg_subject"
                          className={`${styleContent.formControl} form-control `}
                          required=""
                          data-error="Please enter your subject"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className={`${styleContent.formGroup}`}>
                        <textarea
                          className={`${styleContent.formControl} form-control `}
                          id="message"
                          placeholder={t("Message")}
                          rows="7"
                          data-error="Write your message"
                          required=""
                        ></textarea>
                      </div>
                      <div className="">
                        <button
                          className={`${styleContent.btn}  text-uppercase  `}
                          id="form-submit"
                          type="submit"
                        >
                          {t("Send")}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-xs-12">
              <div className="map w-100 h-100">
                <object data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34015.943594576835!2d-106.43242624069771!3d31.677719472407432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75d90e99d597b%3A0x6cd3eb9a9fcd23f1!2sCourtyard+by+Marriott+Ciudad+Juarez!5e0!3m2!1sen!2sbd!4v1533791187584"></object>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
