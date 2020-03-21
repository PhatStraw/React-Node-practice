import React, { useState, useEffect } from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import {Link} from "@reach/router"
export default function userCondition() {
    const [user, setUser] = useState()

    if (user) {
        return (
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Button</Button>
            </Card>
        )
    } else {
        return <Link to="login">Login</Link>
    }
    
}