import React, {useState} from 'react'
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import StoryReel from './components/StoryReel';
import Post from './components/Post'
import PostShow from './components/PostShow';
import Widgets from './components/Widget';
import {useStateValue} from './StateProvider'
import Login from './components/Login'
import axios from './axios'
import { useEffect } from 'react';
import Pusher from 'pusher-js'

const pusher = new Pusher('93c8583ebfa4115097cd', {
  cluster: 'ap2'
});

const App = () => {
  const [{user}, dispatch] = useStateValue()
  const [profilePic, setProfilePic] = useState('')
  const [postsData, setPostsData] = useState([])
  const [temp, setTemp] = useState([])

  
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
    <div className='bg-gray-100'>

    {
      user ? (
        <React.Fragment>
        <NavBar/>

        <div className='flex justify-between'>
  
          <SideBar/>
  
          <div>
  
            <StoryReel/>
  
            <Post postsData={postsData} setPostsData={setPostsData}/>
  
            {
              postsData.map((entry,i) => (
                <PostShow
                    key={postsData.length-i}
                    fullPost = {entry}
                />
            ))
          }
  
          </div>
  
          <Widgets/>
      
        </div>  
        </React.Fragment>
      ) : (
        <Login/>
      )
    }
    </div>
  )
}

export default App;
