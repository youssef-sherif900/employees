import React from 'react'

function SideBarIcon(props) {
  return (
    <div className='flex flex-col items-center  px-3 py-6 hover:cursor-pointer' onClick={props.handleClick}>
      {props.icon}
       <p className='text-sm font-medium text-white flex'>
            {props.title}
        </p>
  </div>
  )
}

export default SideBarIcon