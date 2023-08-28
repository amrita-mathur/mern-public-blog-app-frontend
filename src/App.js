import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import AboutPage from "./pages/AboutPage";
import CreateArticlePage from "./pages/CreateArticlePage";
import ArticleRead from "./components/ArticleRead";
import categories from './assets/categories';
// import articlesList from './assets/articlesList'
import MyBlogs from "./pages/MyBlogs";


function App() {

  
  
  return (
    <>
      

      <Header/>
      <Routes>
        <Route exact path="/" element={<ArticlesListPage/>}/>

        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create" element={<CreateArticlePage/>}/>
        <Route path="/readarticle/:id" element={<ArticleRead/>}/>
        <Route path="/myblogs" element={<MyBlogs/>}/>
       
      </Routes>
    
    </>
  );
}

export default App;
