import React from 'react'
import text from './data'
import { useState } from 'react'

function App() {
  const [arr, setArr] = useState([])
  const [num, setNum] = useState(0)

  const handleSubmit = (e)=>{
  e.preventDefault();
  setArr(text.slice(0,num))
  console.log(arr);
}
  return (
    <section className='section-center'>
      <h4>I can help you generate Lorem!</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='paranum'>Number of lines:</label>
        <input type='number'
        onChange={(e)=>{setNum(e.target.value)}}
        min={1}
        max={8}
        value={num}
        ></input>
        <button className='btn' type='submit'>Generate</button>
      </form>
      <article className='lorem-text'>
        {
          arr.map((item)=>{
            return (
            <p>
              {item}
            </p>
            );
          })
        }
      </article>
    </section>
  );
}

export default App