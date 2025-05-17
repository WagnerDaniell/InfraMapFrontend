import "../styles/NavbarLateralStyle.css"
import "../styles/Global.css"
import perfil from "../assets/perfil.png"
import menu from '../assets/menu.png'
import logout from '../assets/logout.png'


const NavbarLateral = () => {
    return(
        <div className='navbar-lateral'>
            <div className='navbar-lateral-up'>
                <div className='navbar-lateral-up-wrapper'>
                    <button className="bt-navbar"><img src={perfil} alt="perfil" width={30} /></button>
                    <button className="bt-navbar"><img src={menu} alt="menu" width={30} /></button>
                </div>
            </div>

            <div className='navbar-lateral-down'>
                <button className="bt-navbar"><img src={logout} alt="logout" width={25} /></button>
            </div>
        </div>
    )
}

export default NavbarLateral