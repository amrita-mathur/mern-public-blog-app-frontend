import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

function CreateArticlePage() {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [category, setCatgeory] = useState('');

  const userId = JSON.parse(sessionStorage.getItem("loggedInUser"));

  

  const categoryList = JSON.parse(localStorage.getItem("categories"));
  const {searchFlag} = useSelector(state=> state.searchFlag);
    
  const handleSubmit = (e) => {
     e.preventDefault();

     const article = {
      "title": title,
      "content": value,
      "userId": userId,
      "image": image,
      "category": category
     };

     axios.post("https://mern-app-backend-83oi.onrender.com/articles", article)
    .then(function (response) {
      console.log(response);
      alert('Article Added Successfully')
    })
    .catch(function (error) {
      console.log(error);
    });

    

  }

  return (
    <Container className='container'>

      {!searchFlag && <Form className='form my-3'>
      <Form.Group as={Row} className="mb-3" controlId="formTitletextName">
            <Form.Label column sm="2">
              Title of the Story
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                value={title}
                placeholder="Enter Title..."
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formCategoryName">
            <Form.Label column sm="2">
              Category
            </Form.Label>
            <Col sm="6">
            <Form.Select aria-label="Default select example" value={category} onChange={(e)=> setCatgeory(e.target.value)}>
                {Object.values(categoryList).map((category) => (
                    <option key={category.id}>{category.title}</option>
                  ) )} 
            </Form.Select>
            </Col>
            <Col sm="4">
            <Button onClick={handleSubmit}>Publish</Button>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            
          <Form.Label column sm="2">
              Image URL
            </Form.Label>
            
            <Col sm="6">
              <Form.Control
                type="text"
                value={image}
                placeholder="Enter Image Url..."
                onChange={(e) => setImage(e.target.value)}
                required
              />
            </Col>
          </Form.Group>
      
      <Form.Group as={Row} className="mb-3" controlId="formEditorName">
        <div className='editor'>

      <ReactQuill theme="snow" value={value} onChange={setValue} className='editor-text'/>
        </div>
      
      <div className='preview' dangerouslySetInnerHTML={{__html: value}} />
      </Form.Group>
      </Form>}
    </Container>
    )
}

export default CreateArticlePage