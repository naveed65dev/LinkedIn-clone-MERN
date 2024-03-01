import React, { useEffect, useState } from 'react'
import FeedStartPost from "./feedStartPost/FeedStartPost"
import Post from "./post/Post"

import "./Feed.css"
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import axios from '../../axios';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const user = useSelector(selectUser);

  const getPost = () => {
    
    axios.get('/api/get')
    .then((res) => {
        setPosts(res.data);
        
    })
    .catch((error) => {
        console.error('Error fetching post:', error);
        toast.error('Error fetching post');
    });
};

  useEffect(()=>{
    getPost();
      
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    if (input !== "") {
     
      axios.post('/api/create', {
        avatar: user.photoURL,
        name: user.displayName,
        description: '' ,
        content: input,
      })
        .then(response => {
          console.log(response.data);
         
        })
        .catch(error => {
          console.error('Error adding post:', error);
          toast.error('Error adding post');
        });
    }
  
    setInput("");
  };
  
  return (
    <div className='feed'>
      <FeedStartPost sendPost={sendPost} input={input} setInput={setInput} avatar={user.photoURL} />
      {posts.map(({ id, data }) => (
  <Post
    key={id}
    avatar={data?.avatar} // Use optional chaining to handle undefined data
    name={data?.name}
    description={data?.description}
    content={data?.content}
    timestamp={data?.timestamp}
  />
))}

    </div>
  )
}

export default Feed;