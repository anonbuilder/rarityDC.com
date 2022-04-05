import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card ,ListGroup,Button } from 'react-bootstrap';
const SummonerCard = ({summonerId,summonerClass,summonerImg,summonerLevel,summonerXp, summonerDaycare}) => {

  return ( 
    <Card className="card-daycare">    
        <Card.Body>   
          <Card.Img variant="top" src={summonerImg} alt="" />    
          <Card.Title>{summonerClass}</Card.Title>                 
            <ListGroup  variant="flush">
                <ListGroup.Item >ID: {summonerId}</ListGroup.Item>  
                <ListGroup.Item >LEVEL: {summonerLevel}</ListGroup.Item>
                <ListGroup.Item >XP: {summonerXp}</ListGroup.Item>
                <ListGroup.Item >DAYCARE: {summonerDaycare}</ListGroup.Item>
                <ListGroup.Item > <Button variant="secondary">Go To adventure</Button></ListGroup.Item>   
                <ListGroup.Item > <Button variant="secondary">Daycare</Button></ListGroup.Item>                  
            </ListGroup >
        </Card.Body>
    </Card>
  );
};

export default SummonerCard;

 