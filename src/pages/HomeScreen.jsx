import Inicio from "../components/Inicio/Inicio";
import Nosotros from "../components/Nosotros/Nosotros";
import Servicio from "../components/servicios/Servicio";
import Beneficios from "../components/beneficios/Beneficios";

export default function HomeScreen() {
  return (
    <>
        <Inicio></Inicio>
        <Servicio></Servicio>
        <Nosotros></Nosotros>
        <Beneficios></Beneficios>
    </>
  )
}
