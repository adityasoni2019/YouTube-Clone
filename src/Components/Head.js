import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../Utils/appSlice';

const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img
          onClick={()=> toggleMenuHandler()}
          className='h-12 cursor-pointer'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt="menu icon" />
        <a href="/">
          <img
            className='h-16 mx-2'
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="youtube logo" />
        </a>
      </div>


      <div className="col-span-10">
        <input type="text" className='border w-1/2 border-gray-400 px-5 py-2 rounded-l-full bg-gray-100' />
        <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100 '>🔍</button>
      </div>

      <div className="col-span-1">
        <img className='h-12' alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
      </div>

    </div>
  )
}

export default Head
