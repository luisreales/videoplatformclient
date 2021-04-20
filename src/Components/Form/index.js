
import http from '../../Util/httpcommon';
import React, { Fragment, useState } from "react";
import {Spinner} from 'react-bootstrap';
import Message from './Message';
import MessageSuccessfull from '../../Util/messagetype';
/**
 * 
 * Return FormUpload component, with a form to load the input file to send to server of NodeJS *   
 * @parentComponent App * * 
 * @return {JSX} *  
 * */

const FormUpload = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [message, setMessage] = useState({});  
  const [loading,setLoading] = useState(false);
  const [isSelectedFiles, setSelectedFile] = useState(true);
  


  const clearControls = () => {  
    setLoading(false);
    setFilename("Choose the file,please");
    setFile(undefined);
    setSelectedFile(true); 
    setLoading(false);      
  }
  const onChange = (e) => {
    debugger;
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    setSelectedFile(false)
  };
  

  const onSubmit = async (e) => {

    try {
      e.preventDefault();
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);
      await http.post("/uploadvideolocal", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then(res => {
         
          const { status } = res.data;
          if(status===200){
                
            setMessage(MessageSuccessfull(false,'upload'));
            clearControls();
          }else{
            setMessage(MessageSuccessfull(true,'upload'));
            clearControls();
           
          }
      }).catch(res => {          
          setMessage(MessageSuccessfull(true,'upload'));
          clearControls();
      });

      
    } catch (error) {
      clearControls();
    }
  };

  return (
    
    <Fragment>
      <div>
        <h4>Please select the file you desire to upload</h4>
      </div>
      <form onSubmit={onSubmit}>
        <div className="custom-file mb-4">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={onChange}
            accept="video/*"            
          />
          <label className="custom-file-label" htmlFor="customFile">
            {filename}
          </label>
        </div>
        <input
          type="submit"
          value="Upload"
          className="btn btn-primary btn-block mt-4"
          disabled={isSelectedFiles}
        />
      </form>
      <br/>      
      <div>
        {
          loading ? (
            <Spinner animation="border" /> 
          ) : (
              null
          )
        }

        {
          message.show ? (
            <Message message={message} />
          )
          :(null)
        }
       
      </div>
    </Fragment>
    
  );
};

export default FormUpload;
