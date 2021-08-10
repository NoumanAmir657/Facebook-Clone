import React from 'react'
import Story from './Story'

const StoryReel = () => {
    return (
        <div>
        <div className='flex justify-start md:justify-evenly px-0 md:px-36'>
            <Story src="https://wallpaperaccess.com/full/4601511.jpg"/>
            <Story src="https://i.pinimg.com/originals/55/d3/da/55d3da613205f893235a081c6c62c104.jpg"/>
            <Story src="https://i.pinimg.com/564x/b4/91/19/b49119207fca27d1849fdb0948881c7d.jpg"/>
        </div>
        <div className='bg-red-400 h-32 w-full'>HELLO</div>
        </div>
    )
}

export default StoryReel
