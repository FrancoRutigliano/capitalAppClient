import { HashRouter, Route, Routes, } from "react-router-dom"
import { Layout } from "../pages/Layout"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"

export const RoutesOutlet = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>

            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />

          </Route>
        </Routes>
      </HashRouter>


    </div>
  )
}
