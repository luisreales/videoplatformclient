import React from 'react';
import VideoPlayer from 'react-video-js-player';
import {useLocation} from 'react-router-dom';
import "./detailvideo.scss"
/**
 * 
 * Return the component to see the video loaded or the video selected by the user.
 * @parentComponent App * 
 * @VideoPlayer represent the video player to reproduce video
 * @return {JSX} *  
 * */

const DetailVideo = () => {
    //Get the information of the state,  
    //let you access the state of the router and perform navigation from inside your components.
    let data = useLocation();
    //filename represent the path of the video
    //thumbnail represent the thumbnail of the video
    //mimetype represent the thumbnail of the video if this is mp4 for example the value is : video/mp4
    
    let filename = "";
    let thumbnail = "";
    let mimetype = "";
    if(data.state !== undefined){
       filename = data.state.filename;
       thumbnail = data.state.thumbnail;
       mimetype = data.state.mimetype;
    }
 
    return (         
        <div>
          <p>Video Uploaded</p>
          <div className='video-js'>              
              <VideoPlayer src={filename} poster={thumbnail} type={mimetype} />              
          </div>  
        </div>
        );     
}
 
export default DetailVideo;