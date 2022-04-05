import '../App.css';
import React from 'react'
import SummonerGroup from '../components/SummonerGroup';
import BoxInfo from '../components/BoxInfo.js';
import NavSummoner from '../components/NavSummoner.js';
import { Container } from 'react-bootstrap';

function Summoners() {
  console.log('test')
  return (
    <>     
      <Container>
        <div>
          <BoxInfo />
          <NavSummoner/>
          <SummonerGroup />
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