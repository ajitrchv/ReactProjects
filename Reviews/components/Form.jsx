import React from 'react'
import { useState, useRef } from 'react'
function Form() {
    const [fname, setFName] = useState('User')
    const [lname, setLName] = useState('Name')

    const refFanme = useRef(null)
    const refLanme = useRef(null)

    const handleClick=async ()=>{
        setFName(refFanme.current.value)
        setLName(refLanme.current.value)

    }


    
  return (
    <div>
        <section>
            <h1>Hi {fname} {lname}!</h1>
        </section>

        <form>

            <input type='text' placeholder='First Name' ref={refFanme} onChange={(e)=>{setFName(e.target.value)}}></input>
            <input type='text' placeholder='Last Name' ref={refLanme}></input>
            <button type='button' onClick={()=>handleClick()}>Say Hi</button>

        </form>

    </div>
  )
}

export default Form