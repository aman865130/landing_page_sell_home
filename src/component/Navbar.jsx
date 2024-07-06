import React from 'react'
import logo from "../assets/logo-arch.svg"
import Button from './Button'

const Navbar = () => {
  return (
    <div className='flex m-2 p-3 justify-between md:px-32'>
      <div className=' flex flex-row items-center gap-12 '>
        <img src={logo} alt="" />
        <div className='hidden md:flex gap-5'>
        <a  href='' className="hover:text-brightRed transition-all">How it works</a>
        <a  href='' className="hover:text-brightRed  transition-all">Design Gallery</a>
        <a  href='' className="hover:text-brightRed transition-all">Architects</a>
        <a  href='' className="hover:text-brightRed transition-all">Articles</a>
      </div>
      </div>
      <div className='flex gap-2 font-playFair'>
        <a className='hover:text-brightRed transition-all' href="">Sign In</a>
        <Button title="Sign Up"/>
      </div>
    </div>
  )
}

export default Navbar
