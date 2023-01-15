import React from 'react';
import { useContext,useEffect } from 'react';
import BlogContext from './BlogContext';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
const EditBlog = () => {

  const {blogs,editBlogTitle,setEditBlogTitle,editBlogBody,setEditBlogBody,handleEdit} = useContext(BlogContext)
  const { id } = useParams();
  const blog = blogs.find(post => (post.id).toString() === id);

    useEffect(() => {
        if(blog){
          setEditBlogTitle(blog.title);
          setEditBlogBody(blog.body);
        }

    },[blog,setEditBlogTitle,setEditBlogBody])
  return (
    <div className='blogHome'>
      <Navbar/>
      <main className='NewBlog'>
        <h2>New Post</h2>
        <form className='newBlogForm' onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="blogTitle">Title:</label>
          <input 
            type="text" 
            required
            value={editBlogTitle}
            onChange={(e) => setEditBlogTitle(e.target.value)}
            id="blogTitle" 
            placeholder='Enter topic/title...'
          />
          <label htmlFor="blogBody">Post:</label>
          <textarea 
            value={editBlogBody}
            onChange={(e) => setEditBlogBody(e.target.value)}
            required 
            placeholder='Enter your Content'
            id="blogBody" 
            cols="30" 
            rows="10">
            

          </textarea>
          <button onClick={() => handleEdit(blog.id)} type='submit'>Submit</button>
        </form>
    </main>
    </div>
  )
}

export default EditBlog