import React, {useState} from 'react'
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import StoryReel from './components/StoryReel';
import Post from './components/Post'
import PostShow from './components/PostShow';

const App = () => {
  const [posted, setPosted] = useState(false)
  const [posts, setPosts] = useState([{user: 'Lake', postMsg: 'Hello', media: null}])
  const [user, setUser] = useState('Lake')

  return (
    <body className='bg-gray-100'>

      <NavBar/>

      <div className='flex justify-between'>

        <SideBar/>

        <div>

          <StoryReel/>

          <Post posts={posts} setPosts={setPosts} user={user}/>

          {posts.map((post) => <PostShow post={post}/>)}

        </div>

        <diV className='hidden md:block'>LeftBarLeftBarLeftBarLeftBarLeftBarLeftBarLeftBar</diV>
    
      </div>

    </body>
  )
}

export default App;
