import React from 'react';
// import {BiDotsVerticalRounded} from 'react-icons/bi'
import { useContext } from 'react';
import DataContext from './DataContext';
import { Link } from 'react-router-dom';

const Projects = ({post}) => {
    const id = post.id;
    const {handleDelete,showEditPage} = useContext(DataContext);
    
  return (
    <div className='Project'>
        <div className='dash-task'>
            <h3>{post.date}</h3>
        </div>
        <div className='dash-content'>
            <div className='task-title'>
                <h3>{post.title}</h3>
            </div>
            <div className='task-body'>
                {post.description}
            </div>
        </div>
        <div className='btns'>
            <Link to={`/edit/${id}`} ><button className='edit-btn' onClick={() => showEditPage()} >Edit</button></Link>
            <button className='del-btn' onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
    </div>
  )
}

export default Projects