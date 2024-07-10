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
import { useContext, useEffect, useState } from "react";
import "./app.scss";

// https://stackoverflow.com/questions/70388520/why-are-async-api-calls-necessary-with-react-query
// https://codesandbox.io/s/fragrant-glade-8huj6?file=/src/index.js:501-509
// https://flowbite.com/docs/components/skeleton/
// https://blog.logrocket.com/async-rendering-react-suspense-hooks-other-methods/
// fix bottom body


function App() {
  const { theme } = useContext(ThemeContext);

  // document.body.classList=["bg-colorBgPrimary"] - не работает

  if (theme === 'dark') {
    document.body.classList=["bg-gray-900"]

  } else if (theme === 'shiwa'){
    document.body.classList=["bg-shiwa-300"]
  } else {
    document.body.classList=["bg-white"]
  } 

  return (
    <div className={`app theme-${theme}`}>
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
