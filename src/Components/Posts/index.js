import React from "react";
import { Comments } from "../Comments/index"
import {
  Container,
  PostBox,
  BoxButton,
  ButtonLikeDislike,
  ButtonComment,
} from "./PostsStyled";
import iconLike from "../../assets/icon-like.svg";
import iconDislike from "../../assets/icon-dislike.svg";
import iconComment from "../../assets/icon-comment.svg";

export const Posts = () => {
  return (
    <Container>
      <PostBox>
        <span>Enviado por: labaluno83</span>
        <p>
          Porque a maioria dos desenvolvedores usam Linux? ou as empresas de
          tecnologia usam Linux ?
        </p>

        <BoxButton>
          <ButtonLikeDislike>
            <img src={iconLike} alt="Botão de Like" />
            1.2K
            <img src={iconDislike} alt="Botão de Dislike" />
          </ButtonLikeDislike>
          <ButtonComment>
            <img src={iconComment} alt="Botão de Comentário" />
            132
          </ButtonComment>
        </BoxButton>
      </PostBox>

      <Comments/>
    </Container>
  );
};
