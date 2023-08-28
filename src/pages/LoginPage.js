import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Form, Row, Col, Button, Alert } from "react-bootstrap";
import axios from 'axios';

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userId, setUserId] = useState(undefined);
 
 useEffect(()=> {

  if(userId != undefined)
  sessionStorage.setItem("loggedInUser", JSON.stringify(userId)); 
  

 }, [userId])


  const submitHandler = async (event) => {
    event.preventDefault();
    setError(null);
    if (username === "" || password === "") {
      setError("All fields are required to be filled.");
      return;
    }

    try{
      const res = await axios.get("https://mern-app-backend-83oi.onrender.com/users")
      
      if(res.data){

         if(res.data.find((user) => user.username === username && user.password === password)){
          setUserId(res.data.find((user) => user.username === username && user.password === password)["_id"]);
          alert("User Logged In")
          console.log(res.data)
          window.location.href = "/";

         }
         else{
          alert("Username or password is incorrect")
         }
       
      }
    }
      catch(err){
        console.log("Error: " + err.message)

      }
   
    
    
       
      
  };
  return (
    <div>
      {error && (
          <Alert key="danger" variant="danger">
            {error}
          </Alert>
        )}
      <Container className="my-6">
        
        <Form>
          <Form.Group as={Row} className="mb-4" controlId="formPlaintextName">
            <Form.Label column sm="2" className="my-4">
              User Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                value={username}
                placeholder="Enter Name..."
                onChange={(e) => setUserName(e.target.value)}
                required
                className="mx-4 my-4"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4" controlId="formPlaintextName1">
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="password"
                value={password}
                placeholder="Enter Password..."
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mx-4"
              />
            </Col>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={submitHandler} className="mb-3">Login</Button>
        </Form>
      </Container>
    </div>
  );
};

export default LoginPage;
