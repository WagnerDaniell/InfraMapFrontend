import "./NavbarMobileStyle.css"
import mais from "../../assets/mais.png"
import perfil from "../../assets/perfil.png"
import {useNavigate} from "react-router-dom"

const NavbarMobile = () => {
    const navigate = useNavigate();
    return(
        <div className='navbar-mobile'>
            <button className="bt-navbar-mobile" onClick={() => {navigate("/localpoint")}}><img src={mais} alt="mais" width={25} />Criar Point</button>
            <button className="bt-navbar-mobile" onClick={() => navigate("/perfil")}><img src={perfil} alt="perfil" width={25} />Perfil</button>
        </div>
    )
}

export default NavbarMobile