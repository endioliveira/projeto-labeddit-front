import React from "react";
import { Container, TextArea, PostContainer, BoxButton, Button, Line } from "./CreatePostStyled"

export const CreatePost = () => {
    return (
      <Container>
        <PostContainer>
            <TextArea id="createPost" name="createPost" >
            Escreva seu post...
            </TextArea>

            <BoxButton>
              <Button>Postar</Button>
            </BoxButton>
        </PostContainer>
        <Line/>
      </Container>
    );
  };
  