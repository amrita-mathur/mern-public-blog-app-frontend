import React, { useState, useEffect } from "react";
import Article from "../components/Article";
import { Row, Col, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';

const MyBlogs = () => {
  
  const userId = JSON.parse(sessionStorage.getItem("loggedInUser"));
  const {searchFlag} = useSelector(state=> state.searchFlag)
  const {articles} = useSelector(state=> state.articles);
  const dispatch = useDispatch();
  let [userArticles, setUserArticles] = useState([]); 

  useEffect(() => {
   
    axios
      .get(`https://mern-app-backend-83oi.onrender.com/articles`)
      .then((res) => dispatch({type: "add", payload: res.data}))
      .catch((err) => {
        console.log(err.message)
      });
      setUserArticles(articles.filter(
        (article) => article.userId == userId
      ));
      
  }, [dispatch,articles]);


  

  return (
    <div>
      {!searchFlag && <h1 style={{ textAlign: "center" }}>My Blogs</h1>}
      {!searchFlag && <Container>
        <Row>
          {userArticles && Object.values(userArticles).map((article) => (
            <Col key={article._id} md={6} sm={12} lg={4}>
              <Article article={article} />
            </Col>
          ))}
        </Row>
      </Container>}
    </div>
  );
};

export default MyBlogs;
