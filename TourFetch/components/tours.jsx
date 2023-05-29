import React from 'react';
import Tour from './tour';

function Tours(props) {
    let tours = props.tours;
    let niHandler = props.niHandler;
  return (
    <section>
        <div className='title'>
            <h2>Our Tours</h2>
            <div className="title-underline"></div>
        </div>
        <div className='tours'>
    {tours.map((item)=>{
        return(
          <Tour key={item.id} item={item} niHandler={niHandler}/>
        );
      })}
      </div>
    </section>
  )
}

export default Tours