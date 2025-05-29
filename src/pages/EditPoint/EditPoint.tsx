import './EditPointStyle.css'
import fotomapa from '../../assets/foto-mapa.png'
import Footer from "../../components/Footer/Footer"
import {useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { MdError } from 'react-icons/md'

const EditarPointPage = () => {

    const [valueNome, setValueNome] = useState('');
    const [valueDescription, setValueDescription] = useState('');
    const [valueImage, setValueImage] = useState<File | null>(null);
    const navigate = useNavigate();
    const location = useLocation()
    const id = location.state?.id ?? '';

    const handleupdatepoint = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', valueNome);
        formData.append('description', valueDescription);

        if (valueImage) {
            formData.append('image', valueImage);
        }

        try {
            const token = localStorage.getItem("token")
            await axios.put(`https://inframap-back-end-3zs0.onrender.com/points/update/${id}`, formData, {
                headers: {
                    'Authorization' : `Bearer ${token}`,
                    'Content-Type' : 'multipart/form-data'
                }
            });
            toast.error("Point Atualizado com sucesso!", {icon: <MdError color="#1F3B4D" size={26} />});
            navigate("/meuspoints")   
        }catch (error) {
            if (axios.isAxiosError(error)){
                const erroMsg = error.response?.data.error
                toast.error(erroMsg, {icon: <MdError color="#1F3B4D" size={24} />});
            }else{
                toast.error("Erro ao atualizar.", {icon: <MdError color="#1F3B4D" size={26} />});
            }
        }
    }

    return(
        <div>
            {/* Componente Navbar */}
            <Navbar showLandingPage={false} showBack={true} />
            
            <div className='container-editpoint'>
                <div className="container-form-editpoint">

                    {/* Mapa */}
                    <div className='img-mapa-editpoint'>
                        <p className='title-editpoint'>
                            Atualize seu Point
                        </p>
                        <img src={fotomapa} alt="mapa" width={800}/>
                    </div>

                    {/* Form */}

                    <form onSubmit={handleupdatepoint}>
                        <span className="tooltip-text">ℹ️ Adicione abaixo as Informações que serão atualizadas.</span>
                        <div className='container-input-editpoint'>

                            {/* Input Name + SVG */}
                            <label className="input-editpoint">
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
                            <label className="input-editpoint">
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

                            <label className="input-file-editpoint">
                                Selecione uma imagem do local:
                                <input
                                    type="file"
                                    accept="image/*" // opcional: só permite imagens
                                    required
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) setValueImage(file);
                                    }}
                                />
                            </label>


                        </div>


                        <div className='container-button'>
                            <button className='button-editpoint' type='submit'>Atualizar</button>
                        </div>
                    </form>
                </div>
            </div>
            
            {/* Componente Footer */}
            <Footer/>
        </div>
    )
}

export default EditarPointPage