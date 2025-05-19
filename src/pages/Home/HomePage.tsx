import './HomePageStyle.css';
import '../../styles/Global.css'
import Mapa from "../../components/Mapa"
import NavbarMobile from "../../components/NavbarMobile"
import NavbarLateral from "../../components/NavbarLateral"
import lupa from '../../assets/lupa.png'
import mais from '../../assets/mais.png'
import pasta from '../../assets/pasta.png'
import { useState } from 'react';
import type { LatLngTuple } from 'leaflet';
import axios from 'axios';


export function HomePage() {
  const [query, setQuery] = useState('');
  const [position, setPosition] = useState<LatLngTuple | null>([-7.94055, -34.88030]);

  const handleSearch = async () => {
    console.log("chegueoi")
    const res = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);
    console.log(res)
    const data = await res.data;
    console.log(data)
    if (data && data.length > 0) {
      const { lat, lon } = data[0];
      setPosition([lat, lon]);
    }
  };

  return (
    <div>
      
      <NavbarLateral/>

      <div className='container-up'>

        <div className='container-search'>
          <input className='search-bar' 
            type="text" 
            placeholder='Faça sua busca...' 
            value={query} 
            onChange={e => setQuery(e.target.value)}
            onKeyDown={
              e => {
                if (e.key == 'Enter'){
                  handleSearch();
                };
              }
            }
          />
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

      {position && <Mapa busca={position} />}

    </div>
  );
}

export default HomePage