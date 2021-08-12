import React, {useState} from 'react'
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import StoryReel from './components/StoryReel';
import Post from './components/Post'
import PostShow from './components/PostShow';
import Widgets from './components/Widget';
import {useStateValue} from './StateProvider'
import Login from './components/Login'

const App = () => {
  const [{user}, dispatch] = useStateValue()

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
  
            <Post/>
  
            <PostShow/>
  
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
