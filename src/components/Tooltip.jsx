import React from 'react'

function Tooltip(props) {
  return (
    <Tooltip style={{
        backgroundColor:"#eaeef0",
        height:"20px",
        width:"20px",
        padding:"5px",
        borderRadius:"2rem",
       }} title={<div className=''>
        <div className='"grid grid-cols-3 gap-1"'>
        <div className='flex flex-col'>
        <p>office</p>
        <p>arablocalizer</p>
        </div>
        <div className='flex flex-col'>
        <p>role</p>
        <p>employee</p>
        </div>
        <div className='flex flex-col'>
        <p>copied manger</p>
        <p>mohmed tarek</p>
        </div>
        <div className='flex flex-col'>
        <p>joined date</p>
        <p>12/12/2018</p>
        </div>
        <div className='flex flex-col'>
        <p>manager</p>
        <p>mohmed tarek</p>
        </div>
        </div>
       
       </div>} arrow>
      {props.icon}
    </Tooltip>
  )
}

export default Tooltip