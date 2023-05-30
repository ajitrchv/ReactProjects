import React from 'react';
import { useState } from 'react';
import {FcNext, FcPrevious} from 'react-icons/fc';
import {FaQuoteRight} from 'react-icons/fa';



function Review(props) {
  
  const [curr, setCurr]=useState(0)
  const reviews = props.reviews
  
  const prevHandler=()=>{
    if(curr === 0){
      setCurr(reviews.length-1)
    }
    else setCurr(current=>{
      const newIndex = curr-1;
      return newIndex;

    })
  }

  const nextHandler=()=>{
    if(curr === reviews.length-1){
      setCurr(0)
    }
    else setCurr(current=>{
      const newIndex = curr+1;
      return newIndex;

    })
  }

  const{name, job, image, text} = reviews[curr]
  
  return (
    <>
    <article className="review">
      <div className="img-container">
        <img src={image} className="person-img " alt={name}></img>
        <span className='quote-icon'>
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <h5 className='job'>{job}</h5>
      <p className='info'>{text}</p>
      <div className='btn-container'>

      <button type='button' className='prev-btn' onClick={()=>prevHandler()}><FcPrevious/></button>
      <button type='button' className='next-btn' onClick={()=>nextHandler()}><FcNext/></button>

      </div>
      
      <button type='button' className='btn' onClick={()=>{
        setCurr(Math.floor(Math.random() * reviews.length))
      }}>Surprise Me!</button>
      
    </article>
    </>
  )
}

export default Review