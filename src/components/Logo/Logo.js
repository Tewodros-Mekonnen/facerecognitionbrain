import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css'


// since this component does not have a State
// we can just write a pure function. 

const Logo = () =>{
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2 bc3" options={{ max : 50 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"> </div>
            </Tilt>
        </div>
    );
}

export default Logo; 