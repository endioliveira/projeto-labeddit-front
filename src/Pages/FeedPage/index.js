import React from "react";
import { CreatePost, Header, Posts } from "../../Components";

export const FeedPage = () => {
  return (
    <>
      <Header />
      <CreatePost/>
      <Posts/>
    </>
  );
};
