import React from "react";
import { Container, TextArea, BoxComments, BoxButton, Button, Line } from "./CommentsStyled"

export const Comments = () => {
    return (
      <Container>
        <BoxComments>
            <TextArea id="comment" name="comment" >
            Escreva seu post...
            </TextArea>

            <BoxButton>
              <Button>Responder</Button>
            </BoxButton>
        </BoxComments>
        <Line/>
      </Container>
    );
  };