import React from 'react'
// import Left from './twitter/leftSideBar'
// import Right from './twitter/rightSideBar'
// import Center from './twitter/centerContent'
// import './styles/app.css'
import Home from "./twitter/home.js"
import Login from "./twitter/login.js"
import { Router, Link } from "@reach/router"

const App = () => (
  <Router>
    <Home path="/" />
    <Login path="login" />
  </Router>
)

export default App