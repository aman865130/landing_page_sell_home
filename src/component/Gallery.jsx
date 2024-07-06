import React from 'react'
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";
const Gallery = () => {
  return (
    <div className='md:px-32 flex flex-col gap-5'>
      <div>
        <p className='text-4xl font-playFair '>Build professional<br></br> valuable room</p>
      </div>
      <div className='flex gap-3  max-md:flex-wrap max-md:px-11 justify-between'>
        <div><img className='rounded-md' src={img1} alt="" /></div>
        <div><img className='rounded-md' src={img2} alt="" /></div>
        <div><img className='rounded-md' src={img3} alt="" /></div>
      </div>
    </div>
  )
}

export default Gallery
