import React from "react"
import Heading from "../../common/Heading"
import TeamCard from "./TeamCard"
import "./team.css"


const Team = () => {
  return (
    <>
    <section className='team background'>
        <div className='container'>
          <Heading title='Our Featured Agents' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
          <TeamCard />
        </div>
      </section>
    </>
  )
}


export default Team
