import React, {useState} from 'react'

const NavbarForFriends = ({index, setIndex}) => {
    const [color, setColor] = useState(['', 'bg-blue-700 text-white', ''])

    const changeColor = (i) => {
        setColor(color.map((c, n) => n === i ? c = 'bg-blue-700 text-white' : c = ''))
        setIndex(i)
    }

    return (
        <React.Fragment>
        <div className='container flex w-full my-4 justify-between bg-gray-100 shadow-xl items-center h-10 rounded-xl'>
            <div className='text-2xl text-center w-full'><button className={`${color[0]} w-full rounded-xl hover:bg-blue-700 hover:text-white`} onClick={() => changeColor(0)}>Friends</button></div>
            <div className='text-2xl text-center w-full'><button className={`${color[1]} w-full rounded-xl hover:bg-blue-700 hover:text-white`} onClick={() => changeColor(1)}>People</button></div>
            <div className='text-2xl text-center w-full'><button className={`${color[2]} w-full rounded-xl hover:bg-blue-700 hover:text-white`} onClick={() => changeColor(2)}>Pending</button></div>
        </div>
        </React.Fragment>
    )
}

export default NavbarForFriends
