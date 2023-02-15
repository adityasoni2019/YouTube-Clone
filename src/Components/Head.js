import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../Utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../Utils/constants';
import { cacheResults } from '../Utils/searchSlice';

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector(store => store.search);

  useEffect(() => {
    // API Call here.
    // console.log(searchQuery);

    // make an API call for every key press
    // but if the difference b/w 2 API Calls is <200ms
    // decline the API call. 

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      }
      else {
        getSearchSuggestions()
      }

    }, 200);
    return () => {
      clearTimeout(timer);
    }

  }, [searchQuery])

  const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    // updating cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1], 
      }))
  }


  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img
          onClick={() => toggleMenuHandler()}
          className='h-12 cursor-pointer'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt="menu icon" />
        <a href="/">
          <img
            className='h-16 mx-2'
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="youtube logo" />
        </a>
      </div>

      <div className="col-span-10 px-10">
        <div>

          <input
            type="text"
            className='border w-1/2 border-gray-400 px-5 py-2 rounded-l-full bg-gray-100'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}

          />
          <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100 '>🔍</button>
        </div>
        {showSuggestions && <div className='fixed bg-white py-2 px-5 w-[37rem] rounded-md border border-gray-300'>
          <ul>
            {
              suggestions.map((suggestion) => <li key={suggestion} className='shadow-sm py-3 hover:bg-gray-100'>{suggestion}</li>
              )
            }
          </ul>
        </div>}
      </div>

      <div className="col-span-1">
        <img className='h-12' alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
      </div>

    </div>
  )
}

export default Head
