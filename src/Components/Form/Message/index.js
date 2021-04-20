import React, { useState } from "react";
import { Container, Alert } from "react-bootstrap";
import "./message.scss";
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import PropTypes from 'prop-types';

/**
 * 
 * Return Message component, to show the diferents messages occurs in each event in the app.   
 * @parentComponent App * 
 * @params Message : Object with the data to be shown to the user
 * @return {JSX} *  
 * */

const Message = ({ message }) => {

  const [showMessage, setShow] = useState(true);
  const { typeerror, title, titlemensaje } = message;
  
  if (showMessage) {
    
    Message.propTypes  = {
      message: PropTypes.shape({
        show: PropTypes.bool,
        type: PropTypes.string,
        title: PropTypes.string,
        titlemensaje:  PropTypes.string
      })
    }

    return (
      <Container>
        {typeerror ? (
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>{title}</Alert.Heading>
            <p>{titlemensaje} <FaIcons.FaFrown /></p>
          </Alert>
        ) : (
          <Alert variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>{title} <FaIcons.FaRocket /></Alert.Heading>
            <p>{titlemensaje}</p>
            <Link to="/listVideo">Videos</Link>
          </Alert>
        )}
      </Container>
    );
  }else{
    return(
      null
    )
  }

  
  

};



export default Message;
