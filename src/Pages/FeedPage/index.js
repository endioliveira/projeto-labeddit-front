import React, { useEffect, useState} from "react";
import { CreatePost, Header, Posts } from "../../Components";
import api from "../../services/api"
import {PostsContext} from "../../context/PostsContext"

export const FeedPage = () => {

  const [posts, setPosts] = useState([])

  const context = {
    posts, setPosts
  }

  useEffect(() => {
   api.get("/posts")
   .then((response) => {
    setPosts(response.data)
   }).catch((error) => {
    console.error(error?.response?.data);
    window.alert(error?.response?.data)
   })
  }, []);

  return (
    <>
      <Header />
      <PostsContext.Provider value={context}>
      <CreatePost/>
      {context.posts.map((post) => {
        return <Posts key={post.id} post={post}/> 
      })}
      </PostsContext.Provider>
    </>
  );
};
