import React, { useState, useEffect } from "react";
import http from "../../Util/httpcommon";
import { Link } from "react-router-dom";
import "./listvideo.scss";
import {Spinner} from 'react-bootstrap';
import Message from '../../Components/Form/Message';
import MessageSuccessfull from '../../Util/messagetype';
/**
 * 
 * Return ListVideos , component with the list of the thumbnails videos.
 * @parentComponent App * 
 * @return {JSX} *  
 * */


import {
  Button,
  ButtonGroup,
  Card,
  CardImg,
  CardText,
  CardBody,
  Col,
  Container,
  Row,
} from "reactstrap";

const ListVideos = () => {
  //setFileInfos method of the hook to keep the information of the videos
  const [fileInfos, setFileInfos] = useState([]);
  //setLoading method of the hook to know when the data is loading and show the spinner
  const [loading,setLoading] = useState(false);
  //setMessage method of the hook to set a message depend the situation if the server respond or not
  const [message, setMessage] = useState({}); 

  // useEffect to get the list of the videos in the backend of nodejs
  useEffect(() => {
    setLoading(true);
    http.get("/listvideo").then((response) => {
      setLoading(false);
      setFileInfos(response.data.videos);
      setMessage(MessageSuccessfull(false,'list'));
    }).catch((error) => {
      setLoading(false);
      setMessage(MessageSuccessfull(true,'list'));
    });   
  }, []);

  return (
    <>
    
      <h2>List of videos</h2>
      {
          loading ? (
            <Spinner animation="border" /> 
          ) : (
            message.show ? (<Message message={message}/>) : (null)            
          )
        }

      <div className="album py-5 bg-light">
        <Container>
          <Row>
            {fileInfos.map((item, key) => {
              return (
                <Col md="4" key={key}>
                  <Card className="mb-4 box-shadow">
                    <CardImg
                      top
                      width="100%"
                      src={item.thumbnail}
                      alt={item.filename}
                    />
                    <CardBody>
                      <CardText>
                        File Name: {item.originalname}
                        <br />
                        Type: {item.mimetype}
                      </CardText>
                      <div className="d-flex justify-content-between align-items-center">
                        <ButtonGroup>
                          <Link
                            to={{
                              pathname: "/videodetail/" ,
                              state: item,
                              params:{ id: item._id }
                            }}
                          >
                            {" "}
                            <Button outline color="secondary" size="sm">
                              Watch Video
                            </Button>
                          </Link>
                        </ButtonGroup>
                        <small className="text-muted">
                          File: {item.fieldname}
                        </small>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>    
    </>
  );
};

export default ListVideos;
