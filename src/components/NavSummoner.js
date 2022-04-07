import '../App.css';
import React from 'react'
import { useSelector} from 'react-redux'
import { Card ,ListGroup,Button } from 'react-bootstrap';

function NavSummoner({dayCareFunc}) {

  const summonersFull = useSelector (state => state.summoners.data  )

  return (
    <div className="content-button-summoners">
        <Button variant="secondary" size="lg" onClick={() => dayCareFunc(summonersFull)}>Daycare All</Button>        
        {' '}
        {/* <button type="button" className = "btn btn-outline-secondary" >Daycare Selected</button>
        {' '}        */}
    </div>
  );
}

export default NavSummoner;