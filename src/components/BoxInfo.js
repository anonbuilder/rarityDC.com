import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const BoxInfo = (props) => {
  return (
    <div style = {{border: '4px solid #ffffffc9',padding: '20px', margin: '50px 0', borderRadius: '0.25rem'}}>
      <div className="jumbotron">    
        <h1 className="display-3">Hi adventurer!</h1>
        <p className="lead">Let's send you summoner to the daily adventure.</p>        
      </div>
    </div>
  );
};

export default BoxInfo;