import { useState } from 'react'
import MapCenterPoint from '../../components/MapCenterPoint/MapCenterPoint'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import './LocalPointStyle.css'

const PointLocation = () => {
    const [locationPointer, setLocationPointer] = useState<[number, number] | null>(null)
    const navigate = useNavigate()

    return(
        <div>
            <Navbar showBack={true} showLandingPage={false}/>

            <div className='bt-localpoint-wrapper'>
                <button className='bt-localpoint' onClick={() => { 
                if(locationPointer != null)
                    {
                    navigate("/criarpoint", {state:
                        {
                        lat: locationPointer[0],
                        lon: locationPointer[1]
                        }})
                    }else{
                        navigate("/criarpoint")                    
                    }}}> 
                    Próximo passo
                </button>
          </div>

            <MapCenterPoint onChangeCenter={setLocationPointer}/>
        </div>
    )
}

export default PointLocation