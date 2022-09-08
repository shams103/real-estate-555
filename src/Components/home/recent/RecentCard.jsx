import React from "react"
import { list } from "../../data/Data"
import  { useState } from "react"

const RecentCard = () => { 

  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val) => {
          const { id, cover, category, location, name, price, type } = val
          return (
            <div className='box shadow' key={id}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <i className='fa fa-heart'></i>
                </div>
                <h4>{name}</h4>
                <p className="poo">
                  <i className='fa fa-location-dot'></i> {location}
                </p>
              </div>
              <div className='button flex'>
                <span>{type}</span>
                <div>
                  <button className='btn2'>{price}</button> <label htmlFor=''>/sqft</label>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
