import './PerfilStyle.css'
import '../../styles/Global.css'
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import perfil from "../../assets/perfilazul.png"
import menu from '../../assets/menu.png'
import logout from "../../assets/logout.png"
import editar from "../../assets/editar.png"
import { toast } from "react-toastify"
import { MdError } from "react-icons/md"
import { useNavigate} from 'react-router-dom'
import { MapContainer, TileLayer } from 'react-leaflet';
import { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'

interface MyToken {
    userId : string
    name : string
}

const PerfilPage = () => {
    const navigate = useNavigate()
    const [nameUser, setNameUser] = useState("Seja bem-vindo!")

    const handlelogout = () => {
        localStorage.removeItem("token")
        toast.error("Você foi desconectado.", {icon: <MdError color="#1F3B4D" size={26} />})
        navigate("/")
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            const decodetoken = jwtDecode<MyToken>(token)
            setNameUser(decodetoken.name)
        }
    }, [])

    return(
        <div>
            <Navbar showBack={true} showLandingPage={false}/>

            <MapContainer center={[-8.0476, -34.8770]} zoom={14} style={{ zIndex: -1, position: 'relative', height: '100vh', width: '100%' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>

            <div className="container-perfil">
                <img className="icon-perfil" src={perfil} alt="perfil" />

                <p className="nameuser-perfil">Olá, {nameUser}</p>

                <div className='btn-perfil-wrapper'>
                    <img src={menu} alt="menu"  width={30} className='btn-icon-perfil'/>
                    <button className='btn-perfil' onClick={() => navigate("/meuspoints")}>Meus Points</button>
                </div>

                <div className='btn-perfil-wrapper'>
                    <img src={editar} alt="menu"  width={25} className='btn-icon-perfil'/>
                    <button className='btn-perfil2'>Alterar Dados</button>
                </div>
                
                 <div className='btn-perfil-wrapper'>
                    <img src={logout} alt="menu"  width={25} className='btn-icon-perfil'/>
                    <button className='btn-perfil3' onClick={handlelogout}>Logout</button>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default PerfilPage