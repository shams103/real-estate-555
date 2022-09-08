import React from "react"
import Heading from "../../common/Heading"
import { location } from "../../data/Data"
import "./location.css"

const Location = () => {
  return (
    <>
      <section className='location padding'>
        <div className='container'>
          <Heading title='Explore By Location' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />

          <div className='content grid3 mtop'>
            {location.map((swag, index) => (
              <div className='box' key={index}>
                <img src={swag.cover} alt='' />
                <div className='overlay'>
                  <h5>{swag.name}</h5>
                  <p>
                    <label>{swag.Villas}</label>
                    <label>{swag.Offices}</label>
                    <label>{swag.Apartments}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Location
