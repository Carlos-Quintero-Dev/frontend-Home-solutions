import HomeScreen from "./pages/HomeScreen";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import Register from "./pages/RegisterScreen";
import NavBar from "./components/NavBar/NavBar";
import NormalDasboard from "./normalDasboard";


export default function App() {
 

  return (
    <>

    <NavBar></NavBar>

    <Routes>
        <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="/login" element={<LoginScreen></LoginScreen>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/normalDashboard/*" element={<NormalDasboard></NormalDasboard>}></Route>
        <Route path="/*" element={<Navigate to={'/'}></Navigate>}></Route>
    </Routes>      
        

    </>
  )
}
