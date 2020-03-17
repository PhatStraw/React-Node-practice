import React, {useState, useEffect} from 'react'
import Card from './card.js'

export default function Center() {
    const [data, setData] = useState()

    useEffect( () => {
        fetch('http://localhost:3000/tweet/all')
        .then(resp => resp.json())
        .then(data=>{
            console.log("DATA",data)
            setData(data)
        })
        .then(tweets =>console.log(tweets, 'tweets'))
        .catch(err=>{
            console.log("CENTER ERROR!!!!!!!1")
            console.log(err)
        })
    }, [])

    return data ?  <Card data={data}/> : <div>loading</div>
}