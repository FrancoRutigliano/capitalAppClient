import { HashRouter, Route, Routes, } from "react-router-dom"
import { Layout } from "../pages/Layout"
import { Home } from "../pages/Home"

export const RoutesOutlet = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>

            <Route index element={<Home />} />

          </Route>
        </Routes>
      </HashRouter>


    </div>
  )
}
