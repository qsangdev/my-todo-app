import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    setActive(JSON.parse(localStorage.getItem("activeLang")));
  }, []);

  useEffect(() => {
    localStorage.setItem("activeLang", isActive);
  }, [isActive]);

  const { t, i18n } = useTranslation();

  const clickLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="footer-container">
      <h3>{t("Made by QS")} 🔥</h3>
      <div>
        <span>{t("Languages")} :</span>
        <span
          className={
            isActive ? "languague-picker" : "languague-picker selected"
          }
          onClick={() => {
            setActive(false);
            clickLanguage("vi");
          }}
        >
          🇻🇳
        </span>
        <span
          className={
            isActive ? "languague-picker selected" : "languague-picker"
          }
          onClick={() => {
            setActive(true);
            clickLanguage("us");
          }}
        >
          🇺🇸
        </span>
      </div>
    </div>
  );
};

export default Footer;
