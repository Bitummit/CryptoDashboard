import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo"> AdminPanel</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          
          <li>
            < DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          <li>
            < GroupIcon className="icon"/>
            <span>Users</span>
          </li>
          <li>
            <AccountBalanceWalletIcon className="icon"/>
            <span>Wallet</span>
          </li>
          <li>
            < SettingsIcon className="icon"/>
            <span>Settings</span>
          </li>
          <li>
            < AccountCircleIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
}
