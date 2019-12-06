import React from 'react';
import './App.css';

//Components
import TweetForm from './components/tweetform.js'
import AllTweets from './components/alltweets.js'

class App extends React.Component{
  // state ={
  //   name: '',
  //   tweet: ''
  // }

  // onSubmit(e){
  //   e.preventDefault()
  //   url = fetch()
  // }
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
