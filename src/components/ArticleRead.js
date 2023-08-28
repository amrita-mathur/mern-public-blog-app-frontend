import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const ArticleRead = () => {
  const { id } = useParams();
  const [article, setArticle] = useState([]);
  // const [error, setError] = useState("");
  const { searchFlag } = useSelector((state) => state.searchFlag);
  const [loading, setLoading]= useState(true)
  

  useEffect(() => {  
      setLoading(true)
      axios
      .get(`https://mern-app-backend-83oi.onrender.com/articles/${id}`)
      .then((res) => {
        if(res.data)
        {
          setLoading(false)
          setArticle(res.data);
        }
        else{
         
        }
      })
      .catch((err) => {
        console.log(err.message)
      });
  }, [id]);

  // const article = Object.values(articlesList).filter((article)=> article.id == id);

  console.log(id, article);
  return (
    <>
    
      {!searchFlag && !loading && <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <div>
          <div>
            <h1 style={{ textAlign: "center" }}>
              <strong>{article.title}</strong>
            </h1>
            <br></br>
            <img
              src={article.image}
              style={{ width: "300px", display: "block", margin: "auto" }}
            ></img>
          </div>
          <br></br>
          <br></br>
          <div
            dangerouslySetInnerHTML={{ __html: article.content }}
            style={{ fontSize: "1.5rem" }}
            className="m-5 p-5"
          />
        </div>
      </div>}

    </>
  );
};

export default ArticleRead;
