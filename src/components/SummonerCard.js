import 'bootstrap/dist/css/bootstrap.min.css';
import {React} from 'react';
import { Card ,ListGroup,Button } from 'react-bootstrap';
import useRarity from '../hooks/useRarity'
import { sendToast } from '../functions/toast'
import { getSummonerClass ,getSummonerImg} from '../functions/getSummonerClass'
import { useDispatch ,useSelector} from 'react-redux'
import { statusSummoners} from '../reducers/summonerDataReducers.js'
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
function calcXPForNextLevel(level){
  let xp = level * 1000
  for (let i = 1; i < level; i++) {
      xp += i * 1000
  }
  return xp
}

const SummonerCard = ({summoner,dayCareFunc,time}) => {
  
  const { adventure,level_up } = useRarity()  

  const status = useSelector(state => state.summoners.status)
  const dispatch = useDispatch()
 
  return ( 
    <Card className="card-daycare">    
        <Card.Body>   
          <Card.Img variant="top" src={getSummonerImg(summoner.base._class)} alt="" />    
          <Card.Title>{getSummonerClass(summoner.base._class)}</Card.Title>                 
            <ListGroup  variant="flush" className="card-body-daycare" >
                <ListGroup.Item >ID: {summoner.id}</ListGroup.Item>  
                <ListGroup.Item >LEVEL: {summoner.base._level} 
                  {summoner.base._xp >= calcXPForNextLevel(summoner.base._level) && (
                            <Button
                                variant="secondary" 
                                onClick={async () =>
                                  await sendToast(level_up(summoner.id), `LEVEL-UP Summoner`).then(() => dispatch(statusSummoners(!status)))
                                }
                                className=""
                            >
                              {`level-up`}
                            </Button>

                  )}
                </ListGroup.Item>
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
                          onClick={async () =>await sendToast(adventure(summoner.id),`Sending summoner`).then(() => dispatch(statusSummoners(!status)))
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

 