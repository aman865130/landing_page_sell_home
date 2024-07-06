import React from 'react'
import Button from './Button'
import img from "../assets/homeImg.svg"

const Hero = () => {
  return (
    <div className='flex flex-col gap-3  md:px-32 my-20'>
      <div className='md:w-3/5'>
        <h1 className='text-7xl font-playFair font-semibold '> Build Your<br/> Dream <span className='text-brightRed'>House</span> </h1>
      </div>
      <div className='flex p-5 max-md:flex-wrap px-12 gap-2'>
        <div className='p-5 flex flex-col gap-3'> 
            <p className='text-xl'> 100% guaranteed build safe, comfortable and transparent with a
            project management for the best result</p>
            <Button title="Free Consultation" />
        </div>
        <div>
            <img src={img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero

