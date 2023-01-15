import React from 'react';
import { Link,useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';


const Feed = ({blog}) => {
    const {id} = useParams();
  return (
    <article className='blog'>
        <Link to={`/blog/${blog.id}`}>
            <h2 className='blog-title'>{blog.title}</h2>
            <p className='postDate'>{blog.dateTime}</p>
        </Link>
        <p className='postBody'>
            {(blog.body).length <= 25 ? blog.body : `${(blog.body).slice(0,25)}...`}
            <Link className='morePara' to={`/blog/${blog.id}`}>More</Link>
        </p>
    </article>
  )
}

export default Feed