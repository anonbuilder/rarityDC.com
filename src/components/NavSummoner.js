import '../App.css';
import React from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { Button } from 'react-bootstrap';
import { sendToast } from '../functions/toast'
import useRarityAdventureTime from '../hooks/useRarityAdventureTime.js'
import { statusSummoners} from '../reducers/summonerDataReducers.js'

function filterSummonerForAdventureTime () {

}

const NavSummoner = ({dayCareFunc,time}) => {

  const summonersFull = useSelector (state => state.summoners.data  )

  const status = useSelector(state => state.summoners.status)

  const { adventureTime } = useRarityAdventureTime()  

  const dispatch = useDispatch()
  
  return (
    <div className="content-button-summoners">
        <Button variant="secondary" size="lg" onClick={() => dayCareFunc(summonersFull)}>Daycare All</Button>        
        {' '}
        <Button variant="secondary" size="lg"   
          onClick={async () =>
              await sendToast(
                  adventureTime(
                    summonersFull.filter((s) => s.base._log * 1000 <= time ).map((s) => s.id)                      
                  ),
                  `Sending summoners`
              ).then(() => dispatch(statusSummoners(!status)))
          }>All go to adventure
        </Button>
        {' '}      
    </div>
  );
}

export default NavSummoner;