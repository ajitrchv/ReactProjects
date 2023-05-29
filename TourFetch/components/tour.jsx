import React from 'react'
import { useState } from 'react';

function Tour(props) {
    let item = props.item;
    let niHandler = props.niHandler;
    const [isRM,setIsRM] = useState(true);
  return (
            <article className='single-tour'>
            <img src={item.image} alt={item.name} className='img'></img>
            <span className='tour-price'>${item.price}</span>
            <div className='tour-info'>
            <h5>{item.name}</h5>
            
            {
                <p>
                    {
                        isRM?
                        `${item.info.substring(0,300)}...`
                        : 
                        item.info
                    }
                    <button type="button"  className='info-btn' onClick={()=>setIsRM(!isRM)}>
                        {isRM?'Read more':'Show less'}
                    </button> 
                </p>
                
            }
            
            <button type="button" className='btn btn-block delete-btn' onClick={()=>niHandler(item.id)}>Not Interested</button>
            </div>
            </article>

  )
}

export default Tour