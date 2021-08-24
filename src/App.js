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
  const [currentUser, setCurrentUser] = useState([])

  
  useEffect(() => {
    const channel = pusher.subscribe('posts')
    channel.bind('inserted', (data) => {
        syncFeed()
    })
    channel.bind('updated', (data) => {
        syncFeed()
    })
  }, [])
  


  const syncFeed = async () => {
    const res = await axios.get('/retrieve/posts')
    
    console.log(res.data)
    setPostsData(res.data)
    console.log(postsData)
  }

  const syncUsers = async () => {
    const res = await axios.get('/retrieve/users')
    console.log(res.data)
    setCurrentUser(res.data)
    console.log(currentUser)
  }

  useEffect(() => {
    syncFeed()
    syncUsers()
  }, [])

  return (
    <Router>
    <div>
    {
      user ? (
        <NavBar postsData={postsData} setPostsData={setPostsData} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        )
      : (
        <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      ) 
    }
    
    </div>
    </Router>
  )
}

export default App;
