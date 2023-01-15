import { useNavigate } from 'react-router-dom';
import { createContext,useEffect,useState } from "react";
import {format} from 'date-fns';
import api from './api/BlogApi';

const BlogContext = createContext({});

export const BlogProvider = ({children}) => {

    const [blogs,setBlogs] = useState(
        [
            {
              "id": 1,
              "title": "My First Post",
              "dateTime": "July 01, 2021 11:17:36 AM",
              "body": "It wasn't supposed to end that way. The plan had been meticulously thought out and practiced again and again. There was only one possible result once it had been implemented, but as they stood there the result wasn't anything close to what it should have been. They all blankly looked at each wondering how this could have happened. In their minds, they all began to blame the other members of the group as to why they had failed.Since they are still preserved in the rocks for us to see, they must have been formed quite recently, that is, geologically speaking. What can explain these striations and their common orientation? Do you ever hear about the Great Ice Age or the Pleistocene Epoch? Less than one million years ago, in fact, some 12,000 years ago, an ice sheet many thousands of feet thick rode over Burke Mountain in a southeastward direction. The many boulders frozen to the underside of the ice sheet tended to scratch the rocks over which they rode. The scratches or striations seen in the park rocks were caused by these attached boulders. The ice sheet also plucked and rounded Burke Mountain into the shape it possesses today."
            },
            {
              "id": 2,
              "title": "My 2nd Post",
              "body": "It wasn't supposed to end that way. The plan had been meticulously thought out and practiced again and again. There was only one possible result once it had been implemented, but as they stood there the result wasn't anything close to what it should have been. They all blankly looked at each wondering how this could have happened. In their minds, they all began to blame the other members of the group as to why they had failed.Since they are still preserved in the rocks for us to see, they must have been formed quite recently, that is, geologically speaking. What can explain these striations and their common orientation? Did you ever hear about the Great Ice Age or the Pleistocene Epoch? Less than one million years ago, in fact, some 12,000 years ago, an ice sheet many thousands of feet thick rode over Burke Mountain in a southeastward direction. The many boulders frozen to the underside of the ice sheet tended to scratch the rocks over which they rode. The scratches or striations seen in the park rocks were caused by these attached boulders. The ice sheet also plucked and rounded Burke Mountain into the shape it possesses today.",
              "dateTime": "December 21, 2022 6:26:25 PM"
            },
            {
              "id": 3,
              "title": "My 3rd Post",
              "body": "this is my third post and it is used to edit\n",
              "dateTime": "December 21, 2022 5:38:11 PM"
            },
            {
              "id": 4,
              "title": "My Fourth Post 4",
              "body": "It wasn't supposed to end that way. The plan had been meticulously thought out and practiced again and again. There was only one possible result once it had been implemented, but as they stood there the result wasn't anything close to what it should have been. They all blankly looked at each wondering how this could have happened. In their minds, they all began to blame the other members of the group as to why they had failed.Since they are still preserved in the rocks for us to see, they must have been formed quite recently, that is, geologically speaking. What can explain these striations and their common orientation? Did you ever hear about the Great Ice Age or the Pleistocene Epoch? Less than one million years ago, in fact, some 12,000 years ago, an ice sheet many thousands of feet thick rode over Burke Mountain in a southeastward direction. The many boulders frozen to the underside of the ice sheet tended to scratch the rocks over which they rode. The scratches or striations seen in the park rocks were caused by these attached boulders. The ice sheet also plucked and rounded Burke Mountain into the shape it possesses today.",
              "dateTime": "December 21, 2022 5:42:45 PM"
            },
            {
              "id": 5,
              "title": "My Fourth Post 4",
              "body": "It wasn't supposed to end that way. The plan had been meticulously thought out and practiced again and again. There was only one possible result once it had been implemented, but as they stood there the result wasn't anything close to what it should have been. They all blankly looked at each wondering how this could have happened. In their minds, they all began to blame the other members of the group as to why they had failed.Since they are still preserved in the rocks for us to see, they must have been formed quite recently, that is, geologically speaking. What can explain these striations and their common orientation? Did you ever hear about the Great Ice Age or the Pleistocene Epoch? Less than one million years ago, in fact, some 12,000 years ago, an ice sheet many thousands of feet thick rode over Burke Mountain in a southeastward direction. The many boulders frozen to the underside of the ice sheet tended to scratch the rocks over which they rode. The scratches or striations seen in the park rocks were caused by these attached boulders. The ice sheet also plucked and rounded Burke Mountain into the shape it possesses today.",
              "dateTime": "December 21, 2022 5:42:45 PM"
            },
            {
              "id": 6,
              "title": "My Fourth Post 4",
              "body": "It wasn't supposed to end that way. The plan had been meticulously thought out and practiced again and again. There was only one possible result once it had been implemented, but as they stood there the result wasn't anything close to what it should have been. They all blankly looked at each wondering how this could have happened. In their minds, they all began to blame the other members of the group as to why they had failed.Since they are still preserved in the rocks for us to see, they must have been formed quite recently, that is, geologically speaking. What can explain these striations and their common orientation? Did you ever hear about the Great Ice Age or the Pleistocene Epoch? Less than one million years ago, in fact, some 12,000 years ago, an ice sheet many thousands of feet thick rode over Burke Mountain in a southeastward direction. The many boulders frozen to the underside of the ice sheet tended to scratch the rocks over which they rode. The scratches or striations seen in the park rocks were caused by these attached boulders. The ice sheet also plucked and rounded Burke Mountain into the shape it possesses today.",
              "dateTime": "December 21, 2022 5:42:45 PM"
            },
            {
              "id": 7,
              "title": "My Fourth Post 4",
              "body": "It wasn't supposed to end that way. The plan had been meticulously thought out and practiced again and again. There was only one possible result once it had been implemented, but as they stood there the result wasn't anything close to what it should have been. They all blankly looked at each wondering how this could have happened. In their minds, they all began to blame the other members of the group as to why they had failed.Since they are still preserved in the rocks for us to see, they must have been formed quite recently, that is, geologically speaking. What can explain these striations and their common orientation? Did you ever hear about the Great Ice Age or the Pleistocene Epoch? Less than one million years ago, in fact, some 12,000 years ago, an ice sheet many thousands of feet thick rode over Burke Mountain in a southeastward direction. The many boulders frozen to the underside of the ice sheet tended to scratch the rocks over which they rode. The scratches or striations seen in the park rocks were caused by these attached boulders. The ice sheet also plucked and rounded Burke Mountain into the shape it possesses today.",
              "dateTime": "December 21, 2022 5:42:45 PM"
            },
            {
              "id": 8,
              "title": "My Fourth Post 4",
              "body": "It wasn't supposed to end that way. The plan had been meticulously thought out and practiced again and again. There was only one possible result once it had been implemented, but as they stood there the result wasn't anything close to what it should have been. They all blankly looked at each wondering how this could have happened. In their minds, they all began to blame the other members of the group as to why they had failed.Since they are still preserved in the rocks for us to see, they must have been formed quite recently, that is, geologically speaking. What can explain these striations and their common orientation? Did you ever hear about the Great Ice Age or the Pleistocene Epoch? Less than one million years ago, in fact, some 12,000 years ago, an ice sheet many thousands of feet thick rode over Burke Mountain in a southeastward direction. The many boulders frozen to the underside of the ice sheet tended to scratch the rocks over which they rode. The scratches or striations seen in the park rocks were caused by these attached boulders. The ice sheet also plucked and rounded Burke Mountain into the shape it possesses today.",
              "dateTime": "December 21, 2022 5:42:45 PM"
            },
            {
              "id": 9,
              "title": "My Fourth Post 4",
              "body": "It wasn't supposed to end that way. The plan had been meticulously thought out and practiced again and again. There was only one possible result once it had been implemented, but as they stood there the result wasn't anything close to what it should have been. They all blankly looked at each wondering how this could have happened. In their minds, they all began to blame the other members of the group as to why they had failed.Since they are still preserved in the rocks for us to see, they must have been formed quite recently, that is, geologically speaking. What can explain these striations and their common orientation? Did you ever hear about the Great Ice Age or the Pleistocene Epoch? Less than one million years ago, in fact, some 12,000 years ago, an ice sheet many thousands of feet thick rode over Burke Mountain in a southeastward direction. The many boulders frozen to the underside of the ice sheet tended to scratch the rocks over which they rode. The scratches or striations seen in the park rocks were caused by these attached boulders. The ice sheet also plucked and rounded Burke Mountain into the shape it possesses today.",
              "dateTime": "December 21, 2022 5:42:45 PM"
            }
          ]);
    const [blogTitle,setBlogTitle] = useState('');
    const [blogBody, setBlogBody] = useState('');
    const history = useNavigate();
    const [editBlogTitle,setEditBlogTitle] = useState('');
    const [editBlogBody, setEditBlogBody] = useState('');
    



    // Functions


    useEffect(() => {
        const fetchPost = async () => {
          try{
            const response = await api.get('/posts');
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
        await api.delete(`/posts/${id}`)
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
        const id = (blogs.length) ? (blogs[blogs.length - 1] + 1) : 1;
        const newPosts = {
        id,
        title: blogTitle,
        dateTime: format(new Date(), 'MMMM dd, yyyy pp'),
        body:blogBody,
        }
        try{
        const response = await api.post('/posts' , newPosts);
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
        const response = await api.put(`/posts/${id}` , updatePost);
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