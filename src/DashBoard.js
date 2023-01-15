import React from 'react';
import Projects from './Projects';
import { useContext } from 'react';
import DataContext from './DataContext';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AddPost from './AddPost';
import Edit from './Edit';
const DashBoard = () => {

  const {searchResult,name,handleClick,popUp,showEdit,searchPost,setSearchPost} = useContext(DataContext);
  
  return (
    <>
      <div className='Dash-board'>
        <div className='dash-heading'>
            <div className='dash-top'>
              <div className='dash-title'>
                  <h2>Achievements</h2>
              </div>
              <div className='dash-date'>
                  <p>{`${name}`}</p>
              </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='search-bar'>
                <label htmlFor="search"></label>
                <input
                    className="input" 
                    type="text" 
                    name="" 
                    id="search"
                    placeholder='Search..' 
                    value={searchPost}
                    onChange={(e) => setSearchPost(e.target.value)}
                />
            </form>
        </div>
        
        <div className='project-grid'>
          
          {searchResult.length ?
            searchResult.map((post) => (
              <Projects post={post} key={post.id}/>
            )) : 
            <p className='para' style={{textAlign:"center", fontSize: "1.5rem"}}>No Achievements To Display</p>
          }
          
        </div>
        
        <Fab onClick={() => handleClick()} className='addMore' color="primary" aria-label="add">
          <AddIcon/>
        </Fab>
        
        
      </div>
      {popUp && <AddPost/>}
      {showEdit && <Edit/>}
    </>
  )
}

export default DashBoard