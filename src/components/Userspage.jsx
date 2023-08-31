import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Labelinputs from './Labelinputs';
import ProfileCard from './ProfileCard';





function Userspage() {
    const [form, setForm]= useState({
        name:"",
        position:"",
        department:"",
        present:true
    })

    const [data , setData] = useState([])

let handleChange = (e)=>{
    const {name, value} = e.target;
    setForm( prev =>{
        return{
            ...prev,
            [name] : value
        }
    }
      
    )
}




    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


let handleSubmit = (e)=>{
    e.preventDefault()
   setData(prev =>{
    return[...prev,form]
   }

   )
   setForm({
    name:"",
    position:"",
    department:"",
    present:true
   })
   handleClose()
}
  




  return (
    <div className='absolute overflow-hidden h-full w-full bg-[#f7f8f9] '>
     <Stack spacing={2} direction="row" sx={{
        margin:"25px"
     }}>
    <input class="mt-10 p-12 placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500  focus:ring-sky-500 focus:ring-1 sm:text-sm"
     placeholder="Search for anything..."
      type="text"
       name="search"/>
    <Button onClick={handleClickOpen} style={{whiteSpace:"nowrap", fontSize:"12px",height:"30px"}}
   variant="contained" color='primary'>
    <AddIcon sx={{
        fontSize:"20px"
    }}/>
    Add new</Button>

    <Dialog
        fullWidth={true}
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle className='text-[#23aaeb]'>NEW EMPLOYEE</DialogTitle>
        <hr className='mx-10 border-[#23aaeb]'/>
        <DialogContent>

        <h3 className='text-[#23aaeb]'>
            personal info
        </h3>
        <hr className=' mt-2 w-[35px] border-b-[5px] border-[#23aaeb24]'/>

        <div className='flex items-center justify-start'>
        <div className=' flex items-center justify-center w-[175px] h-[100px] mt-6 border-dashed border-2 border-gray-500 whitespace-nowrap'>
          <p>Drag Image Here</p>
        </div>
         <div className='flex flex-col items-center'>
        <Labelinputs label="name" name="name" onChange={handleChange} />
        <Labelinputs label="phone" name="phone" onChange={handleChange} />
         </div>
         <div className='flex flex-col items-center'>
        <Labelinputs label="date" name="name" onChange={handleChange}  />
        <Labelinputs label="email" name="email" onChange={handleChange}  />
         </div>
        </div>





        <h3 className='text-[#23aaeb]'>
            office info
        </h3>
        <hr className=' mt-2 w-[35px] border-b-[5px] border-[#23aaeb24]'/>
        <TextField
    style={{
        width:"75%",
        margin:"25px",
        padding:"10px"
    }}
    autoFocus
    margin="dense"
    id="office"
    label="office"
    type="text"
    variant="standard"
    name="office"
    value={handleChange}
  />
        <div className='flex items-center justify-start'>
        <div className='flex flex-col items-center'>
        <Labelinputs label="department" name="department"onChange={handleChange} />
        <Labelinputs label="role"  name="role" onChange={handleChange} />
         </div>
         <div className='flex flex-col items-center'>
        <Labelinputs label="attendence profile" name="attendence profile" value={handleChange} />
        <Labelinputs label="position" name="position "value={handleChange} />
         </div>
        </div>

        <Labelinputs label="position" name="position" value={handleChange} />




        <h3 className='text-[#23aaeb]'>
            Work from home
        </h3>
        <hr className=' mt-2 w-[35px] border-b-[5px] border-[#23aaeb24]'/>
       <div className='flex mt-3'>
       <input type='checkbox'/>
       <p className='text-bold '> Allow employee to work from home</p>
       </div>

         
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose}>cancel</Button>
          <Button onClick={handleSubmit}>save</Button>
        </DialogActions>
      </Dialog>


    </Stack>



          <div className='flex' >
              {data.map(el =>{
                console.log(data)
                  return(
                    <div className='p-4'>
                    <ProfileCard name={el.name}/>
                    </div>
                  )
              })}
          </div>
    
    </div>
  )
}

export default Userspage