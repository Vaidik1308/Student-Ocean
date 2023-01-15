import { useNavigate } from 'react-router-dom';
import { createContext,useEffect,useState } from "react";
import {format} from 'date-fns';
import api from './api/BlogApi';

const BlogContext = createContext({});

export const BlogProvider = ({children}) => {

    const [blogs,setBlogs] = useState([]);
    const [blogTitle,setBlogTitle] = useState('');
    const [blogBody, setBlogBody] = useState('');
    const history = useNavigate();
    const [editBlogTitle,setEditBlogTitle] = useState('');
    const [editBlogBody, setEditBlogBody] = useState('');
    



    // Functions


    useEffect(() => {
        const fetchPost = async () => {
          try{
            const response = await api.get('/blogs');
            if(response && response.data){
              setBlogs(response.data);
            }
          }catch(err){
            if(err.response){
              //Not in the 200 response range
              console.log(err.response.data);
              console.log(err.response.status);
              console.log(err.response.headers);
            }
            else {
              console.log(`Error: ${err.message}`);
            }
          }
        }
        fetchPost();
      },[])

    const handleDelete = async (id) => {
        try{
        await api.delete(`/blogs/${id}`)
        const postList = blogs.filter(post => post.id !== id)
        alert(`post ${id} deleted`);
        setBlogs(postList);
        history('/blog')
        }catch(err){
        console.log(`ERROR: ${err.message}`);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = (blogs.length)? blogs.length + 1 : 1;
        const newPosts = {
        id,
        title: blogTitle,
        dateTime: format(new Date(), 'MMMM dd, yyyy pp'),
        body:blogBody,
        }
        try{
        const response = await api.post('/blogs' , newPosts);
        console.log(response.data);
        const postList = [...blogs,response.data];
        setBlogs(postList);
        setBlogBody('');
        setBlogTitle('');
        history('/blog');
        }catch(err){
        console.log(`ERROR: ${err.message}`);
        }
        
    }
    
    const handleEdit = async (id) => {
        const dateTime = format(new Date(),'MMMM dd, yyyy pp');
        const updatePost = {
        id,
        title:editBlogTitle,
        body:editBlogBody,
        dateTime
        }
        
        try{
        const response = await api.put(`/blogs/${id}` , updatePost);
        // console.log(response.data);
        // console.log(id);
        setBlogs(blogs.map((post) => (post.id) === id ? {...response.data} : post ));
        setEditBlogTitle('');
        setEditBlogBody('');
        history('/blog');
        }catch(err){
        console.log(`ERROR: ${err.message}`);
        }
    }
    

    
    return (
        <BlogContext.Provider value={{
            blogs,setBlogs,handleSubmit,blogTitle,setBlogTitle,blogBody, setBlogBody,editBlogTitle,
            setEditBlogTitle,editBlogBody, setEditBlogBody,handleDelete,handleEdit
        }}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext;