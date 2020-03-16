import React, {useState, useEffect} from 'react'
import Card from './card.js'

export default function Center() {
    const [tweets, setTweets] = useState([])

    useEffect( () => {
        fetch('http://localhost:3000/tweet/all')
        .then(resp => resp.json())
        .then(data=>{
            console.log(data)
            return setTweets(data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

    return <Card tweets={tweets}/>
}