import React from 'react'
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import StoryReel from './components/StoryReel';
import Post from './components/Post'

const App = () => {
  return (
    <body className='bg-gray-100'>

      <NavBar/>

      <div className='flex justify-between'>

        <SideBar/>

        <div>

          <StoryReel/>

          <Post/>

        </div>

        <diV className='hidden md:block'>LeftBarLeftBarLeftBarLeftBarLeftBarLeftBarLeftBar</diV>
    
      </div>

    </body>
  )
}

export default App;
