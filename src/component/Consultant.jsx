import React from 'react'
import Button from './Button'
import img from '../assets/consultationImg.svg'
const Consultant = () => {
  return (
    <div className='flex md:px-32 max-md:flex-wrap max-md:px-10'>
      <div>
        <img src={img} alt="" />
      </div>
      <div className='flex flex-col justify-center px-32 gap-8 '>
        <h1 className='text-6xl font-playFair'>Realize Your<br/> Dream Project<br/> With <span className='text-brightRed'>Archmove</span></h1>
        <Button title="FREE CONSULTANT"/>
      </div>
    </div>
  )
}

export default Consultant
