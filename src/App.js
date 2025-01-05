import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import blogData from './Data';
import AddNewArticle from './Pages/AddNewArticle';
import BlogDetailPage from './Pages/BlogDetailPage';
import Blogs from './Pages/Blogs';
import HomePage from './Pages/HomePage';
import SignUp from './Pages/SignUp';

  const App = () => {
    const [articles, setArticles] = useState(blogData);
  
    const addNewArticle = (article) => {
      setArticles([article, ...articles]);
    }
  return (
    <Router>
      <Navbar/>
      <div className="App">
        <Routes>
        <Route path='/' element = {<HomePage/>}/>
          <Route path='/signup' element = {<SignUp/>}/>
          <Route path='/blogs' element = {<Blogs/>}/>
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/add-article" element={<AddNewArticle addNewArticle={addNewArticle} />}/>
          </Routes>
      </div>
      <Footer/>
    </Router>
  );
}
export default App;
