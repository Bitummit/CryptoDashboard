import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

export default function Sidebar() {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo"> AdminPanel</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <div className="iconWarpper">
                <DashboardIcon className="icon" />
              </div>
              <p>Dashboard</p>
            </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <div className="iconWarpper">
                <GroupIcon className="icon" />
              </div>
              <p>Users</p>
            </li>
          </Link>
          <Link to="/wallet" style={{ textDecoration: "none" }}>
          <li>
            <div className="iconWarpper">
              <AccountBalanceWalletIcon className="icon" />
            </div>
            <p>Wallet</p>
          </li>
          </Link>
          <li>
            <div className="iconWarpper">
              <SettingsIcon className="icon" />
            </div>
            <p>Settings</p>
          </li>
          <li>
            <div className="iconWarpper">
              <AccountCircleIcon className="icon" />
            </div>
            <p>Profile</p>
          </li>
          <li>
            <div className="iconWarpper">
              <LogoutIcon className="icon" />
            </div>
            <p>Logout</p>
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
