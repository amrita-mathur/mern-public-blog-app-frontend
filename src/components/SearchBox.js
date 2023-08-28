import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import Article from '../components/Article';

const SearchBox = (props) => {

  const articles = props.filteredArticles; 
  const searchValue = props.searchValue; 
  return (
    <>
    <h2 style={{textAlign: "center", marginTop: "2rem"}}>Results for {searchValue}</h2>
    <Container>
       
        
    <Row>
  
      {Object.values(articles).map((article)=>(
          <Col key={article._id} md={6} sm={12} lg={4}>
          <Article article = {article}/>
        </Col>
        ))}
        </Row>
  </Container>
        </>
  )
}

export default SearchBox