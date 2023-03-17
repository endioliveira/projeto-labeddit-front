import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { PostsContext } from "../../context/PostsContext";
import { CreatePost, Header, Posts } from "../../Components";
import { ContainerFeedPage } from "./FeedPageStyled"

export const FeedPage = () => {
  const [posts, setPosts] = useState([]);

  const context = {
    posts,
    setPosts,
  };

  useEffect(() => {
    api
      .get("/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error?.response?.data);
        window.alert(error?.response?.data);
      });
  }, []);

  return (
    <>
    <Header />
    <ContainerFeedPage>
      <PostsContext.Provider value={context}>
        <CreatePost />
        {context.posts.map((post) => {
          return <Posts key={post.id} post={post} setPosts={setPosts}/>;
        })}
      </PostsContext.Provider>
    </ContainerFeedPage>
    </>
  );
};
