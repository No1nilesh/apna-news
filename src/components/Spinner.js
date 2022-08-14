import React from 'react'
import load from './load.gif'
 const Spinner=()=>  {
 
    return (
      <div className='text-center my-3'>
        <img src={load} alt="loading..." />
      </div>
    )
 
}

export default Spinner
