import "../styles/NavbarMobileStyle.css"
import "../styles/Global.css"
import mais from "../assets/mais.png"
import perfil from "../assets/perfil.png"
import {useNavigate} from "react-router-dom"
import type { LatLngTuple } from "leaflet"

type NavbarMobileProps = {
    coordinates: LatLngTuple | null;
};

const NavbarMobile = ({coordinates}:NavbarMobileProps) => {
    const navigate = useNavigate();
    return(
        <div className='navbar-mobile'>
            <button className="bt-navbar-mobile" onClick={() => { 
              if(coordinates != null)
                {
                  navigate("/criarpoint", {state:
                    {
                      lat: coordinates[0],
                      lon: coordinates[1]
                    }})
                }else{
                    navigate("/criarpoint")                    
                }}}><img src={mais} alt="mais" width={25} />Criar Point</button>
            <button className="bt-navbar-mobile"><img src={perfil} alt="perfil" width={25} />Perfil</button>
        </div>
    )
}

export default NavbarMobile