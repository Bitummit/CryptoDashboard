import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Auth";
import Wallet from "./pages/wallet/Wallet";
import List from "./pages/list/List";
import New from "./pages/add/New";
import { userInputs } from "./pages/add/formSource";
import "./style/dark.scss";
import "./style/light.scss";
import { ThemeContext } from "./context/themeModeContext";
import { useContext } from "react";
import "./app.scss";
function App() {
  const { theme } = useContext(ThemeContext);

  if (theme === "dark") {
    document.getElementById("root").classList = ["root dark"];
    document.body.classList=["bg-gray-900"]
  } else {
    document.getElementById("root").classList = ["root light"];
    document.body.classList=["bg-white"]
  }
  

  return (
    <div className={theme === "dark" ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
