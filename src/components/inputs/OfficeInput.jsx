import React from 'react'
import Form from "react-bootstrap/Form";

function OfficeInput(props) {
  return (
    <div className="mt-2 p-2">
    <label> Office</label>
    <Form.Select onChange={props.change} name='office' className="w-full h-9 border-solid rounded-md mt-2 border-2" aria-label="Default select example">
    <option>Name</option>
      <option value="ArabicLocalizer">ArabicLocalizer</option>
    </Form.Select>
    </div>
  )
}

export default OfficeInput