import React, { useState } from 'react';
import {navigate} from '@reach/router'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "../styles/login.css"

const Login = () => {
    const [userName, setUserName] = useState()
    const [userPassword, setUserPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/users/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                user_name: userName,
                password: userPassword
             }) 
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            window.localStorage.setItem("birdie", data.token)
            navigate("/")
        })
        .catch(err => {console.log(err)})
    }
    return (
        <div className="formWrapper">
            <Form onSubmit={handleSubmit} style={{ maxWidth: "500px", padding: "15px", borderColor: "2px solid white", margin: "auto" }}>
                <FormGroup style={{ backgroundColor: "rgb(21, 32, 43)" }}>
                    <Label for="login" style={{ color: "white" }}>Username</Label>
                    <Input type="text" name="userName" id="LoginEmail" placeholder="Username" style={{ backgroundColor: "rgb(21, 32, 43)", color: "white" }} onChange={e => setUserName(e.target.value)} />
                </FormGroup>
                <FormGroup style={{ backgroundColor: "rgb(21, 32, 43)" }}>
                    <Label for="login" style={{ color: "white" }}>Password</Label>
                    <Input type="password" name="password" id="LoginPassword" placeholder="Password" style={{ backgroundColor: "rgb(21, 32, 43)", color: "white" }} onChange={e => setUserPassword(e.target.value)}/>
                </FormGroup>
                <Button style={{ color: "white" }} type="submit">Submit</Button>
            </Form>
        </div>

    );
}

export default Login;
