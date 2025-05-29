import './HomePageStyle.css';
import '../../styles/Global.css'
import Mapa from "../../components/Map/Mapa"
import NavbarMobile from "../../components/NavbarMobile/NavbarMobile"
import NavbarLateral from "../../components/NavbarLateral/NavbarLateral"
import lupa from '../../assets/lupa.png'
import mais from '../../assets/mais.png'
import pasta from '../../assets/pasta.png'
import { useEffect, useState } from 'react';
import type { LatLngTuple } from 'leaflet';
import axios from 'axios';
import {useLocation, useNavigate} from "react-router-dom"
import { toast } from 'react-toastify';
import { MdError } from 'react-icons/md';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [position, setPosition] = useState<LatLngTuple | null>([-7.94055, -34.88030]); // Usado para enviar para ChangeView
  const [coordinates, setCoordinates] = useState<LatLngTuple | null>(null); //Usado para a div se for null a div não aparece
  const navigate = useNavigate();
  const location = useLocation();

  //para quando voltar da /criarpont ir para o local criado
  useEffect(() => {
    const lat = location.state?.lat ?? null;
    const lon = location.state?.lon ?? null;

    if (lat != null || lon != null){
      setPosition([lat, lon])
    }
  }, [])

  //Requisição de Busca na OpenStreet
  const handleSearch = async () => {
    try{
      const res = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);
      console.log(res)
      const { lat, lon } = res.data[0];
      setPosition([lat, lon]);
      setCoordinates([lat, lon]);
      
    }catch(error){
      toast.error("Localização não encontrada!", { icon: <MdError color="#1F3B4D" size={26} />})
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
            <button className='bt-up' onClick={() => {navigate("/localpoint")}}>
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

      <NavbarMobile/>

      {position && <Mapa busca={position} />}

    </div>
  );
}

export default HomePage