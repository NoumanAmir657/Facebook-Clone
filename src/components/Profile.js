import React from 'react'
import { useStateValue } from '../StateProvider'
import PostShow from './PostShow'

const Profile = ({postsData}) => {
    const [{user}, dispatch] = useStateValue()

    return (
        <div>
        <div><img src='https://png.pngtree.com/background/20210712/original/pngtree-modern-double-color-futuristic-neon-background-picture-image_1181573.jpg' className='w-full h-80' alt='image'></img></div>
        <div className='text-center text-2xl font-bold'>{user.displayName}</div>
        <br></br>
        <div className='flex justify-center mx-4'>
        <div className='text-cente font-bold text-lg w-80'>
        <div className='text-2xl py-2 underline'>Intro</div>
        <div>Went to xyz</div>
        <div>Went to xyz</div>
        <div>Lives in xyz</div>
        </div>

        <div>
        {
            postsData.filter(post => post.user === user.displayName).map((entry,i) => (
              <PostShow
                  key={postsData.length-i}
                  fullPost = {entry}
              />
          ))
        }
        </div>

        
        </div>

        </div>
    )
}

export default Profile
