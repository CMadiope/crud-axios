import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormCheck } from "react-bootstrap";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  return (
    <Form className='create-form'>
      <Form.Group className='mb-3'>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          placeholder='First Name'
          size='lg'
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          placeholder='Last Name'
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <FormCheck
          label='I agree with the Terms and Conditions'
          onChange={(e) => setCheckbox(!checkbox)}
        />
      </Form.Group>

      <Button size='lg' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default Create;
