import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Sidebar() {
  const { dispatch } = useContext(DarkModeContext);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo"></span>
        <button
          onClick={() => {
            setCollapsed(!collapsed);
          }}
        >
          {collapsed ? (
            <ArrowBackIcon className="icon" />
          ) : (
            <DehazeIcon className="icon " />
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
                <span>{collapsed ? "Dashboard" : ""}</span>
              </div>
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <div className="iconWarpper">
                <GroupIcon className="icon" />
                <span>{collapsed ? "Users" : ""}</span>
              </div>
            </li>
          </Link>
          <Link to="/wallet" style={{ textDecoration: "none" }}>
            <li>
              <div className="iconWarpper">
                <AccountBalanceWalletIcon className="icon" />
                <span>{collapsed ? "Wallet" : ""}</span>
              </div>
            </li>
          </Link>
          <li>
            <div className="iconWarpper">
              <SettingsIcon className="icon" />
              <span>{collapsed ? "Settings" : ""}</span>
            </div>
          </li>
          <li>
            <div className="iconWarpper">
              <AccountCircleIcon className="icon" />
              <span>{collapsed ? "Profile" : ""}</span>
            </div>
          </li>
          <li>
            <div className="iconWarpper">
              <LogoutIcon className="icon" />
              <span>{collapsed ? "Logout" : ""}</span>
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
