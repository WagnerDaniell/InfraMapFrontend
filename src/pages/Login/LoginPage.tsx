import './LoginPageStyle.css'
import '../../styles/Global.css'
import fotomapa from '../../assets/foto-mapa.png'
import Footer from "../../components/Footer"
import email from "../../assets/email.png"
import senha from "../../assets/senha.png"
import {useState} from 'react'
import Navbar from '../../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
import { MdError } from 'react-icons/md';
import Loading from '../../components/Loading'

const HomePage = () => {
    const [valueEmail, setValueEmail] = useState('');
    const [valueSenha, setValueSenha] = useState('');
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valueEmail);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const body = {
        email: valueEmail,
        password: valueSenha
    }

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try{
            setIsLoading(true)
            
            const response = await axios.post("https://inframap-back-end-3zs0.onrender.com/users/login", body)
            localStorage.setItem("token", response.data.token)
            navigate('/home')
            toast.success("Login efetuado com sucesso");
        }catch(error){
            setIsLoading(false)
            if (axios.isAxiosError(error)){
                const erroMsg = error.response?.data.message
                toast.error(erroMsg, {icon: <MdError color="#1F3B4D" size={24} />});
            }else{
                toast.error("Erro ao fazer login.", {icon: <MdError color="#1F3B4D" size={26} />});
            }
        }
    }

    return(
        <div>

            {isLoading && <Loading/>}

            {/* Componente Navbar */}
            <Navbar showLandingPage={false} showBack={true} />
            
            <div className='container-login'>
                <div className="container-form">

                    {/* Mapa */}
                    <div className='img-mapa'>
                        <p className='title-login'>
                            Faça Login
                        </p>
                        <img src={fotomapa} alt="mapa" width={800}/>
                    </div>

                    {/* Form */}

                    <form onSubmit={handleLogin}>
                        <div className='container-input-login'>

                            {/* Input Email + SVG */}
                            <div className='input-wrapper'>
                                <img className='input-icon' src={email} alt="email" width={25}/>
                                <label className="input-login">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        minLength={6}
                                        required
                                        value={valueEmail}
                                        onChange={(e) => setValueEmail(e.target.value)}
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
                                        className={`check ${isValidEmail ? 'show' : ''}`}
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
                            </div>

                            {/* Input Password + SVG */}
                            <div className='input-wrapper'>
                                <img className='input-icon' src={senha} alt="senha" width={25}/>
                                <label className="input-login">
                                <input
                                    type="password"
                                    placeholder="Senha"
                                    minLength={6}
                                    required
                                    value={valueSenha}
                                    onChange={(e) => setValueSenha(e.target.value)}
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
                                    className={`check ${valueSenha.length >= 6 ? 'show' : ''}`}
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
                            </div>
                        </div>


                        <div className='container-button'>
                            <button className='button-login' type='submit'>Entrar</button>
                        </div>
                    </form>

                    <div className='subtext-login'>
                        Ainda não tem conta? <Link to="/register">Clique Aqui</Link>
                    </div>
                </div>
            </div>
            
            {/* Componente Footer */}
            <Footer/>
        </div>
    )
}

export default HomePage