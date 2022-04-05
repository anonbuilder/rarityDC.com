import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card ,ListGroup,Button } from 'react-bootstrap';
import useRarity from '../hooks/useRarity'
import { sendToast } from '../functions/toast'

function secondsRender(d){
  d = Number(d)
  let h = Math.floor(d / 3600)
  let m = Math.floor((d % 3600) / 60)
  let s = Math.floor((d % 3600) % 60)
  let hDisplay = h > 0 ? h + (h === 1 ? ' hour, ' : ' hours, ') : ''
  let mDisplay = m > 0 ? m + (m === 1 ? ' minute ' : ' minutes ') : ''
  let sDisplay = s > 0 ? s + (s === 1 ? ' second' : ' seconds') : ''
  if (h > 0) {
      return hDisplay + mDisplay
  } else {
      return mDisplay + sDisplay
  }
}


const SummonerCard = ({summonerId,summonerLog,summonerClass,summonerImg,summonerLevel,summonerXp, summonerDaycare,time}) => {

  const { adventure } = useRarity()

  return ( 
    <Card className="card-daycare">    
        <Card.Body>   
          <Card.Img variant="top" src={summonerImg} alt="" />    
          <Card.Title>{summonerClass}</Card.Title>                 
            <ListGroup  variant="flush">
                <ListGroup.Item >ID: {summonerId}</ListGroup.Item>  
                <ListGroup.Item >LEVEL: {summonerLevel}</ListGroup.Item>
                <ListGroup.Item >XP: {summonerXp}</ListGroup.Item>
                <ListGroup.Item >DAYCARE: {summonerDaycare}</ListGroup.Item>
                <ListGroup.Item >
                    {summonerLog * 1000 > time ? (
                      
                        <Button 
                          disabled="true"
                          variant="secondary" 
                          //style={{"font-size":"0.7rem","padding": "0.595rem 0.75rem"}}
                          > {secondsRender((summonerLog * 1000 - time) / 1000)}
                        </Button>
                      ) : (
                        <Button
                          variant="secondary" 
                          onClick={async () =>await sendToast(adventure(summonerId),`Sending summoner`)
                                  }>Go To adventure
                        </Button>
                    )}                
                </ListGroup.Item>   
                <ListGroup.Item > <Button variant="secondary">Daycare</Button></ListGroup.Item>                  
            </ListGroup >
        </Card.Body>
    </Card>
  );
};

export default SummonerCard;

 