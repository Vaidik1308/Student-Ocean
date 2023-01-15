import React from 'react';
// import Navbar from './Navbar';
import { useContext } from 'react';
import DataContext from './DataContext';
import {FaTimes} from 'react-icons/fa'


const AddPost = () => {

    const {handleRemove,handleSubmit,postTitle,setPostTitle,postDescription,setPostDescription} = useContext(DataContext);
    


  return (
    <div className='addPost'>
            <div className='addPost-heading'>
                <h2>ADD YOUR ACHIEVEMENT</h2>
                <FaTimes onClick={() => handleRemove() }/>
            </div>
            <div className='addPost-body'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="formDiv">

                    </label>
                    <input
                        required 
                        type="text" 
                        id="formDiv"
                        placeholder='Title....' 
                        value={postTitle}
                        onChange={(e) => setPostTitle(e.target.value)}
                    />
                    <textarea 
                        required
                        id="textArea" 
                        cols="50" 
                        rows="5"
                        placeholder='Description...'
                        value={postDescription}
                        onChange={(e) => setPostDescription(e.target.value)}
                    >

                    </textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    
)}

export default AddPost