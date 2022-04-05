import 'bootstrap/dist/css/bootstrap.min.css';
import {React,useState,  useEffect} from 'react'
import { shallowEqual, useSelector} from 'react-redux'
import SummonerCard from './SummonerCard.js';
import { getSummonerClass ,getSummonerImg} from '../functions/getSummonerClass'
import { CardGroup ,Row,Col} from 'react-bootstrap';
import { useWeb3React } from '@web3-react/core'


const SummonerGroup = () => {

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
    <Row xs={1} md={4} >
      {summonersFull.map((summoner,index) =>
        <Col>
          <SummonerCard 
            summonerId ={summoner.id}
            summonerLog ={summoner.base._log}
            summonerClass ={getSummonerClass(summoner.base._class)}
            summonerImg ={getSummonerImg(summoner.base._class)}
            summonerLevel ={summoner.base._level}
            summonerXp ={summoner.base._xp}
            summonerDaycare ={summoner.misc.daycare_days_paid}
            time= {time}
            />
        </Col>              
        )
      }
    </Row>
  );
};

export default SummonerGroup;
