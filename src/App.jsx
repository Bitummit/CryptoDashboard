import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Wallet from "./pages/wallet/Wallet";
import List from "./pages/list/List";
import New from "./pages/add/New";
import { userInputs } from "./pages/add/formSource";
import "./style/dark.scss";
import "./style/light.scss";
import { ThemeModeContext } from "./context/themeModeContext";
import { useContext } from "react";
import "./app.scss";
function App() {
  const { mode } = useContext(ThemeModeContext);
  if (mode == "dark") {
    document.getElementById("root").classList = ["root dark"];
  } else {
    document.getElementById("root").classList = ["root light"];
  }

  return (
    <div className={mode === "dark" ? "app dark" : "app"}>
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
