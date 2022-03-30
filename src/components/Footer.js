import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer =  () => {
  return (
    <footer>
            <div className="flex flex-row justify-center text-center" style={{ textAlign: 'center' }}>
                {`Created by`}:{' '}
                <a target="_blank" rel="noreferrer" href="https://twitter.com/AndreCronjeTech">
                    <b>
                    <span>@AndreCronjeTech</span>
                    </b>
                </a>{'  '}
                {`and built by`}:{' '}
                <a target="_blank" rel="noreferrer" href="https://twitter.com/">
                    <b>
                        <span>Mr  T. </span>
                    </b>
                </a>{' '}
            </div>
            <div className="flex flex-row justify-center" style={{ textAlign: 'center' }}>
                <span>
                    {`Donations`}:{' '}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://ftmscan.com/address/0x2D22557D6a1b28Fa078fd8264b107A292AF878a4"
                    >
                        <b>
                            <span>{'0x2D22557D6a1b28Fa078fd8264b107A292AF878a4'}</span>
                        </b>
                    </a>
                </span>
            </div>
    </footer> 

  );
}

export default Footer;
