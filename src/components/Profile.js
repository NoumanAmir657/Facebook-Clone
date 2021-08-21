import React, {useState} from 'react'
import { useStateValue } from '../StateProvider'
import PostShow from './PostShow'
import axios from '../axios'

const Profile = ({postsData, currentUser, setCurrentUser}) => {
    const [{user}, dispatch] = useStateValue()
    const [image, setImage] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log('Cover Images uploaded')

        const imgForm = new FormData()
        imgForm.append('file', image, image.name)

        axios.post('/upload/cover', imgForm, {
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data; boundary=${imgForm._boundary}`,
            }
            }).then((res) => {
                console.log(res.data)

                const userData = {
                    ...currentUser,
                    coverImage: res.data.filename
                }

                setCurrentUser(userData)

                axios.put(`/upload/user/${userData.id}`, userData)
        })
    }

    const handleChange = (e) => {
        if (e.target.files[0]){
            setImage(e.target.files[0])
            console.log(e.target.files[0])
        }
    }

    return (
        <div>
        {
            !currentUser.coverImage ?
            (
                <form onSubmit={handleSubmit}>
                    <div className="mb-1">
                        <div className="relative border-dotted h-32 rounded-lg border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
                            <div className="absolute">
                                <div className="flex flex-col items-center"><span className="block text-gray-400 font-normal">Upload Cover Image</span></div>
                            </div> 
                            <input type="file" className="h-full w-full opacity-0" name="" onChange={handleChange}></input>
                        </div>
                    </div>
                    <div className="mt-3 text-right"><button type='submit' className="ml-2 h-10 w-32 bg-blue-600 rounded text-white hover:bg-blue-700">Upload</button></div>
                </form>
            ) : (
                <img src={`/retrieve/cover/single?name=${currentUser.coverImage}`} className='w-full h-80' alt='cover_image_here' />
            )   
        }
        

        <div className='text-center text-2xl font-bold'>{user.displayName}</div>
        <br></br>
        <div className='flex justify-center mx-4'>
        <div className='text-cente font-bold text-lg w-80 hidden md:block'>
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
