import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "../styles/login.css"

const Register = () => {
    const [userName, setUserName] = useState()
    const [name, setName] = useState()
    const [userPassword, setUserPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        
    }
    return (
        <div className="formWrapper">
            <Form onSubmit={handleSubmit} style={{ maxWidth: "500px", padding: "15px", borderColor: "2px solid white", margin: "auto" }}>
                <FormGroup style={{ backgroundColor: "rgb(21, 32, 43)" }}>
                    <Label for="Register" style={{ color: "white" }}>Username</Label>
                    <Input type="text" name="userName" id="RegisterEmail" placeholder="Username" style={{ backgroundColor: "rgb(21, 32, 43)", color: "white" }} onChange={e => setUserName(e.target.value)} />
                </FormGroup>
                <FormGroup style={{ backgroundColor: "rgb(21, 32, 43)" }}>
                    <Label for="Register" style={{ color: "white" }} >Name</Label>
                    <Input type="name" name="name" id="Registername" placeholder="name" style={{ backgroundColor: "rgb(21, 32, 43)", color: "white" }} onChange={e => setName(e.target.value)}/>
                </FormGroup>
                <FormGroup style={{ backgroundColor: "rgb(21, 32, 43)" }}>
                    <Label for="Register" style={{ color: "white" }}>Password</Label>
                    <Input type="password" name="password" id="RegisterPassword" placeholder="Password" style={{ backgroundColor: "rgb(21, 32, 43)", color: "white" }} onChange={e => setUserPassword(e.target.value)}/>
                </FormGroup>
                <Button style={{ color: "white" }} type="submit">Submit</Button>
            </Form>
        </div>

    );
}

export default Register;