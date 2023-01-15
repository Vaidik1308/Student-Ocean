import { useNavigate } from 'react-router-dom';
import { createContext,useEffect,useState } from "react";
import {format} from 'date-fns';

const DataContext = createContext({});

export const DataProvider = ({children}) => {

    const [posts,setPosts] = useState(
        [
            {
                "id": "1",
                "title": "UI Development",
                "description":"Back-end Development",
                "date":"January 14, 2023 11:01:25 AM"
            },
            {
                "id": "2",
                "title": "Python",
                "description":"Back-end Development",
                "date":"January 14, 2023 11:01:25 AM"
            },
            {
                "id": "3",
                "title": "Node Js",
                "description":"Back-end Development",
                "date":"January 14, 2023 11:01:25 AM"
            },
            {
                "id": "4",
                "title": "React Developer",
                "description":"Front-end",
                "date":"January 14, 2023 11:01:25 AM"
            },
            {
                "id": "5",
                "title": "Bootstrap And tailwand CSS",
                "description":"Front-end",
                "date":"January 14, 2023 11:01:25 AM"
            },
            {
                "id": "6",
                "title": "JavaScript",
                "description":"Front-end Back-end",
                "date":"January 14, 2023 11:01:25 AM"
            },
            {
                "id": "7",
                "title": "CSS",
                "description":"Front-end",
                "date":"January 14, 2023 11:01:25 AM"
            },
            {
                "id": "8",
                "title": "HTML",
                "description":"Front-end ",
                "date":"January 14, 2023 11:01:25 AM"
            }
    ]);
    const [popUp,setPopUp] = useState(false);
    const [showEdit,setShowEdit] = useState(false)
    const [postTitle,setPostTitle] = useState('');
    const [postDescription, setPostDescription] = useState('');
    const [editTitle,setEditTitle] = useState('');
    const [editDescription,setEditDescription] = useState('');
    const [searchPost,setSearchPost] = useState('');
    const [searchResult,setSearchResult] = useState([]);
    const history = useNavigate();
    const name = format(new Date(),'MMMM, dd');
    



    // Functions

    const handleClick = () => {
        setPopUp(!popUp);
    }
    const handleRemove = () => {
        setPopUp(!popUp)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const date = format(new Date(),'MMMM dd, yyyy pp');
        const id = posts.length ? (posts.length + 1) : 1;
        const newPost = {
            id,
            title: postTitle,
            description: postDescription,
            date
        }
        const postLists = [newPost,...posts];
        console.log(postLists);
        setPosts(postLists);
        setPostTitle('');
        setPostDescription('');
        setPopUp(false);
        history('/');
    }

    const handleDelete = (id) => {
        const postLists = posts.filter((post) => (post.id).toString() !== id.toString() ) 
        setPosts(postLists);
    }
    
    const removeEditPage = () => {
        setShowEdit(!showEdit);
        history('/');
    }
    const showEditPage = () => {
        setShowEdit(!showEdit);
    }
    const handleEdit = (id) => {
        const date = format(new Date(),'MMMM dd, yyyy pp');
        const updatePost = {
        id,
        title:editTitle,
        description:editDescription,
        date
        }
        console.log(updatePost);
        const postList = [updatePost,...(posts.filter((post) => post.id !== id))]
        console.log(postList);
        setPosts(postList);
        setEditTitle('');
        setEditDescription('');
        setShowEdit(false)
        history('/');
    }

    useEffect(() => {
       const filterSearch = posts.filter((post) => ((post.title).toLowerCase().includes((searchPost).toLowerCase()) ||  (post.description).toLowerCase().includes((searchPost).toLowerCase())));
    //    console.log(filterSearch);
    //    setSearchPost(filterSearch)
    setSearchResult(filterSearch);
    },[searchPost,posts]);

    
    return (
        <DataContext.Provider value={{
            posts,setPosts,name,popUp,setPopUp,handleClick,handleRemove,postTitle,setPostTitle,
            postDescription, setPostDescription,handleSubmit,handleDelete,editTitle,setEditTitle,editDescription,
            setEditDescription,showEditPage,showEdit,setShowEdit,removeEditPage,handleEdit,searchPost,setSearchPost,
            searchResult

        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;