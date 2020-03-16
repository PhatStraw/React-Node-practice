import React from 'react'
import Left from './twitter/leftSideBar'
import Right from './twitter/rightSideBar'
import Center from './twitter/centerContent'

const App = () => {
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

export default App