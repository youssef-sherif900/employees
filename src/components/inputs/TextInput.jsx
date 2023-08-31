import React from "react";
import Form from "react-bootstrap/Form";

function TextInput(props) {
  return (
    <div className="w-full mt-2">
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
       className="w-full h-9 border-solid rounded-md mt-2 border-2"
        type={props.type}
        name={props.name}
        onChange={props.change}
        placeholder={props.placeholder}
      />
      <Form.Text muted></Form.Text>
    </div>
  );
}

export default TextInput;
