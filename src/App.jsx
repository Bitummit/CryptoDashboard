import Home from "./pages/home/Home"
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"
import Login from "./pages/login/Login"
import Wallet from "./pages/wallet/Wallet"
import List from "./pages/list/List"
import New from "./pages/add/New"
import { userInputs } from "./pages/add/formSource"
import "./style/dark.scss"

function App() {

  return (
    <div className="app dark">
      <BrowserRouter> 
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="users" >
              <Route index element={<List />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User"/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
