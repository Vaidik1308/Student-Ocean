import React from 'react'
import Navbar from '../Navbar'
import {Link,useParams} from 'react-router-dom';
import { useContext } from 'react';
import BlogContext from './BlogContext';

const BlogPage = () => {
  const {blogs,handleDelete} = useContext(BlogContext);
  console.log(blogs);
  const {id} = useParams();
  const blog = blogs.find((blog) => (blog.id).toString() === id);
  
  return (
    <div className='blogHome'>
      <Navbar/>
      <div className='BlogPage'>
        {/* {`Post ${id}`} */}
        <article className='blogpost'>
          {blog && 
            <>
              <h2>{`${blog.title}`}</h2>
              <p className='blogDate'>{`${blog.dateTime}`}</p>
              <p className='blogBody'>{blog.body}</p>
              <button onClick={() => handleDelete(blog.id) } className='deleteButton'>Delete Post</button>
              <Link to={`/editblog/${blog.id}`}><button className='editButton'>Edit Post</button></Link>
            </>
          }

          {!blog && 
            <>
              <h2>Post not Found</h2>
              <p>Well, that's disappointing.</p>
              <p>
                <Link to="/blog">Visit Our Homepage</Link>
              </p>
            </>
          }


        </article>
      </div>
    </div>
  )
}

export default BlogPage