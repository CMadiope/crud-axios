import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormCheck } from "react-bootstrap";

const Create = () => {
  return (
    <Form>
      <Form.Group className='mb-3'>
        <Form.Label>First Name</Form.Label>
        <Form.Control placeholder='First Name' size='lg' />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Last Name</Form.Label>
        <Form.Control placeholder='Last Name' />
      </Form.Group>
      <Form.Group className='mb-3'>
        <FormCheck label='I agree with the Terms and Conditions' />
      </Form.Group>

      <Button size='lg' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default Create;
