import 'bootstrap/dist/css/bootstrap.min.css';
import {React,useState,  useEffect} from 'react'
import { useSelector} from 'react-redux'
import SummonerCard from './SummonerCard.js';
import { CardGroup ,Row,Col} from 'react-bootstrap';
import { useWeb3React } from '@web3-react/core'
import DaycareModal from '../components/modals/DaycareModal.js'

const SummonerGroup = ({dayCareFunc}) => {

  const { library, account } = useWeb3React()

  const summonersFull = useSelector (state => state.summoners.data  )
  console.log(summonersFull)

  const [time, setCurrentTime] = useState(Date.now())

  useEffect(() => {
    if (!account || !library) return
    const timer = setInterval(() => {
        setCurrentTime(Date.now())
    }, 1000)
    return () => clearInterval(timer)
  }, [account, library])

  return (
    <>    
      <Row xs={1} md={4} >
        {summonersFull.map((summoner,index) =>
          <Col>
            <SummonerCard 
              summoner ={summoner}           
              dayCareFunc ={dayCareFunc}
              time= {time}
              />
          </Col>              
          )
        }
      </Row>
    </>
  );
};

export default SummonerGroup;
