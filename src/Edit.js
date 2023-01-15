import React,{useEffect} from 'react';
import { useContext } from 'react';
import DataContext from './DataContext';
import { useParams } from 'react-router-dom';
import {FaTimes } from 'react-icons/fa';


const Edit = () => {
    const {posts,editTitle,setEditDescription,editDescription,setEditTitle,handleEdit,removeEditPage} = useContext(DataContext);
    const {id} = useParams();
    const post = posts.find((post) => (post.id).toString() === id.toString() );
    useEffect(() => {
        if(post){
            setEditTitle(post.title);
            setEditDescription(post.description);
        }
    },[post,setEditTitle,setEditDescription])
  return (
    <div className='addPost'>
            <div className='addPost-heading'>
                <h2>ADD YOUR ACHIEVEMENT</h2>
                <FaTimes onClick={() => removeEditPage() }/>
            </div>
            <div className='addPost-body'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="formDiv">

                    </label>
                    <input
                        required 
                        type="text" 
                        id="formDiv"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <textarea 
                        required
                        id="textArea" 
                        cols="50" 
                        rows="5"
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                    >

                    </textarea>
                    <button onClick={() => handleEdit(post.id)} type='submit'>Submit</button>
                </form>
            </div>
        </div>
  )
}

export default Edit