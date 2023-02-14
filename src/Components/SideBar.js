import React from 'react'
import { useSelector } from 'react-redux'
// import appSlice from '../Utils/appSlice'
// import store from '../Utils/store'
import { Link } from 'react-router-dom';

const SideBar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    if(!isMenuOpen) return null; 
    // this is called early return pattern

    return (
        <div className='p-5 shadow-lg w-48'>
            <ul className='py-5'>
                <li><Link to = "/">Home</Link></li>
                <li>Shorts</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>
            <h1 className='font-bold'>Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>

            </ul>
            <h1 className='font-bold py-5'>Watch Later</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>

            </ul>
        </div>
    )
}

export default SideBar
