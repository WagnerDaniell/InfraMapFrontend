import "../styles/NavbarLateralStyle.css"
import "../styles/Global.css"
import perfil from "../assets/perfil.png"
import menu from '../assets/menu.png'
import { useNavigate } from "react-router-dom"

const NavbarLateral = () => {
    const navigate = useNavigate()

    return(
        <div className='navbar-lateral'>
            <div className='navbar-lateral-up'>
                <div className='navbar-lateral-up-wrapper'>
                    <button className="bt-navbar" onClick={() => navigate("/perfil")}><img src={perfil} alt="perfil" width={30} /></button>
                    <button className="bt-navbar"><img src={menu} alt="menu" width={30} /></button>
                </div>
            </div>
        </div>
    )
}

export default NavbarLateral