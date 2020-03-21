import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Login = () => {
  return (
    <Form >
    <FormGroup>
        <Label for="login" style={{ color: "white" }}>Plain Text (Static)</Label>
        <Input type="email" name="email" id="LoginEmail" placeholder="Email" style={{ color: "white" }}/>
      </FormGroup>
      <FormGroup>
        <Label for="login" style={{ color: "white" }} >Email</Label>
        <Input type="email" name="email" id="LoginEmail" placeholder="Email" style={{ color: "white" }}/>
      </FormGroup>
      {' '}
      <FormGroup>
        <Label for="login" style={{ color: "white" }} hidden>Password</Label>
        <Input type="password" name="password" id="LoginPassword" placeholder="Password" style={{ color: "white" }}/>
      </FormGroup>
      {' '}
      <Button style={{ color: "white" }}>Submit</Button>
    </Form>
  );
}

export default Login;
