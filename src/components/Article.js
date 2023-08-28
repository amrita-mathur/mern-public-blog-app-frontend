import { Card, Button} from "react-bootstrap";
import React from 'react'

import {useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";

const Article = (props) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const readArticle = (id) => {
    dispatch({type: "article"})
    navigate(`/readarticle/${id}`);
  }
  return (
    <Card style={{ width: '12rem', margin: "4rem"}} >
    <Card.Img variant="top" src={props.article.image} style={{"height": "80px", "margin": "auto", "objectFit": "cover"}} />
    <Card.Body>
      <Card.Title>{props.article.title}</Card.Title>
      <Card.Text>
       
      </Card.Text>
      <Button variant="primary" onClick={(e) => readArticle(props.article._id)}>Read</Button>
    </Card.Body>
  </Card>
  )
}

export default Article