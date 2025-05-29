import Navbar from "../../components/Navbar/Navbar"
import lista from "../../assets/menu.png"
import editar from "../../assets/editar.png"
import lixeira from "../../assets/lixeira.png"
import './MyPointsStyle.css'
import "../../styles/Global.css"
import { useNavigate } from "react-router-dom"
import Footer from "../../components/Footer/Footer"
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from "react"
import axios from "axios"
import Loading from "../../components/Loading/Loading"
import { toast } from 'react-toastify'
import { MdError } from 'react-icons/md'

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
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const buscarMyPoints = async () => {
      setIsLoading(true)
      try {
        const token = localStorage.getItem("token")
        if (token) {
          const decodetoken = jwtDecode<MyToken>(token)
          const response = await axios.get(`https://inframap-back-end-3zs0.onrender.com/points/${decodetoken.userId}`)
          setMeusPoints(response.data)
        }
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    buscarMyPoints()
  }, [])

  const deletarpoint = async (id: string) => {
    setIsLoading(true)
    try {
      const token = localStorage.getItem("token")
      await axios.delete(`https://inframap-back-end-3zs0.onrender.com/points/delete/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
      toast.info("Point Deletado com sucesso!", { icon: <MdError color="#1F3B4D" size={26} /> })
      setMeusPoints(prev => prev.filter(point => point._id !== id))
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const erroMsg = error.response?.data.error
        toast.error(erroMsg, { icon: <MdError color="#1F3B4D" size={24} /> })
      } else {
        toast.error("Erro ao atualizar.", { icon: <MdError color="#1F3B4D" size={26} /> })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      {isLoading && <Loading />}

      <Navbar showLandingPage={false} showBack={true} />

      <div className="container-mypoints">
        <div className="titlemypoints-wrapper">
          <img src={lista} alt="lista" width={30} />
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
                <button className="btn-wrapper-right" onClick={(e) => {
                  e.stopPropagation()
                  navigate("/editarpoint", { state: { id: point._id } })
                }}>
                  <img src={editar} alt="editar" width={30} />
                </button>

                <button className="btn-wrapper-right" onClick={(e) => {
                  e.stopPropagation()
                  deletarpoint(point._id)
                }}>
                  <img src={lixeira} alt="lixeira" width={30} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <Footer />
    </div>
  )
}

export default MyPointsPage
