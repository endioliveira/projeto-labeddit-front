import React, { useEffect, useState } from "react";
import { Header } from "../../Components"
import api from "../../services/api";
import { PostsContext } from "../../context/PostsContext";
import { useParams } from "react-router";
import {Posts} from "../../Components/Posts"

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
        <Posts post={post}/>
      </PostsContext.Provider>
    </>
  );
};
