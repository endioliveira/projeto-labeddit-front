import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const PostBox = styled.div`
  margin-top: 1.625rem;
  padding: 0.625rem;
  width: 22.75rem;
  border-radius: 12px;
  background-color: #fbfbfb;
  border: 0.1rem solid #e0e0e0;

  p {
    font-size: 1.125rem;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    margin: 1.125rem 0;
  }
`;

export const UserSubmitted = styled.span`
  font-size: 0.75rem;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  color: #6f6f6f;
`;

export const BoxButton = styled.div`
  width: 10.896rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  column-gap: 0.688rem;
`;

export const ButtonLikeDislike = styled.div`
  width: 6.125rem;
  height: 1.743rem;
  background-color: #fbfbfb;
  border: 0.1rem solid #ececec;
  border-radius: 28px;
  color: #7f7f7f;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 0.598rem;
  text-align: center;
  padding: 0.292rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.995rem;

`;
export const ButtonComment = styled.button`
 width: 6.125rem;
  height: 1.743rem;
  background-color: #fbfbfb;
  border: 0.1rem solid #ececec;
  border-radius: 28px;
  color: #7f7f7f;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 0.598rem;
  text-align: center;
  padding: 0.292rem;
  cursor: pointer;


  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.995rem;

  svg:hover path {
    fill: #62CDFF;
  }
`;

export const Like = styled.button`
  border: none;
  background-color: #fbfbfb;
  cursor: pointer;

  svg:hover path {
    fill: #b3ffae;
  }
`;

export const Dislike = styled.button`
  padding-top: 0.2rem;
  border: none;
  background-color: #fbfbfb;
  cursor: pointer;

  svg:hover path {
    fill: #ff6464;
  }


`;
