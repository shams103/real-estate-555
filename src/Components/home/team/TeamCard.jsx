import React from 'react'
import { team } from "../../data/Data"

const TeamCard = () => {
  return (
    <>
    <div className="mtop grid3 content">
         {team.map((val, index) => (
            <div className="box" key={index}>
                <button className="btn3">{val.list} Listing</button>
                <div className="details">
                    <div className="img">
                        <img src={val.cover} alt="" />
                        <i className='fa-solid fa-circle-check'></i>
                    </div>
                    <i className='fa fa-location-dot'></i>
                    <label >{val.address}</label>
                    <h4>{val.name}</h4>
                    
                    <ul>
                    {val.icon.map((icon, index) => (
                      <li key={index}>{icon}</li>
                    ))}
                    </ul>

                  <div className="button flex">
                    <button>
                        <i className="fa fa-envelope"></i>
                    </button>

                    <button >
                        <i className="fa fa-phone-alt"></i>  
                    </button>
                  </div>
                </div>
            </div>
              ))}
         </div>
      
    </>
  )
}

export default TeamCard
