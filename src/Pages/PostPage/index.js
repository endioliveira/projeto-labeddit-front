import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { PostsContext } from "../../context/PostsContext";
import { Comments, CreateComment, Header } from "../../Components";
import { Posts } from "../../Components/Posts";

export const PostPage = () => {
  const pathParams = useParams();

  const [post, setPost] = useState([]);

  const context = {
    post,
    setPost,
  };

  useEffect(() => {
     api
      .get(`/posts/${pathParams.id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error(error?.response?.data);
        window.alert(error?.response?.data);
      });
  }, []);
  
  return (
    <>
      <Header />
      <PostsContext.Provider value={context}>
        <Posts post={context.post} setPost={setPost}/>
        <CreateComment />
        
        {context.post.post_comments ? post.post_comments.map((comment)=>{
          return <Comments key={comment.id} comment={comment} setPost={setPost}/>
        }) : <p>carregando</p>} 
        
      </PostsContext.Provider>
    </>
  );
};
