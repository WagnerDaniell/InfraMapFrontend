import logo from "../../assets/logoinframap-semf.png"
import whatsapp from "../../assets/whatsapp.png"
import instagram from "../../assets/instagram.png"
import './FooterStyle.css'

const Footer = () => {
    return(
        <div className='container-footer'>
        <img src={logo} alt="logo" height={100}/>

        <div className='info-contato'>
          <p>Rua Capetinga, Nº 679, Paulista 53429120</p>
          <p>Telefone - (81)3948294</p>
          <p>Email - email@gmail.com</p>
        </div>

        <div className='info-redes'>
          <p>Redes Sociais</p>
          <div className='icons-redes'>
            <img src={instagram} alt="instagram" height={40}/>
            <img src={whatsapp} alt="whatsapp" height={40} />
          </div>
        </div>
      
      </div>
    )
}

export default Footer