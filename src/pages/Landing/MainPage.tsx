import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MainPageStyle.css'
import '../../styles/Global.css'
import networking from "../../assets/networking.png"
import comunidade from "../../assets/comunidade.png"
import governo from "../../assets/governo.png"
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

function MainPage() {
  
  return (
    <div>
      
      {/* Componente Navbar */}
      <Navbar showLandingPage={true} showBack={false}/>

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

      {/* Componente Footer */}
      <Footer/>

    </div>
  )
}

export default MainPage
