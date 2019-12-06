import React from 'react';
import './App.css';
import TweetForm from './components/tweetform.js'
import AllTweets from './components/alltweets.js'

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <TweetForm />
        <AllTweets />
      </div>
    );
  }
}

export default App;
