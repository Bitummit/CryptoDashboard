import Home from "./pages/home/Home"
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"
import Login from "./pages/login/Login"
import Wallet from "./pages/wallet/Wallet"
import List from "./pages/list/List"
import AddUser from "./pages/add/AddUser"

function App() {

  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="users" >
              <Route index element={<List />} />
              <Route path="new" element={<AddUser />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
