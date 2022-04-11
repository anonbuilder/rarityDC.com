import React from 'react'
import { useWeb3React } from '@web3-react/core'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../img/raritydc-logo.png'
import { injected } from "./connectors/connectors.js"

const Header =  () => {

  const { active, account, activate, deactivate, error } = useWeb3React()
  
  const test = useWeb3React()
  console.log(test)
 
  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  function correctChainId () {
    if(error){
      if(error.name === 'UnsupportedChainIdError' ) return 'You are on the wrong network'; 
      else return <button className ="btn btn-secondary" onClick={connect} color="secondary" >Connect wallet</button>;
    }  
    else return <button className ="btn btn-secondary" onClick={connect} color="secondary" >Connect wallet</button>;
   
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light" style = {{ justifyContent: 'center'}}>
        <div className="container-fluid">
            <div className="navbar-brand">  
              <img src = {logo} style ={{width: '15%'}}></img>
            </div>    
            {active
              ? <div className ="border-radius" style ={{padding:'10px'}}>
                  <h4>{ account.substring(0,6) + `...` + account.substring(38)}
                  </h4>
                </div>
              : correctChainId ()
            }      
        </div>
      </nav>
    </header>
  );
}

export default Header;

