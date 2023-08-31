import React, { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ProfileCard from "./ProfileCard";
import OfficeInput from "./inputs/OfficeInput";
import FormSelectors from "./inputs/FormSelectors";
import TextInput from "./inputs/TextInput";

function Userspage() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    department: "",
    present: true,
  });

  const [data, setData] = useState([]);

  let handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setData((prev) => {
      return [...prev, form];
    });
    setForm({
      name: "",
      position: "",
      department: "",
      present: true,
    });
    handleClose();
  };

  return (
    <div className="absolute overflow-hidden h-full w-full bg-[#f7f8f9] ">
      <Stack
        spacing={2}
        direction="row"
        sx={{
          margin: "25px",
        }}
      >
        <input
          class="mt-10 p-12 placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500  focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
        />
        <Button
          onClick={handleClickOpen}
          style={{ whiteSpace: "nowrap", fontSize: "12px", height: "30px" }}
          variant="contained"
          color="primary"
        >
          <AddIcon
            sx={{
              fontSize: "20px",
            }}
          />
          Add new
        </Button>

        <Dialog
          fullWidth={true}
          maxWidth={"md"}
          open={open}
          onClose={handleClose}
        >
          <DialogTitle className="text-[#23aaeb]">NEW EMPLOYEE</DialogTitle>
          <hr className="mx-10 border-[#23aaeb]" />
          <DialogContent>
            <h3 className="text-[#23aaeb]">personal info</h3>
            <hr className=" mt-2 w-[35px] border-b-[5px] border-[#23aaeb24]" />

            <div className="flex items-center justify-start w-full">
              <label className="flex items-center justify-center w-1/3 h-[100px] mt-6 border-dashed border-2 border-gray-500 whitespace-nowrap">
                <input className="hidden" type="file" name="photo" />
                Drag Image Here
              </label>
              <div className="flex flex-col items-center p-2 w-1/3">
                <TextInput label="name" name="name" change={handleChange} />
                <TextInput label="phone" name="phone" change={handleChange} />
              </div>
              <div className="flex flex-col items-center p-2 w-1/3">
              <TextInput label="date" name="date" change={handleChange} />
                <TextInput label="email" name="email" change={handleChange} />
              </div>
            </div>

            <h3 className="text-[#23aaeb]">office info</h3>
            <hr className=" mt-2 w-[35px] border-b-[5px] border-[#23aaeb24]" />
            <OfficeInput change={handleChange} />
            <div className="flex items-center justify-start">
              <div className="flex flex-col items-center w-full p-2">
                <FormSelectors label="Department" change={handleChange} />
                <TextInput label="Role" name="role" change={handleChange} placeholder="Select" />
              </div>
              <div className="flex flex-col items-center w-full p-2">
                <FormSelectors label="Department" change={handleChange} />
                <FormSelectors label="Department" change={handleChange} />
              </div>
            </div>
            <div className="w-[50%] p-2">
              <FormSelectors label="Direct Manager" change={handleChange} />
            </div>

            <div className="p-2 w-full">
              <h3 className="text-[#23aaeb]">Work from home</h3>
              <hr className=" mt-2 w-[35px] border-b-[5px] border-[#23aaeb24]" />
              <div className="flex mt-3">
                <input type="checkbox" />
                <p className="text-bold "> Allow employee to work from home</p>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>cancel</Button>
            <Button onClick={handleSubmit}>save</Button>
          </DialogActions>
        </Dialog>
      </Stack>

      <div className="flex flex-wrap">
        {data.map((el) => {
          console.log(data);
          return (
            <div className="p-4">
              <ProfileCard name={el.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Userspage;
