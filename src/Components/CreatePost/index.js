import React, { useContext, useState } from "react";
import {
  Container,
  TextArea,
  PostContainer,
  BoxButton,
  Button,
  Line,
} from "./CreatePostStyled";
import api from "../../services/api";
import { PostsContext } from "../../context/PostsContext";

export const CreatePost = () => {
  const [content, setContent] = useState("");

  const context = useContext(PostsContext);

  const { setPosts } = context;

  const createPost = async (e) => {
    e.preventDefault();

    const body = {
      content,
    };

    await api
      .post("/posts", body)
      .then(() => {
        alert("Post criado!");
        setContent("");
        api.get("/posts").then((response) => {
          setPosts(response.data);
        });
      })
      .catch((error) => {
        console.error(error?.response?.data);
        window.alert(error?.response?.data);
      });
  };
  return (
    <Container>
      <PostContainer>
        <form onSubmit={createPost}>
          <TextArea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Escreva seu post"
          ></TextArea>
          <BoxButton>
            <Button type="submit">Postar</Button>
          </BoxButton>
        </form>
      </PostContainer>
      <Line />
    </Container>
  );
};
