import React from 'react'

const VideoCard = ({ info }) => {

    // console.log(info);

    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

    return (
        <div className='p-2 m-2 w-72 shadow-lg'>
            <img alt="thumbnail" src={thumbnails.medium.url} className="rounded-lg" />
            <ul>
                <li className='font-bold'>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount}</li>
                <li>{title}</li>
            </ul>
            <h1>hello</h1>
        </div>
    );
};


export const AdVideoCard = ({ info }) => {
    return (
        <div className="p-1 m-1 border border-red-900 ">
            <VideoCard info={info} />
        </div>
    )
}

export default VideoCard;