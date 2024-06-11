import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
// import { useContext } from "react";
// import { ThemeContext } from "../../context/themeModeContext";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  // const { switchTheme } = useContext(ThemeContext);
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
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <span className="searchIcon">
            <SearchIcon />
          </span>
        </div>
        <div className="items language">
          <div className="item" onClick={() => changeLanguage()}>
            <LanguageIcon className="icon" /> {t("language")}
          </div>
          <div className="item themeMode">
            <DarkModeIcon
              className="icon"
              // onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item notification">
            <NotificationsIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item list">
            <FormatListBulletedIcon className="icon" />
          </div>
          <div className="item profile">
            <img
              src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
