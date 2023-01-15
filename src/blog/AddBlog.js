import React from 'react';
import Navbar from '../Navbar';
import { useContext } from 'react';
import BlogContext from './BlogContext';

const AddBlog = () => {

  const {handleSubmit,blogTitle,setBlogTitle,blogBody,setBlogBody} = useContext(BlogContext);
  return (
    <div className='blogHome'>
      <Navbar/>
      <main className='NewBlog'>
        <h2>New Post</h2>
        <form className='newBlogForm' onSubmit={handleSubmit}>
          <label htmlFor="blogTitle">Title:</label>
          <input 
            type="text" 
            required
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
            id="blogTitle" 
            placeholder='Enter topic/title...'
          />
          <label htmlFor="blogBody">Post:</label>
          <textarea 
            value={blogBody}
            onChange={(e) => setBlogBody(e.target.value)}
            required 
            placeholder='Enter your Content'
            id="blogBody" 
            cols="30" 
            rows="10">
            

          </textarea>
          <button type='submit'>Submit</button>
        </form>
    </main>
    </div>
  )
}

export default AddBlog