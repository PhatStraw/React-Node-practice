import React from 'react'
import Left from './leftSideBar'
import Right from './rightSideBar'
import Center from './centerContent'
import '../styles/app.css'


const Home = () => {
    return (
        <div className="main-container">
            <div id="left" className="main">
                <Left />
            </div>

            <div id="center" className="main">
                <Center />
            </div>

            <div id="right" className="main">
                <Right />
            </div>

        </div>

    )
}

export default Home