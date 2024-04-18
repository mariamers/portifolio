import React from 'react'

export default function Card(props) {
  return (
    <div className="overflow-hidden flex flex-grow justify-center items-start relative p-8 rounded-xl border-gray-800 bg-gray-900 h-full">
    <div className='w-full'>
    <h2 className='text-lg font-medium text-center transition group-hover:text-purple-950 text-white pb-4 '>{props.Title}</h2>
        {props.children}
      </div>
    </div>
    
  )
}

