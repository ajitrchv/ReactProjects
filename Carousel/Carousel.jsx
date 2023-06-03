import React from 'react';
import Slider from "react-slick";
import { shortList, longList, list } from './data';
import { FaQuoteRight } from 'react-icons/fa';
function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1,
    // fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  }
  return (
    <div className='slick-container'>
        <Slider {...settings}>
        {
        list.map((item)=>
            {return(<article key={item.id}>
            <img src={item.image} className='person-img'></img>
            <h2 className='name'>{item.name}</h2>
            <p className='title'>{item.title}</p>
            <p className='text'>{item.quote}</p>
            <FaQuoteRight className='icon'/>
        </article>);})}
        </Slider>
    </div>
  )
}

export default Carousel