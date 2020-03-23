import React, { useState, useEffect } from 'react'
import { Card, Button, CardTitle, Input} from 'reactstrap';
import { Link } from "@reach/router"
import Picker from 'emoji-picker-react';
export default function userCondition() {
    const [user, setUser] = useState();
    const [emoji, setEmoji] = useState();

    const onClick = (e, emojiObject) => {
        setEmoji(emojiObject)
    }

    useEffect(() => {
        fetch("http://localhost:3000/users/current", {
            method: 'GET',
            headers: { 'authorization': window.localStorage.getItem("birdie") },
        })
            .then(response => response.json())
            .then(user => setUser(user.user))
            .catch(err => { console.log(err) })
    }, [])


    if (user) {
        return (
            <Card body inverse style={{ backgroundColor: "rgb(21, 32, 43)", borderColor: '#333'}}>
                <div style={{display:"flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: "10px"}}>
                    <CardTitle>{user.name}</CardTitle>
                    <Input type="text" size="large" name="text" id="exampleText" placeholder="What's happening?" style={{width: "80%", backgroundColor: "transparent", border: "none"}}/>
                </div>
                <div style={{display: "flex", justifyContent: "flex-end"}}>
                    {/* TODO: Add emoji to input in onClick */}
                    {/* <Picker onEmojiClick={onClick}/> */}
                    <Button color="primary" style={{width: "80px", }}>Tweet</Button>
                </div>
            </Card>
        )
    } else {
        return <Link to="login">Login</Link>
    }

}