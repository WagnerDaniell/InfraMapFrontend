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
import {useNavigate} from "react-router-dom"


export function HomePage() {
  const [query, setQuery] = useState('');
  const [position, setPosition] = useState<LatLngTuple | null>([-7.94055, -34.88030]);
  const [coordinates, setCoordinates] = useState<LatLngTuple | null>(null);
  const navigate = useNavigate();

  const handleSearch = async () => {
    const res = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);
    console.log(res)
    const data = await res.data;
    console.log(data)
    if (data && data.length > 0) {
      const { lat, lon } = data[0];
      setPosition([lat, lon]);
      setCoordinates([lat, lon]);
    }
  };

  return (
    <div>
      
      <NavbarLateral/>

      <div className='container-up'>

        <div className='container-search-wrapper'>
          <input className='search-bar' 
            type="text" 
            placeholder='Faça sua busca...' 
            value={query} 
            onChange={e => setQuery(e.target.value)}
            onKeyDown={
              e => {
                if (e.key == 'Enter'){
                  handleSearch();
                  e.currentTarget.blur();
                };
              }
            }
          />
          <img className='icon-lupa' src={lupa} alt="lupa" width={25}/>
        </div>

        <div className='container-up-right'>
          <div className='bt-container-up'>
            <img className='icon-bt' src={mais} alt="mais" width={25}/>
            <button className='bt-up' onClick={() => { 
              if(coordinates != null)
                {
                  navigate("/criarpoint", {state:
                    {
                      lat: coordinates[0],
                      lon: coordinates[1]
                    }})
                }else{
                    navigate("/criarpoint")                    
                }}}> 
              Criar Points
            </button>
          </div>

          <div className='bt-container-up'>
            <img className='icon-bt' src={pasta} alt="pasta" width={25}/>
            <button className='bt-up' 
            onClick={() => navigate("/meuspoints")}>
              Meus Points
            </button>
          </div>
        </div>
      </div>

      <div title="Ao clicar no botão 'Criar Points', essas coordenadas já estarão inseridas no campo Latitude e Longitude." className={`container-coordinates ${!coordinates ? 'hidden' : ""}`}>
        <p>Lat: {coordinates?.[0]}</p>
        <p>Lon: {coordinates?.[1]}</p>
      </div>

      <NavbarMobile coordinates={coordinates}/>

      {position && <Mapa busca={position} />}

    </div>
  );
}

export default HomePage