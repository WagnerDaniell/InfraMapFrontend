import logo from "../assets/logoinframap-semf.png"
import {Link} from "react-router-dom"
import "../styles/NavbarStyle.css"

type NavbarProps = {
  showLandingPage:boolean;
  showBack:boolean;
};

const Navbar = ({showLandingPage, showBack} : NavbarProps) => {
    return(
        <div className='navbar'>
        <div className='navbar-left'>
          <Link to="/"><img src={logo} alt="logo" height={40} width={40} /></Link>
        </div>

        <div className='navbar-right'>
          {showLandingPage && <button className='btSobre'>Sobre</button>}
          {showLandingPage && <Link to="/home"><button className='btContato'>Contato</button></Link>}
          {showLandingPage && <Link to="/login"><button className='btAcesse'>Acesse Já</button></Link>}

          {showBack && <Link to="/"><button className='btAcesse'>Voltar</button></Link>}
        </div>
      </div>
    )
}

export default Navbar