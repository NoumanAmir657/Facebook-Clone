import React, {useState} from 'react'
import axios from './axios'
import { useEffect } from 'react';
import Pusher from 'pusher-js'
import Home from './components/Home';
import Profile from './components/Profile'
import {BrowserRouter as Router, Switch, Link, Route, useParams, useHistory} from "react-router-dom"
import NavBar from './components/NavBar';
import { useStateValue } from './StateProvider';
import Login from './components/Login';

const pusher = new Pusher('93c8583ebfa4115097cd', {
  cluster: 'ap2'
});

const App = () => {
  const [postsData, setPostsData] = useState([])
  const [{user}, dispatch] = useStateValue()

  
  useEffect(() => {
    const channel = pusher.subscribe('posts')
    channel.bind('inserted', (data) => {
        syncFeed()
    })
    channel.bind('updated', (data) => {
        syncFeed()
    })
  }, [])
  


  const syncFeed = () => {
    axios.get('/retrieve/posts')
    .then((res) => {
      console.log(res.data)
      setPostsData(res.data)
    })
  }

  useEffect(() => {
    syncFeed()
  }, [])

  return (
    <div>
    {
      user ? (
        <NavBar postsData={postsData} setPostsData={setPostsData}/>
        )
      : (
        <Login/>
      ) 
    }
    
    </div>
  )
}

export default App;
