import '../App.css';
import {React,useState} from 'react'
import SummonerGroup from '../components/SummonerGroup';
import BoxInfo from '../components/BoxInfo.js';
import NavSummoner from '../components/NavSummoner.js';
import { Container } from 'react-bootstrap';
import DaycareModal from '../components/modals/DaycareModal.js'

function Summoners() {
 
  const [daycareSummoners, setDaycareSummoners] = useState([])

  const [daycareModalShow, setdaycareModalShow] = useState(false)

  function dayCareFunc(summoners) {
    setdaycareModalShow(true)
    setDaycareSummoners(summoners)
  }

  return (
    <>
      <DaycareModal 
        show={daycareModalShow} 
        handleClose={() => setdaycareModalShow(false)} 
        summoners ={daycareSummoners} 
      />   
      <Container>
        <div>
          <BoxInfo />
          <NavSummoner dayCareFunc={dayCareFunc}/>
          <SummonerGroup dayCareFunc={dayCareFunc}/>
        </div>
      </Container>
    </>
  );
}

export default Summoners;


// { <div className="App">
// <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//     Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//     >
//     Learn React
//     </a>
// </header>
// </div> }