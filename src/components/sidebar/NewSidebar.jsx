import { Button, Drawer, Sidebar } from "flowbite-react";
import { useState } from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeModeContext.jsx";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

export default function NewSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { switchTheme } = useContext(ThemeContext);

  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <FormatListBulletedIcon
        className="scale-125 ml-10 cursor-pointer"
        onClick={() => setIsOpen(true)}
      />

      <Drawer open={isOpen} onClose={handleClose} className="p-0 m-0">
        <div className="myHeader flex justify-between p-4">
          <h5 className="text-3xl ml-8 text-shiwa">SHIWA</h5>
          <CloseOutlinedIcon
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <Drawer.Items className="mt-8">
          <Sidebar className="[&>div]:bg-transparent [&>div]:p-0 w-full ml-5">
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item>
                      <Link to="/" style={{ textDecoration: "none" }}>
                        <div className="flex items-center p-1 ">
                          <DashboardIcon className="scale-125 text-shiwa" />
                          <span className="text-2xl ml-2">Dashboard</span>
                        </div>
                      </Link>
                    </Sidebar.Item>
                    <Sidebar.Item>
                      <Link to="/users" style={{ textDecoration: "none" }}>
                        <div className="flex items-center p-1">
                          <GroupIcon className="scale-125 text-shiwa" />
                          <span className="text-2xl ml-2">Users</span>
                        </div>
                      </Link>
                    </Sidebar.Item>
                    <Sidebar.Item>
                      <Link to="/wallet" style={{ textDecoration: "none" }}>
                        <div className="flex items-center p-1">
                          <AccountBalanceWalletIcon className="scale-125 text-shiwa" />
                          <span className="text-2xl ml-2">Wallet</span>
                        </div>
                      </Link>
                    </Sidebar.Item>
                    <Sidebar.Item>
                      <div className="flex items-center p-1">
                        <SettingsIcon className="scale-125 text-shiwa" />
                        <span className="text-2xl ml-2">Settings</span>
                      </div>
                    </Sidebar.Item>
                    <Sidebar.Item>
                      <div className="flex items-center p-1">
                        <AccountCircleIcon className="scale-125 text-shiwa" />
                        <span className="text-2xl ml-2">Profile</span>
                      </div>
                    </Sidebar.Item>
                    <Sidebar.Item>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      <div className="flex items-center p-1">
                        <LogoutIcon className="scale-125 text-shiwa" />
                        <span className="text-2xl ml-2">Logout</span>
                      </div>
                      </Link>
                    </Sidebar.Item>
                    <div className="absolute left-0 bottom-0 w-full flex items-center justify-center pb-8">
                      <div
                        className="w-10 h-10 border-2 bg-white mr-3 rounded-lg border-shiwa cursor-pointer"
                        onClick={() => switchTheme("light")}
                      ></div>
                      <div
                        className="w-10 h-10 border-2 bg-gray-900 rounded-lg border-shiwa cursor-pointer"
                        onClick={() => switchTheme("dark")}
                      ></div>
                    </div>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </div>
  );
}
