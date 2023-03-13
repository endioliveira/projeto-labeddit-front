import React from "react";
import { Comments } from "../Comments";
import { Container, TextArea, BoxCreateComments, BoxButton, Button, Line } from "./CreateCommentStyled"

export const CreateComment = () => {
    return (
      <Container>
        <BoxCreateComments>
            <TextArea id="comment" name="comment" >
            </TextArea>

            <BoxButton>
              <Button>Responder</Button>
            </BoxButton>
        </BoxCreateComments>
        <Line/>
        <Comments/>
      </Container>
    );
  };