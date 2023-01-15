import './App.css';
import Header from './Header';

import { DataProvider } from './DataContext';
import DataContext from './DataContext';
import BlogContext, { BlogProvider } from './blog/BlogContext';
import { Route,Routes } from 'react-router-dom';
// import Navbar from './Navbar';
import PostPage from './PostPage';
// import AddPost from './AddPost';
import Home from './Home';
import Missing from './Missing';
import Edit from './Edit';
import BlogHome from './blog/BlogHome';
import AddBlog from './blog/AddBlog';
import BlogPage from './blog/BlogPage';
import EditBlog from './blog/EditBlog'
import AboutBlog from './blog/AboutBlog';



function App() {
  return (
    <div className="App">
      <BlogProvider>
        <DataProvider>
          <Header/>
          {/* <Navbar/> */}

          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/post/:id' element={<PostPage/>} />
            <Route path='/edit/:id' element={<Edit/>}/>
            <Route path='/blog' element={<BlogHome/>} />
            <Route path='/blog/:id' element={<BlogPage/>} />
            <Route path='/addblog' element={<AddBlog/>}/>
            <Route path='/editblog/:id' element={<EditBlog/>}/>
            <Route path='*' element={<Missing/>}/>
            <Route path='/about' element={<AboutBlog/>}/>
          </Routes>
        </DataProvider>
      </BlogProvider>
    </div>

    
  );
}

export default App;
