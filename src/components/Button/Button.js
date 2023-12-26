import React from 'react'

const Button = ({children, disabled}) => {
  return (
    <button disabled = {disabled} className='w-full h-full text-center bg-[#4cb5f9]'>{children}</button>
  )
}

export default Button

