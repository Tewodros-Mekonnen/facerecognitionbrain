import React from 'react';


// since this component does not have a State
// we can just write a pure function. 

const Navigation = () =>{
    return(
        <nav style={{display:'flex', justifyContent:'flex-end', paddingRight:'40px'}}>
            <p className='f3 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
    )
}

export default Navigation; 
 