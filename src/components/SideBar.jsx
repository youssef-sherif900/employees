import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import TvIcon from '@mui/icons-material/Tv';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import GroupIcon from '@mui/icons-material/Group';
import SideBarIcon from './SideBarIcon';

let icons = [
    {icon:<DashboardIcon className='text-white'/> ,title:"Dashboard",id:1},
    {icon:<TvIcon className='text-white'/> ,title:"Workplace",id:2},
    {icon:<FreeBreakfastIcon className='text-white'/> ,title:"Holiday",id:3},
    {icon:<GroupIcon className='text-white'/> ,title:"Employees",id:4},
]

function SideBar() {

  return (
    <div class="Rectangle-898 p-10 m-0 flex flex-col justify-start align-middle ">
      

      {icons.map(el =>{
        return(
            <SideBarIcon key={el.id} icon={el.icon} title={el.title} />
        )
      })}

     
    </div>
  )
}

export default SideBar