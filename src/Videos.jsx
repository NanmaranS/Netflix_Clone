import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Videos() {
  const { id } = useParams(); // get :id from URL
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState(null); // selected video

  useEffect(() => {
    // fetch your videos JSON
    axios.get('http://localhost:5000/home')
      .then((res) => {
        setVideos(res.data); // full array
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (videos.length > 0) {
      const selectedVideo = videos[parseInt(id)]; // pick by index
      setVideo(selectedVideo);
    }
  }, [videos, id]);

  if (!video) return <h2>Loading video...</h2>;

  return (
    <div className="video-page">
<Link className='text-decoration-none text-white ' to='/'> <h2 className='m-5' ><i className="bi bi-arrow-left"></i></h2></Link>
      <iframe
        width="100%"
        height="500"
        src={video.embedUrl + "?autoplay=1"}
        title={video.slug}
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
}
