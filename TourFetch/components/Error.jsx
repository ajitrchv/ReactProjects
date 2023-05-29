import React from 'react'

function Error(props) {
  let bringtours = props.fetchTours
  return (
    <div className='title'>
      <h1>No Tours left</h1>
      <button type="button" style={{marginTop:'2rem'}} className='btn' onClick={()=>bringtours()}>Bring back all tours</button>
    </div>
  )
}

export default Error