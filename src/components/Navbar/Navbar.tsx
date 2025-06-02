import logo from "../../assets/logoinframap-semf.png"
import {Link, useNavigate} from "react-router-dom"
import "./NavbarStyle.css"
import voltar from "../../assets/botao-voltar.png"

type NavbarProps = {
  showLandingPage:boolean;
  showBack:boolean;
};

const Navbar = ({showLandingPage, showBack} : NavbarProps) => {

  const navigate = useNavigate();

  return(
      <div className='navbar'>
      <div className='navbar-left'>
        <img src={logo} alt="logo" height={40} width={40} />
      </div>

      <div className='navbar-right'>
        {showLandingPage && <button className='btSobre'>Sobre</button>}
        {showLandingPage && <button className='btContato'>Contato</button>}
        {showLandingPage && <Link to="/login"><button className='btAcesse'>Acesse Já</button></Link>}

        {showBack && <button className='btBack' onClick={() => navigate(-1)}><img src={voltar} alt="voltar" width={35}/></button>}
      </div>
    </div>
  )
}

export default Navbar