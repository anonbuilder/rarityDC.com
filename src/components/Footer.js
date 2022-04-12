import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer =  () => {
  return (
    <footer>
            <div className="" style={{ textAlign: 'center' }}>
                {`Created by`}:{' '}
                <a target="_blank" rel="noreferrer" href="https://twitter.com/AndreCronjeTech">
                    <b>
                    <span>@AndreCronjeTech</span>
                    </b>
                </a>{'  '}
                {`and built by`}:{' '} <a target="_blank" rel="noreferrer" href="https://twitter.com/_martin_dev_">
                    <b>
                        <span>@_martin_dev_</span>
                    </b>
                </a>
                {' and '} <a target="_blank" rel="noreferrer" href="https://twitter.com/anonbuilderok">
                    <b>
                        <span>@anonbuilderok</span>
                    </b>
                </a>
            </div>
    </footer> 

  );
}

export default Footer;
