import '../App.css';
import {useState, useEffect,useCallback} from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { Button } from 'react-bootstrap';
import { sendToast } from '../functions/toast'
import useRarityAdventureTime from '../hooks/useRarityAdventureTime.js'
import { statusSummoners} from '../reducers/summonerDataReducers.js'
import { RARITY_ADVENTURE_TIME} from '../constants/constants.js'
import useRarity from '../hooks/useRarity.js'
import { useWeb3React } from '@web3-react/core'

function filterSummonerForAdventureTime () {

}

const NavSummoner = ({dayCareFunc,time}) => {

  const { account } = useWeb3React()

  const summonersFull = useSelector (state => state.summoners.data  )

  const status = useSelector(state => state.summoners.status)

  const { adventureTime } = useRarityAdventureTime()  

  const { isApprovedForAll, setApprovalForAll } = useRarity()

  const dispatch = useDispatch()

  const [adventureTimeApproval, setAdventureTimeApproval] = useState(false)

  const fetch_approval = useCallback(async () => {
      const approved = await isApprovedForAll(account, RARITY_ADVENTURE_TIME) 
      setAdventureTimeApproval(approved)
  }, [account, isApprovedForAll])

  useEffect(() => {
      fetch_approval()
  }, [fetch_approval])

  return (
    <div className="content-button-summoners">
        <Button variant="secondary" size="lg" onClick={() => dayCareFunc(summonersFull)}>Daycare All</Button>        
        {' '}
        {adventureTimeApproval ? (
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
        ):(
          <Button variant="secondary" size="lg" 
            onClick={() =>
                sendToast(
                    setApprovalForAll(RARITY_ADVENTURE_TIME),
                    `Approving adventure time contract`
                ).then(() => setAdventureTimeApproval(true))
            }>Approve adventure time                            
          </Button>  
        )}
    
        {' '}      
    </div>
  );
}

export default NavSummoner;