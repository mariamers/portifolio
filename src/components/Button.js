import React from 'react'

const Button = ({children}) => {
  return (
    <button className='bg-Green text-white p-4 rounded-md text-base'>{children}</button>
  )
}

export default Button