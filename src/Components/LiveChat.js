import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../Utils/chatSlice'
import { generateRandomName, makeRandomMessage } from '../Utils/helper'
import ChatMessage from './ChatMessage'


const LiveChat = () => {

  const [liveMesage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector(store => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("API Polling")

      dispatch(addMessage({
        name: generateRandomName(),
        message: makeRandomMessage(20)
      }))

    }, 1000);

    // cleanup. 
    return () => clearInterval(i);

  }, [])

  return (
    <>
      <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <div>
          {
            // DON'T USE INDICES AS THE KEY. 
            chatMessages.map((c, index) =>
              <ChatMessage key={index} name={c.name} message={c.message} />)
          }
        </div>
      </div>

      <form
        className='w-full p-2 ml-2 border border-black'
        onSubmit={(e) => {
          e.preventDefault();
          console.log("on form submit", liveMesage);
          dispatch(addMessage({
            name: "Aditya",
            message: liveMesage
          }))
          setLiveMessage("");
        }
        }
      >

        <input className='px-2 w-[300px]' type="text" value={liveMesage} onChange={(e) => {
          setLiveMessage(e.target.value)
        }} />
        <button className='px-2 mx-2 bg-green-100'>Send</button>
      </form>
    </>
  )
}

export default LiveChat
