import {useState, useEffect,useCallback} from 'react'
import useRarity from '../../hooks/useRarity.js'
import useRarityDaycare from '../../hooks/useRarityDaycare.js'
import { RARITY_ADVENTURE_TIME } from '../../constants/constants.js'
import {Modal,Button} from 'react-bootstrap'
import { sendToast } from '../../functions/toast'
import { useWeb3React } from '@web3-react/core'

const DaycareModal = ({show,handleClose,summoners}) => {

    const { account } = useWeb3React()

    const [days, setDays] = useState(0)

    const { registerDaycare } = useRarityDaycare()

    const { isApprovedForAll, setApprovalForAll } = useRarity()

    const [adventureTimeApproval, setAdventureTimeApproval] = useState(false)

    const fetch_approval = useCallback(async () => {
        const approved = await isApprovedForAll(account, RARITY_ADVENTURE_TIME)
        setAdventureTimeApproval(approved)
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
            <p>The service has a fee of 0.08 FTM for each summoner for each day.</p>
            <p>How many days do you want to register your summoner/s?</p>
            {adventureTimeApproval ? (
                    <>
                        <div>
                            <input
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
                            <Button                                    
                                onClick={async () =>
                                    await sendToast(
                                        registerDaycare(
                                            summoners.map((s) => s.id),
                                            days
                                        ),
                                        `Registering summoner`
                                    )
                                }
                            >register summoner
                            </Button>                        
                        </div>
                    </>
                ) : (
                    <div>
                        <Button onClick={() =>
                                sendToast(
                                    setApprovalForAll(RARITY_ADVENTURE_TIME),
                                    `Approving adventure time contract`
                                ).then(() => setAdventureTimeApproval(true))
                            }>approve adventure time                            
                        </Button>                       
                    </div>
                )
            }            
          </Modal.Footer>
        </Modal>
      );

}

export default DaycareModal