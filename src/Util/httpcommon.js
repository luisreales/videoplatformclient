import axios from 'axios';
import {PORT_BACKEND} from './variables'
/**
 * Return axios object 
 * @constructor 
 * @return {Object} to create http call (get, post..) *  
 * */ 

export default axios.create({
  baseURL: `http://localhost:${PORT_BACKEND}`,
  headers: {
    "Content-type": "application/json"
  }
});