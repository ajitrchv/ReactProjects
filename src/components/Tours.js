import React from 'react'
import { tourData } from '../data';
function Tours() {
  return (
    <div>
            <section className="section" id="tours">
      <div className="section-title">
        <h2>featured <span>tours</span></h2>
      </div>

      <div className="section-center featured-center">
        {
        tourData.map((item)=>{
          return(
          <article className="tour-card">
          <div className="tour-img-container">
            <img src={item.imgsrc} className="tour-img" alt="" />
            <p className="tour-date">{item.date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{item.h4}</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {item.location}
              </p>
              <p>{item.duration}</p>
              <p>{item.amount}</p>
            </div>
          </div>
        </article>
          );
        })
        }

      </div>
    </section>
    </div>
  )
}

export default Tours