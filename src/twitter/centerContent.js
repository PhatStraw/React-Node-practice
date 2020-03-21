import React, { useState, useEffect } from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import UserCondition from './userCondition.js'
import CardComp from './card.js'

export default function Center() {
    const [data, setData] = useState()
    const [user, setUser] = useState()

    useEffect(() => {
        fetch('http://localhost:3000/tweet/all')
            .then(resp => resp.json())
            .then(data => {
                console.log("DATA", data)
                setData(data)
            })
            .then(tweets => console.log(tweets, 'tweets'))
            .catch(err => {
                console.log("CENTER ERROR!!!!!!!1")
                console.log(err)
            })
    }, [])

    if (data) {
        return (
            <div>
                <div>
                    <h2 className="home-header">Home</h2>
                    <UserCondition />
                </div>
                <CardComp data={data} />
            </div>
        )
    } else {
        return <div>loading</div>
    }
}