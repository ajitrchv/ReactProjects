import React from 'react'

function BtnContainer({jobs, current, setCurrent}) {
  return (
    <div className='btn-container'>
        {
            jobs.map((item, index)=>{
                return(<button key={item.id}
                onClick={()=>{setCurrent(index);
                console.log(current);}}
                className={
                index === current ? 'job-btn active-btn' : 'job-btn'
                }
                >{item.company}</button>);
            })
        }
    </div>
  )
}

export default BtnContainer