import React from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import '../styles/card.css'

export default function CardComp(props) {
    return (
        <div>
            {
                props.data.tweets.slice(0).reverse().map(tweet => (
                    <Card body outline style={{ backgroundColor: "rgb(21, 32, 43)", color: "white", border: "1px solid rgb(56, 68, 77)" }}>
                        <CardTitle>{tweet.user_id}</CardTitle>
                        <CardText>{tweet.tweet}</CardText>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <Button style={{ margin: '10px', width: '20%', fontSize: '8px' }} color="primary">
                                Likes {tweet.likes}
                            </Button>
                            <Button style={{ margin: '10px', width: '20%', fontSize: '8px' }} color="primary">Retweets   {tweet.retweets}</Button>
                            <Button style={{ margin: '10px', width: '20%', fontSize: '8px' }} color="primary">Comments   {tweet.comments}</Button>
                        </div>
                    </Card>
                ))
            }
        </div>
    )
}