import Navbar from "../../components/Navbar"
import lista from "../../assets/menu.png"
import editar from "../../assets/editar.png"
import './MyPointsStyle.css'
import "../../styles/Global.css"
import { useNavigate } from "react-router-dom"
import Footer from "../../components/Footer"
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from "react"
import axios from "axios"
import Loading from "../../components/Loading"

interface MyToken {
  userId: string;
  name: string;
}

interface MyPoint {
    _id: string;
    name: string;
    description: string;
}

const MyPointsPage = () => {
    const navigate = useNavigate()
    const [meusPoints, setMeusPoints] = useState<MyPoint[]>([])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const buscarMyPoints = async () => {
            try{
                setIsLoading(true)
                const token = localStorage.getItem("token")
                if(token){
                    const decodetoken = jwtDecode<MyToken>(token)
                    const response = await axios.get(`https://inframap-back-end-3zs0.onrender.com/points/${decodetoken.userId}`)
                    console.log(response)
                    setMeusPoints(response.data)
                    setIsLoading(false)
                };
            }catch(error){
                setIsLoading(false)
                navigate(-1)
            }
        };

        buscarMyPoints();
    },[])


    return(
        <div>
            {isLoading && <Loading/>}

            <Navbar showLandingPage = {false} showBack = {true}/>

            <div className="container-mypoints">
                <div className="titlemypoints-wrapper">
                    <img src={lista} alt="lista" width={30}/>
                    <p>Minha Lista de Points</p>
                </div>

                {meusPoints.length === 0 ? (
                    <div className="sem-points">Não há nenhum point criado por você.</div>
                ) : (
                    meusPoints.map((point) => (
                    <div key={point._id} className="mypoints-wrapper">
                        <div className="mypoints-wrapper-left">
                        <p>Nome do Point: {point.name}</p>
                        <p>Descrição: {point.description}</p>
                        </div>
                        <div
                        className="mypoints-wrapper-right"
                        onClick={() => navigate('/editarpoint', { state: { id: point._id } })}
                        >
                        <button className="btn-wrapper-right">
                            <img src={editar} alt="editar" width={30} />
                        </button>
                        </div>
                    </div>
                    ))
                )}
                
            </div>

            <Footer/>
        </div>
    )
}

export default MyPointsPage