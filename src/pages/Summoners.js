import '../App.css';
import React from 'react'
import SummonerGroup from '../components/SummonerGroup';
import BoxInfo from '../components/BoxInfo.js';
import NavSummoner from '../components/NavSummoner.js';


function Summoners() {
  console.log('test')
  return (
    <>     
      <div className = {'container'}>
        <div>
          <BoxInfo />
          <NavSummoner/>
          <SummonerGroup />
        </div>
      </div>
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