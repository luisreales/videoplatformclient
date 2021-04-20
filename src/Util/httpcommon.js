import axios from 'axios';

/**
 * Return axios object 
 * @constructor 
 * @return {Object} to create http call (get, post..) *  
 * */ 

export default axios.create({
  baseURL: 'https://univisionvideoserver.herokuapp.com/',
  headers: {
    "Content-type": "application/json"
  }
});