import React from 'react'
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Story from './components/Story';
import StoryReel from './components/StoryReel';

const App = () => {
  return (
    <body className='bg-gray-100'>
    <NavBar/>
    <div className='flex justify-between'>
    <SideBar/>
    <StoryReel/>
    <diV className='hidden md:block'>LeftBarLeftBarLeftBarLeftBarLeftBarLeftBarLeftBar</diV>
    </div>
    </body>
  )
}

export default App;
