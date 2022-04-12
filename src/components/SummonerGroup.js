import 'bootstrap/dist/css/bootstrap.min.css';
import {React,useState,  useEffect} from 'react'
import { useSelector} from 'react-redux'
import SummonerCard from './SummonerCard.js';
import { Row,Col} from 'react-bootstrap';
import { useWeb3React } from '@web3-react/core'
import NavSummoner from '../components/NavSummoner.js';

const SummonerGroup = ({dayCareFunc}) => {

  const { library, account } = useWeb3React()

  const summonersFull = useSelector (state => state.summoners.data  )

  const loading = useSelector(state => state.summoners.loading)

  //console.log(summonersFull)

  const [time, setCurrentTime] = useState(Date.now())

  useEffect(() => {
    if (!account || !library) return
    const timer = setInterval(() => {
        setCurrentTime(Date.now())
    }, 1000)
    return () => clearInterval(timer)
  }, [account, library])

  return (
    <>{!account? 
        ( <div className ="text-align-center border-radius messenger-style" >
            <h1>YOUR WALLET IS NOT CONNECTED</h1>
          </div>
        ): (
          <>
            {loading?(
                <div className ="text-align-center border-radius messenger-style" >
                  <h1>LOADING...</h1>
                </div>
              ):(<>
                { summonersFull.length > 0? (
                    <>
                      <NavSummoner dayCareFunc={dayCareFunc}/>
                      <Row xs={1} md={4} >
                        {summonersFull.map((summoner,index) =>
                          <Col key={index}>
                            <SummonerCard 
                              key={index}
                              summoner ={summoner}           
                              dayCareFunc ={dayCareFunc}
                              time= {time}
                              />
                          </Col>              
                          )
                        }
                      </Row>
                    </>
                  ):(
                    <div className ="text-align-center border-radius messenger-style" >
                      <h1>NO SUMMONERS</h1>
                    </div>                  
                  )
                }
                </>
              )
            }
          </>
        )
      } 
    </>
  );
};

export default SummonerGroup;
