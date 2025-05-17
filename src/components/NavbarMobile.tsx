import "../styles/NavbarMobileStyle.css"
import "../styles/Global.css"
import mais from "../assets/mais.png"
import perfil from "../assets/perfil.png"

const NavbarMobile = () => {
    return(
        <div className='navbar-mobile'>
            <button className="bt-navbar-mobile"><img src={mais} alt="mais" width={25} />Criar Point</button>
            <button className="bt-navbar-mobile"><img src={perfil} alt="perfil" width={25} />Perfil</button>
        </div>
    )
}

export default NavbarMobile