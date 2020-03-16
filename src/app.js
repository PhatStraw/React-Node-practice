import React from 'react'
import Left from './twitter/leftSideBar'
import Right from './twitter/rightSideBar'
import Center from './twitter/centerContent'

const App = () => {
    return (
        <div className="main-container">
            <div className="left">
                <Left />
            </div>

            <div className="center">
                <Center />
            </div>

            <div className="right">
                <Right />
            </div>

        </div>

    )
}

export default App