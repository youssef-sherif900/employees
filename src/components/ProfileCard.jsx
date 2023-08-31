import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import ContactIcons from "./ContactIcons";

function ProfileCard(props) {
  return (
    <Paper>
      <div className="flex">
        <div className="flex flex-col items-center justify-center p-1 border-r-2 m-2">
          <Avatar
            sx={{
              bgcolor: "rgb(255, 87, 34)",
              scale: "1.5",
              marginTop: "1rem",
            }}
            src={props.photo}
          >
          </Avatar>
          <div className="flex justify-around mt-3">
            <CreateIcon className="p-1 text-gray-400" />
            <PauseCircleOutlineIcon className="p-1  text-gray-400" />
            <DeleteForeverIcon className="p-1  text-gray-400" />
          </div>
        </div>
        <div className="p-2">
          <h2 className="whitespace-nowrap text-gray-500">{props.name}</h2>
          <h3 className="whitespace-nowrap text-3">HR Head</h3>
          <p className="whitespace-nowrap text-[15px] text-gray-400">
            Business develpoment
          </p>
          <div
            style={{
              borderRadius: "0.5rem",
              padding: "3px",
              width: "max-content",
              backgroundOpacity: "0.16",
              backgroundColor: "#aaee9c",
              fontFamily: "Lato",
              textAlign: "left",
            }}
          >
            <p className="text-[#27b40c]  opacity-100  m-0">Present</p>
          </div>
        </div>
        <ContactIcons />
      </div>
    </Paper>
  );
}

export default ProfileCard;
