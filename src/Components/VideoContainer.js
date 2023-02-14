import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../Utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {

  const[videos, setVidoes] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items);
    setVidoes(json.items);
  };

  return (
    <div className='flex flex-wrap'>
      {/* <VideoCard info = {videos[0]}/> */}
      {
        videos.map(video=> (
          <VideoCard key = {video.id} info = {video}/>
        ))
      }
    </div>
  );
}

export default VideoContainer;
