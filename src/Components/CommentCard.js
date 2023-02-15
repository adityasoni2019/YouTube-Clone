import React from 'react'
import { COMMENTS } from '../Utils/constants'

export const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div key={index}>
            <CommentCard data={comment} />
            <div className="pl-5 border border-l-black ml-5">
                <CommentsList comments={comment.replies} />
            </div>
        </div>
    ));
}

const CommentCard = ({ data }) => {

    const { name, text, replies } = data;
    return (
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
            <img
                className='w-12 h-12'
                alt="user"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
            <div className='px-3 '>
                <p>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default CommentCard
