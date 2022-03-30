import '../App.css';
import React from 'react'
function NavSummoner() {
 
  return (
    <div>
        <button type="button" className = "btn btn-outline-secondary" >Approve Contract</button>
        {' '}    
        <button type="button" className = "btn btn-outline-secondary" >Daycare All</button>
        {' '}
        <button type="button" className = "btn btn-outline-secondary" >Daycare Selected</button>
        {' '}       
    </div>
  );
}

export default NavSummoner;