import { Routes, Route, Navigate } from "react-router-dom"
import SideBar from "./components/sideBar/SideBar"
import CasaScreen from "./pages/casaScreen"
import ApartamentoScreen from "./pages/apartamentoScreen"



export default function NormalDasboard() {
  return (
    <>
    <SideBar></SideBar>
    <Routes>
      <Route path="/casas" element={<CasaScreen></CasaScreen>}></Route>
      <Route path="/apartamentos" element={<ApartamentoScreen></ApartamentoScreen>}></Route>
    </Routes>
    </>
  )
}
