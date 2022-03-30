import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>   
    </div>
  );
}

export default Example;