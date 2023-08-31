import React from 'react'
import Form from 'react-bootstrap/Form';

function FormSelectors(props) {
    return (
        <div className='w-full'>
        <label>{props.label}</label>
        <Form.Select onChange={props.change} aria-label="Default select example" className="w-full h-9 border-solid rounded-md mt-2 border-2">
          <option>Select</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        </div>
      );
    }

export default FormSelectors