import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './StyleMainPage.css'
import '../../styles/Global.css'
import logo from "../../assets/logoinframap-semf.png"
import { Link } from 'react-router-dom';
import networking from "../../assets/networking.png"
import comunidade from "../../assets/comunidade.png"
import governo from "../../assets/governo.png"
import whatsapp from "../../assets/whatsapp.png"
import instagram from "../../assets/instagram.png"

function MainPage() {
  
  return (
    <div>
      {/* NavBar */}
      <div className='navbar'>
        <div className='navbar-left'>
          <img src={logo} alt="logo" height={40} width={40} />
        </div>

        <div className='navbar-right'>
          <button className='btSobre'>Sobre</button>
          <button className='btContato'>Contato</button>
          <Link to="/home"><button className='btAcesse'>Acesse Já</button></Link>
        </div>
      </div>

      {/* MapaMain */}

      <div className='mapa-main'>

        <div className='text-main'>
          <p className='title-main'>INFRAMAP</p>
          <p className='subtext-main'>Sua voz constrói. Mostre onde sua cidade precisa de atenção.</p>
        </div>
    
        <MapContainer center={[-8.0476, -34.8770]} zoom={14} style={{ zIndex: -1, position: 'relative', height: '100vh', width: '100%' }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
      </div>

      {/* Sobre */}

      <div className='title-sobre'>
        <p>Sobre o InfraMap</p>
      </div>

      <div className='container-sobre'>
        <div className='minimal-container'>
          <img src={networking} alt="networking" height={100}/>
          <p>Mapeie pontos críticos de infraestrutura para auxiliar 
            a cidade a resolver problemas e melhorar a qualidade de vida.</p>
        </div>
        <div className='minimal-container'>
          <img src={governo} alt="governo" height={100}/>
          <p>Ao mapear pontos críticos, o site ajuda a prefeitura 
            a identificar onde a infraestrutura da cidade precisa de atenção, 
            acelerando as soluções.</p>
        </div>
        <div className='minimal-container'>
          <img src={comunidade} alt="comunidade" height={100}/>
          <p>Conectamos moradores e prefeitura para identificar 
            áreas com baixa infraestrutura e priorizar melhorias na cidade.</p>
        </div>
      </div>

      {/* Footer */}

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

    </div>
  )
}

export default MainPage
