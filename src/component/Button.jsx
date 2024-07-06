import React from 'react'

const Button = (props) => {
  return (
    <div >
      <button className=' bg-sky-500 px-3 py-1 rounded-md hover:bg-white hover:text-black hover:scale-105 transition-all'>{props.title}</button>
    </div>
  )
}

export default Button
