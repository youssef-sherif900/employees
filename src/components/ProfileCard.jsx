import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateIcon from '@mui/icons-material/Create';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
// import Tooltip from './Tooltip';
// import CallEndIcon from '@mui/icons-material/CallEnd';
// import EmailIcon from '@mui/icons-material/Email';



function ProfileCard(props) {
  return (
    <Card sx={{ maxWidth: 375 }}>
    <CardContent>
    <div className='flex items-center justify-around '>
       <div className='flex flex-col items-center '>
        <AccountCircleIcon fontSize='large' className='mb-2' />
        <div className='flex justify-around'>
         <CreateIcon className='p-1'/>
         <PauseCircleOutlineIcon className='p-1' />
         <DeleteForeverIcon className='p-1' />
        </div>
       </div>
       <div>
       <h2 className="whitespace-nowrap text-gray-500">
        {props.name}
       </h2>
       <h3 className="whitespace-nowrap text-3">
        HR Head
       </h3>
       <p className="whitespace-nowrap text-[15px] text-gray-400">
        Business develpoment
       </p>
       <div style={{
        borderRadius:"0.5rem",
        padding:"3px",
        width:"max-content",
        backgroundOpacity: "0.16",
        backgroundColor: "#aaee9c",
        fontFamily: "Lato",
        textAlign:"left"
       }}>
        <p className='text-[#27b40c]  opacity-100  m-0'>Present</p>
       </div>
       </div>
       {/* <div className='flex justify-end items-end'>
       <Tooltip icon={<PriorityHighIcon fontSize='small'/>} />
       <Tooltip icon={<CallEndIcon fontSize='small'/>} />
       <Tooltip icon={<EmailIcon fontSize='small'/>} />
       </div> */}
    </div>
    </CardContent>
    <CardActions className='float-right'>
    </CardActions>
  </Card>
  )
}

export default ProfileCard