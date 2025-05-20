import './CreatePointStyle.css'
import fotomapa from '../../assets/foto-mapa.png'
import Footer from "../../components/Footer"
import {useState} from 'react'
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'

const CreatePointPage = () => {
    const [valueNome, setValueNome] = useState('');
    const [valueDescription, setValueDescription] = useState('');
    const [valueLatitude, setValueLatitude] = useState('');
    const [valueLongitude, setValueLongitude] = useState('');
    const [valueImage, setValueImage] = useState<File | null>(null);
    const navigate = useNavigate();

    const handlecreatepoint = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const body = {
            name: valueNome,
            description: valueDescription,
            latitude: valueLatitude,
            longitude: valueLongitude,
            image: valueImage
        }
        console.log(body);
        navigate('/home');
    }

    return(
        <div>
            {/* Componente Navbar */}
            <Navbar showLandingPage={false} showBack={true} />
            
            <div className='container-createpoint'>
                <div className="container-form">

                    {/* Mapa */}
                    <div className='img-mapa-createpoint'>
                        <p className='title-createpoint'>
                            Crie seu Point
                        </p>
                        <img src={fotomapa} alt="mapa" width={800}/>
                    </div>

                    {/* Form */}

                    <form onSubmit={handlecreatepoint}>
                        <div className='container-input-createpoint'>

                            {/* Input Name + SVG */}
                            <label className="input-createpoint">
                                <input
                                    type="text"
                                    placeholder="Nome do Point"
                                    minLength={8}
                                    required
                                    value={valueNome}
                                    onChange={(e) => setValueNome(e.target.value)}
                                />
                                <svg
                                    className="border"
                                    width="280"
                                    height="18"
                                    viewBox="0 0 280 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    className="border-path"
                                    d="M0,12 L280,12"
                                    stroke="#C8CCD4"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    />
                                </svg>
                                <svg
                                    className={`check ${valueNome.length >= 8 ? 'show' : ''}`}
                                    width="14"
                                    height="12"
                                    viewBox="0 0 14 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    d="M1 7L5.5 11L13 1"
                                    stroke="#0077FF"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    />
                                </svg>
                            </label>

                            {/* Input Descrição + SVG */}
                            <label className="input-createpoint">
                                <input
                                    type="text"
                                    placeholder="Descrição"
                                    minLength={15}
                                    required
                                    value={valueDescription}
                                    onChange={(e) => setValueDescription(e.target.value)}
                                />
                                <svg
                                    className="border"
                                    width="280"
                                    height="18"
                                    viewBox="0 0 280 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    className="border-path"
                                    d="M0,12 L280,12"
                                    stroke="#C8CCD4"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    />
                                </svg>
                                <svg
                                    className={`check ${valueDescription.length >= 15 ? 'show' : ''}`}
                                    width="14"
                                    height="12"
                                    viewBox="0 0 14 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    d="M1 7L5.5 11L13 1"
                                    stroke="#0077FF"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    />
                                </svg>
                            </label>


                            {/* Input Longitude + SVG */}
                            <label className="input-createpoint">
                                <input
                                    type="text"
                                    placeholder="Longitude"
                                    minLength={5}
                                    required
                                    value={valueLongitude}
                                    onChange={(e) => setValueLongitude(e.target.value)}
                                />
                                <svg
                                    className="border"
                                    width="280"
                                    height="18"
                                    viewBox="0 0 280 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    className="border-path"
                                    d="M0,12 L280,12"
                                    stroke="#C8CCD4"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    />
                                </svg>
                                <svg
                                    className={`check ${valueLongitude.length >= 5 ? 'show' : ''}`}
                                    width="14"
                                    height="12"
                                    viewBox="0 0 14 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    d="M1 7L5.5 11L13 1"
                                    stroke="#0077FF"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    />
                                </svg>
                            </label>


                            {/* Input Latitude + SVG */}
                            <label className="input-createpoint">
                                <input
                                    type="text"
                                    placeholder="Latitude"
                                    minLength={5}
                                    required
                                    value={valueLatitude}
                                    onChange={(e) => setValueLatitude(e.target.value)}
                                />
                                <svg
                                    className="border"
                                    width="280"
                                    height="18"
                                    viewBox="0 0 280 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    className="border-path"
                                    d="M0,12 L280,12"
                                    stroke="#C8CCD4"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    />
                                </svg>
                                <svg
                                    className={`check ${valueLatitude.length >= 5 ? 'show' : ''}`}
                                    width="14"
                                    height="12"
                                    viewBox="0 0 14 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    d="M1 7L5.5 11L13 1"
                                    stroke="#0077FF"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    />
                                </svg>
                            </label>


                            <label className="input-file-createpoint">
                                Selecione uma imagem do local:
                                <input
                                    type="file"
                                    accept="image/*" // opcional: só permite imagens
                                    required
                                    onChange={(e) => {
                                        if (e.target.files && e.target.files[0]) {
                                            setValueImage(e.target.files[0]);
                                        }
                                    }}
                                />
                            </label>


                        </div>


                        <div className='container-button'>
                            <button className='button-createpoint' type='submit'>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
            
            {/* Componente Footer */}
            <Footer/>
        </div>
    )
}

export default CreatePointPage