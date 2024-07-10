import NewSidebar from "../sidebar/NewSidebar";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";

export default function LanguageButton() {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ru");
      // localStorage.setItem("lng", "ru")
    } else {
      i18n.changeLanguage("en");
      // localStorage.setItem("lng", "en")
    }
  };

  return (
    <div className="fixed bottom-10 left-0 border border-colorBorder rounded-r-lg bg-colorBgSecondary z-40 md:w-20">
      <div className="p-3 md:ml-3">
        <div
          className="relative flex items-center text-colorTextGraySecond hover:text-colorTextPrimary cursor-pointer text-base"
          onClick={() => changeLanguage()}
        >
          <LanguageIcon className="scale-125 mr-1" />
          <span>{t("language")}</span>
        </div>
      </div>
    </div>
  );
}
