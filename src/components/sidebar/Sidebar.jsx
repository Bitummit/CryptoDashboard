import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ThemeModeContext } from "../../context/themeModeContext.jsx";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import btcImage from "../../assets/btc.png";
import { CollapseContext } from "../../context/collapseContext.jsx";

export default function Sidebar() {
  const { dispatch } = useContext(ThemeModeContext);
  const { collapse, setCollapse } = useContext(CollapseContext);

  function showText() {
    let elements = [...document.getElementsByClassName("hiddenText")];

    elements.forEach((element) => {
      element.style.display = "flex";
      setTimeout(() => {
        element.style.opacity = 1;
      }, 100);
    });
  }

  useEffect(() => {
    let sidebar = document.getElementsByClassName("sidebar")[0];
    let elements = [...document.getElementsByClassName("hiddenText")];
    console.log(collapse);
    if (!collapse) {
      sidebar.style.flex = 0.3;
      elements.forEach((element) => {
        element.style.display = "none";
        element.style.opacity = 0;
      });
    } else {
      sidebar.style.flex = 1.1;
      setTimeout(showText, 200);
    }
  }, [collapse]);

  return (
    <div className={`sidebar ${collapse ? "collapsed" : ""}`}>
      <div className="top">
        <span className="logo hiddenText">
          <img src={btcImage} />
          SHIWA
        </span>
        <button
          onClick={() => {
            setCollapse(!collapse);
          }}
        >
          {collapse ? (
            <ArrowBackIcon className="icon back" />
          ) : (
            <DehazeIcon className="icon open" />
          )}
        </button>
      </div>
      <hr />
      <div className="center">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <div className="iconWarpper">
                <DashboardIcon className="icon" />
                <span className="hiddenText">Dashboard</span>
              </div>
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <div className="iconWarpper">
                <GroupIcon className="icon" />
                <span className="hiddenText">Users</span>
              </div>
            </li>
          </Link>
          <Link to="/wallet" style={{ textDecoration: "none" }}>
            <li>
              <div className="iconWarpper">
                <AccountBalanceWalletIcon className="icon" />
                <span className="hiddenText">Wallet</span>
              </div>
            </li>
          </Link>
          <li>
            <div className="iconWarpper">
              <SettingsIcon className="icon" />
              <span className="hiddenText">Settings</span>
            </div>
          </li>
          <li>
            <div className="iconWarpper">
              <AccountCircleIcon className="icon" />
              <span className="hiddenText">Profile</span>
            </div>
          </li>
          <li>
            <div className="iconWarpper">
              <LogoutIcon className="icon" />
              <span className="hiddenText">Logout</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
}
