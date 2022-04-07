import 'bootstrap/dist/css/bootstrap.min.css';
import {React,useState} from 'react';
import { Card ,ListGroup,Button } from 'react-bootstrap';
import useRarity from '../hooks/useRarity'
import { sendToast } from '../functions/toast'
import { getSummonerClass ,getSummonerImg} from '../functions/getSummonerClass'

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


const SummonerCard = ({summoner,dayCareFunc,time}) => {
  
  const { adventure } = useRarity()

  return ( 
    <Card className="card-daycare">    
        <Card.Body>   
          <Card.Img variant="top" src={getSummonerImg(summoner.base._class)} alt="" />    
          <Card.Title>{getSummonerClass(summoner.base._class)}</Card.Title>                 
            <ListGroup  variant="flush" className="card-body-daycare" >
                <ListGroup.Item >ID: {summoner.id}</ListGroup.Item>  
                <ListGroup.Item >LEVEL: {summoner.base._level}</ListGroup.Item>
                <ListGroup.Item >XP: {summoner.base._xp}</ListGroup.Item>
                <ListGroup.Item >DAYCARE: {summoner.misc.daycare_days_paid}</ListGroup.Item>
                <ListGroup.Item >
                    {summoner.base._log * 1000 > time ? (                      
                        <Button 
                          disabled={true}
                          variant="secondary" 
                          //style={{"font-size":"0.7rem","padding": "0.595rem 0.75rem"}}
                          > {secondsRender((summoner.base._log * 1000 - time) / 1000)}
                        </Button>
                      ) : (
                        <Button
                          variant="secondary" 
                          onClick={async () =>await sendToast(adventure(summoner.id),`Sending summoner`)
                                  }>Go To adventure
                        </Button>
                    )}                
                </ListGroup.Item>   
                <ListGroup.Item > <Button variant="secondary" onClick={() => dayCareFunc([summoner])}>Daycare</Button></ListGroup.Item>                  
            </ListGroup >
        </Card.Body>
    </Card>
  );
};

export default SummonerCard;

 