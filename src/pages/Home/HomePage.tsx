import './HomePageStyle.css';
import '../../styles/Global.css'
import Mapa from "../../components/Mapa"
import NavbarMobile from "../../components/NavbarMobile"
import NavbarLateral from "../../components/NavbarLateral"
import lupa from '../../assets/lupa.png'
import mais from '../../assets/mais.png'
import pasta from '../../assets/pasta.png'

export function HomePage() {
  return (
    <div>
      
      <NavbarLateral/>

      <div className='container-up'>

        <div className='container-search'>
          <input className='search-bar' type="text" placeholder='Faça sua busca...' />
          <img className='icon-lupa' src={lupa} alt="lupa" width={25}/>
        </div>

        <div className='container-up-right'>
          <div className='bt-container-up'>
            <img className='icon-bt' src={mais} alt="mais" width={25}/>
            <button className='bt-up'>
              Criar Points
            </button>
          </div>

          <div className='bt-container-up'>
            <img className='icon-bt' src={pasta} alt="pasta" width={25}/>
            <button className='bt-up'>
              Meus Points
            </button>
          </div>
        </div>
      </div>

      <NavbarMobile/>

      <Mapa/>
    </div>
  );
}

export default HomePage