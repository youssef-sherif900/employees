import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import Avatar from "@mui/material/Avatar";
import CallEndIcon from "@mui/icons-material/CallEnd";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

function ContactIcons() {
  return (
    <div className="flex items-end mr-1 mb-1">
      <Avatar sx={{ bgcolor: "#eaeef0", width: 24, height: 24, margin: "3px" }}>
        <EmailIcon sx={{ color: "#313030", width: 10, height: 10 }} />
      </Avatar>
      <Avatar sx={{ bgcolor: "#eaeef0", width: 24, height: 24, margin: "3px" }}>
        <CallEndIcon sx={{ color: "#313030", width: 10, height: 10 }} />
      </Avatar>
      <Avatar sx={{ bgcolor: "#eaeef0", width: 24, height: 24, margin: "3px" }}>
        <PriorityHighIcon sx={{ color: "#313030", width: 10, height: 10 }} />
      </Avatar>
    </div>
  );
}

export default ContactIcons;
