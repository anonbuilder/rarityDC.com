import {useState, useEffect,useCallback} from 'react'
import useRarity from '../../hooks/useRarity.js'
import useRarityDaycare from '../../hooks/useRarityDaycare.js'
import useRarityDaycarePlanet from '../../hooks/useRarityDaycarePlanet.js'
import { RARITY_ADVENTURE_TIME} from '../../constants/constants.js'
import {Modal,Button} from 'react-bootstrap'
import { sendToast } from '../../functions/toast'
import { useWeb3React } from '@web3-react/core'
import { useDispatch ,useSelector} from 'react-redux'
import { statusSummoners} from '../../reducers/summonerDataReducers.js'
const DaycareModal = ({show,handleClose,summoners}) => {

    const { account } = useWeb3React()

    const [days, setDays] = useState(0)

    const [isPlanetContract, setIsPlanetContract] = useState(false)

    const { registerDaycare } = useRarityDaycare()

    const { registerDaycarePlanet, canRegister } = useRarityDaycarePlanet()    

    const { isApprovedForAll, setApprovalForAll } = useRarity()

    const [adventureTimeApproval, setAdventureTimeApproval] = useState(false)

    const status = useSelector(state => state.summoners.status)

    const dispatch = useDispatch()

    const fetch_approval = useCallback(async () => {

        const planetContract =  await canRegister(account)

        const approved = await isApprovedForAll(account, RARITY_ADVENTURE_TIME) 
        setAdventureTimeApproval(approved)
        setIsPlanetContract(planetContract)

    }, [account, isApprovedForAll])

    useEffect(() => {
        fetch_approval()
    }, [fetch_approval])

    return (
        <Modal 
            show={show}
            onHide={handleClose}           
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            SUMMONER DAILY CARE
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>        
            <p>The daily care is a community run system to take care of your summoners</p>
            <p>The service has a fee of 0.08 FTM (0.07 FTM With Dark Plannet) for each summoner for each day.</p>
            <p>How many days do you want to register your summoner/s?</p>
            {adventureTimeApproval ? (
                    <>
                        <div>
                            <input  className =  "border-radius color-black"
                                type="number"                             
                                onChange={(v) => setDays(parseInt(v.target.value))}
                            />
                        </div>            
                    </>
                ) : ""
                
            }
            <div></div>
          </Modal.Body>
          <Modal.Footer>
            {adventureTimeApproval ? (
                    <>               
                        <div>
                            {isPlanetContract? (
                                    <Button 
                                        variant="secondary"                                    
                                        onClick={async () =>
                                            await sendToast(
                                                registerDaycarePlanet(
                                                    summoners.map((s) => s.id),
                                                    days
                                                ),
                                                `Registering summoner`
                                            ).then(() => dispatch(statusSummoners(!status)))
                                        }
                                        >Register summoner
                                    </Button> 

                                ):(
                                    <Button 
                                        variant="secondary"                                    
                                        onClick={async () =>
                                            await sendToast(
                                                registerDaycare(
                                                    summoners.map((s) => s.id),
                                                    days
                                                ),
                                                `Registering summoner`
                                            ).then(() => dispatch(statusSummoners(!status)))
                                        }
                                        >Register summoner
                                    </Button> 
                                )

                            }
                                         
                        </div>
                    </>
                ) : (
                    <div>
                        <Button 
                            variant="secondary" 
                            onClick={() =>
                                sendToast(
                                    setApprovalForAll(RARITY_ADVENTURE_TIME),
                                    `Approving adventure time contract`
                                ).then(() => setAdventureTimeApproval(true))
                            }>Approve adventure time                            
                        </Button>                       
                    </div>
                )
            }            
          </Modal.Footer>
        </Modal>
      );

}

export default DaycareModal