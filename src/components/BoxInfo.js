import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const BoxInfo = (props) => {
  return (
    <div style = {{border: '4px solid #ffffffc9',padding: '20px', margin: '50px 0', borderRadius: '0.25rem'}}>
      <div className="jumbotron">    
        <h1 className="display-3">Hi</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>        
      </div>
    </div>
  );
};

export default BoxInfo;