import React from 'react';
import { Container, BoxComments, LikeOrDislike, Like, Dislike } from "./CommentsStyled"
import iconLike from "../../assets/icon-like.svg";
import iconDislike from "../../assets/icon-dislike.svg";

export const Comments = () => {
  return (
    <>
    <Container>
      <BoxComments>
        <span>
        Enviado por: labaluno12 
        </span>
        <p>
        Não posso falar por todos, mas usar Linux ajudou meu pc a ter uma performance melhor (e evitou que eu precisasse comprar um novo)
        </p>
          <LikeOrDislike>
            <Like>
              <img src={iconLike} alt=""/>
            </Like>
            351
            <Dislike>
              <img src={iconDislike} alt=""/>
            </Dislike>
          </LikeOrDislike>
      </BoxComments>
    </Container>
    </>
  )
};
