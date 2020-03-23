import React, { useState, useEffect } from 'react'
import { Card, Button, Media, Input} from 'reactstrap';
import { Link } from "@reach/router"
import Picker from 'emoji-picker-react';
export default function userCondition() {
    const [user, setUser] = useState();
    const [emoji, setEmoji] = useState();
    const [message, setMessage] = useState();

    // const onClick = (e, emojiObject) => {
    //     setEmoji(emojiObject)
    // }

    const onClick = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/tweet/create", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                        'authorization': window.localStorage.getItem("birdie") 
            },
            body: JSON.stringify({ 
                user_id: null,
                tweet: message
             })
        }) 
        .then(response => response.json())
        .then(()=> setMessage(""))
        .catch(err => {console.log(err)})
    }

    useEffect(() => {
        fetch("http://localhost:3000/users/current", {
            method: 'GET',
            headers: { 'authorization': window.localStorage.getItem("birdie") }
        })
            .then(response => response.json())
            .then(user => setUser(user.user))
            .catch(err => { console.log(err) })
    }, [])


    if (user) {
        return (
            <Card body inverse style={{ backgroundColor: "rgb(21, 32, 43)", borderColor: '#333'}}>
                <div style={{display:"flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: "10px"}}>
                <Media style={{maxHeight: "60px", maxWidth: "60px", borderRadius: "50%"}} src={user.avi} alt="Card image cap" />
                    <Input type="text" onChange={(e) => {setMessage(e.target.value)}} placeholder="What's happening?" style={{width: "80%", backgroundColor: "transparent", border: "none", color: "white"}}/>
                </div>
                <div style={{display: "flex", justifyContent: "flex-end"}}>
                    {/* TODO: Add emoji to input in onClick */}
                    {/* <Picker onEmojiClick={onClick}/> */}
                    <Button color="primary"  onClick={onClick} style={{width: "80px", }}>Tweet</Button>
                </div>
            </Card>
        )
    } else {
        return <Link to="login">Login</Link>
    }

}