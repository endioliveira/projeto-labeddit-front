import React, { useContext, useEffect, useState} from "react";
import { CreatePost, Header, Posts } from "../../Components";
import api from "../../services/api"

export const FeedPage = () => {

  const [posts, setPosts] = useState([])

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
      <CreatePost/>
      {posts.map((post) => {
        return <Posts key={post.id} post={post}/> 
      })}
    </>
  );
};
