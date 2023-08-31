import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Badge from '@mui/material/Badge';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Button from '@mui/material/Button';

function NavigationBar() {
  return (
    <div className='flex justify-end w-full h-14 items-center p-5 text-[#8997a4]' >
    <div className='flex items-center'>
    <span className='text-[#474747]  text-[15px] mr-5 font-thin'>
    Thursday, 03 Oct 02:08:07 PM
    </span>
    <Button variant='contained' style={{
        borderRadius:"5px",
        backgroundColor:"#27b40c",
        marginRight:"1rem",
        height:"27px",
        width:"97px"
        }}>
    Sign In
    </Button>
    <div className='p-3 mr-4 border-l-solid border-l-2 border-l-solid border-r-2 '>
     <Badge color="secondary" badgeContent={1} sx={{
    "& .MuiBadge-badge": {
      color: "white",
    }
  }}>
          <NotificationsActiveIcon />
        </Badge>
     </div>
     <div className='flex items-center'>
     <p>Ahmed Khaled</p>
     <KeyboardArrowDownIcon />
     </div>

    </div>
    </div>
  )
}

export default NavigationBar