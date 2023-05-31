import React from 'react';
import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question=({title, info})=> {

  const[toggle, setToggle]=useState(false);

  // console.log(ques)
  return (

        <article className='question'>
          <header>
            <h4>{title}</h4>
            <button className='question-btn' onClick={()=>{setToggle(!toggle)}}>
            {toggle? <AiOutlinePlus/>:<AiOutlineMinus/>}
            </button>
          </header>
          {toggle && <p>{info}</p>}
      </article>
      )
    }

export default Question