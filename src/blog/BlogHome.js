import React from 'react';
import Navbar from '../Navbar';
import './Blog.css';
import DataContext from '../DataContext';
import BlogContext from './BlogContext';
import { useContext } from 'react';
import Feed from './Feed';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
// import { Route,Routes } from 'react-router-dom';

const BlogHome = () => {

    const {name} = useContext(DataContext);
    const {blogs} = useContext(BlogContext);
    // console.log(blogs);

  return (
    <div className='blogHome'>
        <Navbar/>
        <div className='blog-body'>
            <div className='dash-heading'>
                <div className='dash-top blog-top'>
                <div className='dash-title blog-title'>
                    <h2>Blogs</h2>
                </div>
                <div className='dash-date blog-date'>
                    <p>{`${name}`}</p>
                </div>
                </div>
                <div className='blog-links'>
                    <form onSubmit={(e) => e.preventDefault()} className='search-bar blog-search'>
                        <label htmlFor="blogSearch"></label>
                        <input
                            className="input" 
                            type="text" 
                            name="" 
                            id="blogSearch"
                            placeholder='Search..' 
                            // value={}
                            // onChange={(e) => setSearchPost(e.target.value)}
                        />
                    </form>
                    <div className='blog-hover'>
                        <ul>
                            <Link to='/blog'><li>Blogs</li></Link>
                            <Link to='/addblog'><li>AddBlog</li></Link>
                            <Link to='/About'><li>About</li></Link>
                            
                        </ul>
                    </div>
                </div>   
            </div>
            <div className='project-grid blog-grid'>
          
                {blogs.length ?
                    blogs.map((blog) => (
                    <Feed blog={blog} key={blog.id}/>
                    )) : 
                    <p className='para' style={{textAlign:"center", fontSize: "1.5rem"}}>No Blog To Display</p>
                }
                <Link to={`/addblog`}>
                    <Fab className='addMore moreBlogs' color="primary" aria-label="add">
                        <AddIcon/>
                    </Fab>
                </Link>
          
      </div>

        </div>



    </div>
  )
}

export default BlogHome