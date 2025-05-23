import Navbar from "../../components/Navbar"
import lista from "../../assets/menu.png"
import editar from "../../assets/editar.png"
import './MyPointsStyle.css'
import "../../styles/Global.css"
import { useNavigate } from "react-router-dom"
import Footer from "../../components/Footer"

const MyPointsPage = () => {
    const navigate = useNavigate()
    const meuspoints = 
    [ 
        {
            id: "1749faf47184aaaaaaaa",
            nome: "Buraco na PE-22222",
            descricao: "Buraco enorme na pe22 e a prefeitura não faz nada, descaso!!!!"
        },

        {
            id: "1749faf47184aaaaaaaa",
            nome: "Buraco na PE-22222",
            descricao: "Buraco enorme na pe22 e a prefeitura não faz nada, descaso!!!!"
        }
    ]

    return(
        <div>
            <Navbar showLandingPage = {false} showBack = {true}/>

            <div className="container-mypoints">
                <div className="titlemypoints-wrapper">
                    <img src={lista} alt="lista" width={30}/>
                    <p>Minha Lista de Points</p>
                </div>

                {meuspoints.map((point) => (
                        <div className="mypoints-wrapper">

                        <div className="mypoints-wrapper-left">
                            <p>
                                Nome do Point: {point.nome}
                            </p>
                            <p>Descrição: {point.descricao}</p>
                        </div>

                        <div 
                        className="mypoints-wrapper-right"
                        onClick={() => navigate('/editarpoint', { state : { id: point.id }})}
                        >
                            <button className="btn-wrapper-right"><img src={editar} alt="editar" width={30}/></button>
                        </div>
                    </div>
                ))}
                
            </div>

            <Footer/>
        </div>
    )
}

export default MyPointsPage