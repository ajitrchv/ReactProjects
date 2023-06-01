import React from 'react'
import { useState } from 'react'
import MenuItem from './MenuItem'

function Menu(props) {
    const menuData=props.menuData
    const [cat, setCat] = useState(menuData)
    const [all, setAll]=useState(true)
    const [lunch, setLunch]=useState(false)
    const [breakfast, setBreakfast]=useState(false)
    const [shake, setShake]=useState(false)
    const handleBreakfast=()=>{
        
    }

    return (
        <>
            <div className='btn-container'>
                <button className={all? 'btn' : 'btn-off'} onClick={()=>{
                    setCat(menuData)
                    setAll(!all)
                    setBreakfast(false)
                    setLunch(false)
                    setShake(false)
                    }}>All</button>

                <button className={breakfast? 'btn' : 'btn-off'} onClick={()=>{
                    setCat(menuData.filter((item)=>
                    item.category === 'breakfast'))
                    setBreakfast(!breakfast)
                    setAll(false)
                    setLunch(false)
                    setShake(false)
                    }}>
                        Breakfast</button>
                        
                <button className={lunch? 'btn' : 'btn-off'} onClick={()=>{
                    setCat(menuData.filter((item)=>
                    item.category === 'lunch'))
                    setLunch(!lunch)
                    setAll(false)
                    setBreakfast(false)
                    setShake(false)
                    }}>Lunch</button>

                <button className={shake? 'btn' : 'btn-off'} onClick={()=>{setCat(menuData.filter((item)=>
                    item.category === 'shakes'))
                    setShake(!shake)
                    setAll(false)
                    setBreakfast(false)
                    setLunch(false)
                    }}>Shake</button>
            </div>
            <section className='menu section-center'>
            {cat.map((item)=>{
                return(
                    <MenuItem key={item.id} {...item}/>
                );
            })}
        </section>
        </>
  )
}

export default Menu