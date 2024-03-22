import Home from "./pages/home/Home"
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"
import Login from "./pages/login/Login"
import Wallet from "./pages/wallet/Wallet"
import List from "./pages/list/List"

function App() {

  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="users" element={<List />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
