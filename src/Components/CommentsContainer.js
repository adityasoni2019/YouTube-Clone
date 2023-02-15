import React from 'react'
import { COMMENTS } from '../Utils/constants'
import CommentCard from './CommentCard'
import { CommentsList } from './CommentCard'

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2 '> 
      <h1 className='text-1xl font-bold '>
        <CommentsList comments={COMMENTS}/>
      </h1>
    </div>
  )
}

export default CommentsContainer
