import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { PostsContext } from "../../context/PostsContext";
import { Container, TextArea, BoxCreateComments, BoxButton, Button, Line } from "./CreateCommentStyled"
import api from "../../services/api"

export const CreateComment = () => {
  const [content, setContent] = useState("");

  const pathParams = useParams();

  const context = useContext(PostsContext);

  const { setPost } = context;

  const createComment = async(e) => {
    e.preventDefault()

    const body = {
      content
    }

    await api.post(`/posts/${pathParams.id}/createComment`, body)
    .then(() => {
      alert("Comentário criado!");
      setContent("");
      api.get(`/posts/${pathParams.id}`).then((response) => {
        setPost(response.data);
      });
    })
    .catch((error) => {
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    });
  }

    return (
      <Container>
        <BoxCreateComments>
            <form onSubmit={createComment}>
              <TextArea id="comment" name="comment" value={content} placeholder="Adicionar comentário" onChange={(e) => setContent(e.target.value)}>
              </TextArea>
              <BoxButton>
                <Button type="submit">Responder</Button>
              </BoxButton>
            </form>
        </BoxCreateComments>
        <Line/>
      </Container>
    );
  };