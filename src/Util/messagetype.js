
/**
 * Return message in the app.
 * @param {boolean,string} 'typerror true or false and typeprocess is upload or list'
 * @return {Object} messageSuccessfull is a Object with the differents messages in the application *  
 * */ 

  const messageSuccessfull = (typerror, typeprocess) =>{

    if(typeprocess === 'upload'){
        return (typerror ?
            {
              show:true,
              typeerror:true,
              type:'error',
              title:'Sorry, we have fail with the server connection',
              titlemensaje:'Upps! We have problem to upload your video in this moment. We invite you to try again later.'          
            }:{
              show:true,
              typeerror:false,
              type:'success',
              title: 'Super! You has upload your file successfully!!!',
              titlemensaje:'We invite you to visit the loaded videos page'          
            })
    }else{
        return (typerror ?
            {
              show:true,
              typeerror:true,
              type:'error',
              title:'Sorry, we have fail with the server connection',
              titlemensaje:'Upps! We have error to get the list of video from server, sorry. We invite you to try again later.'          
            }:{
              show:true,
              typeerror:false,
              type:'success',
              title: 'Enjoy , the list of videos!!!',
              titlemensaje:''          
            })
    }
    
  }  

  export default messageSuccessfull;