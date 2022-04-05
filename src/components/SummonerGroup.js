import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { shallowEqual, useSelector} from 'react-redux'
import SummonerCard from './SummonerCard.js';
import { getSummonerClass ,getSummonerImg} from '../functions/getSummonerClass'
import { CardGroup ,Row,Col} from 'react-bootstrap';
const SummonerGroup = () => {

  const summonersFull = useSelector (state => state.summoners.data  )
  console.log(summonersFull)

  return (
    <Row xs={1} md={4} >
      {summonersFull.map((summoner,index) =>
        <Col>
          <SummonerCard 
            summonerId ={summoner.id}
            summonerClass ={getSummonerClass(summoner.base._class)}
            summonerImg ={getSummonerImg(summoner.base._class)}
            summonerLevel ={summoner.base._level}
            summonerXp ={summoner.base._xp}
            summonerDaycare ={summoner.misc.daycare_days_paid}            
            />
        </Col>              
        )
      }
    </Row>
  );
};

export default SummonerGroup;
