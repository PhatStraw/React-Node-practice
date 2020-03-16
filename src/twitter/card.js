import React from 'react'
import '../styles/card.css'

export default function Card({ tweets }) {
    return (
        <div>
            {
                tweets.map(tweet => (
                    <div class="card w-100" >
                        <div class="card-body">
                            <h5 class="card-title">{tweet.user_id}</h5>
                            <p class="card-text">{tweet.tweet}</p>
                            <div>
                                <a href="#" id="t-util" class="btn btn-primary">Likes {tweet.likes}</a>
                                <a href="#" id="t-util" class="btn btn-primary">Retweets {tweet.retweets}</a>
                                <a href="#" id="t-util" class="btn btn-primary">Comments {tweet.comments}</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}