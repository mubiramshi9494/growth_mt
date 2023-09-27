import React from 'react'
import Image from "next/image";
const Landing = () => {
  return (
    <div
    className="bg-cover bg-center bg-no-repeat flex items-center justify-center  md:bg-[100%] sm:bg-[85%]"
    style={{
      backgroundImage: 'url("/Frame 19.png")',
       backgroundSize:'96%'
    }}
  >
    <div>
    <div className="text-center">
      <h1 className="text-6xl font-bold mt-64">Somebody told us sharing customer <br/>testimonials adds credibility. </h1>
    </div>
    <div className="text-center">
      <h1 className="text-2xl font-bold mt-6">So sharing some of them for the sake of it ! </h1>
    </div>
    <div className="text-center ">
      <h1 className="text-5xl font-bold  mt-64">A few of our happy customers </h1>
    </div>
    </div>
  
  </div>
  )
}

export default Landing