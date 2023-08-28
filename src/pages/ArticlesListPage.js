import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Article from '../components/Article';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

const ArticlesListPage = () => {

  // const {searchFlag} = useContext(SearchContext);
  // const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const {searchFlag} = useSelector(state=> state.searchFlag);
  const {articles} = useSelector(state=> state.articles)
  const dispatch = useDispatch();
  console.log("In ArticleListPage", searchFlag)
  
  
  useEffect(() => {
   
    axios
      .get("https://mern-app-backend-83oi.onrender.com/articles")
      .then((res) => dispatch({type: "add", payload: res.data}))
      .catch((err) => {
        setError(err.message);
      });
      
      
  }, [dispatch]);

  return (
    <>
   {!searchFlag && <Container>
    
      <Row>
    
        {Object.values(articles).map((article)=>(
          <Col key={article._id} md={6} sm={12} lg={4}>
            <Article article = {article}/>
          </Col>
          ))}
          </Row>
    </Container>}
          </>
  )
}

export default ArticlesListPage;