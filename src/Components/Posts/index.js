import React, { useState } from "react";
import { CreateComment } from "../CreateComment/index";
import {
  Container,
  PostBox,
  UserSubmitted,
  BoxButton,
  Like,
  Dislike,
  ButtonComment,
  ButtonLikeDislike,
} from "./PostsStyled";
import iconLike from "../../assets/icon-like.svg";
import iconDislike from "../../assets/icon-dislike.svg";
import iconComment from "../../assets/icon-comment.svg";

export const Posts = ({post}) => {
  
  // const [like, setLike] = useState(0);
  const [comments, setComments] = useState(false);

  return (
    <Container>
      <PostBox>
        <UserSubmitted>Enviado por: {post.creator.nickname}</UserSubmitted>
        <p>
        {post.content}
        </p>

        <BoxButton>
          <ButtonLikeDislike>
            <Like>
              <img src={iconLike} alt="Botão de Like" />
            </Like>
            {post.likes}
            <Dislike>
              <img src={iconDislike} alt="Botão de Dislike" />
            </Dislike>
          </ButtonLikeDislike>
         
          <ButtonComment onClick={() => setComments(!comments)}>
            <img src={iconComment} alt="Botão de Comentário" />
            132
          </ButtonComment>
        </BoxButton>
      </PostBox>
      {comments ? false : <CreateComment />}
    </Container>
  );
};
