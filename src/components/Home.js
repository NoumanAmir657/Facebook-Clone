import React from 'react'
import SideBar from './SideBar';
import StoryReel from './StoryReel';
import Post from './Post'
import PostShow from './PostShow';
import Widgets from './Widget';

const Home = ({postsData, setPostsData}) => {
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
