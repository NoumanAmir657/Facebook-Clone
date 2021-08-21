import React, {useState} from 'react'
import NavBar from './NavBar';
import SideBar from './SideBar';
import StoryReel from './StoryReel';
import Post from './Post'
import PostShow from './PostShow';
import Widgets from './Widget';
import Login from './Login'
import {useStateValue} from '../StateProvider'

const Home = ({postsData, setPostsData}) => {
    const [{user}, dispatch] = useStateValue()
    

    return (
        <div className='bg-gray-100'>
            <React.Fragment>
            
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
        </div>
    )
}

export default Home
