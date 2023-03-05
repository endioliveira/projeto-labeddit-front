import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const PostBox = styled.div`
  margin-top: 1.625rem;
  width: 22.75rem;
  height: 10.438rem;
  border-radius: 12px;
  background-color: #fbfbfb;
  border: 0.1rem solid #e0e0e0;

  span {
    padding-left: 0.625rem;
    padding-top: 0.563rem;
    font-size: 0.75rem;

    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    text-align: center;
    color: #6f6f6f;
  }

  p {
    padding: 0.625rem;
    font-size: 1.125rem;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
  }
`;

export const BoxButton = styled.div`
  margin-left: 0.625rem;
  width: 10.896rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  column-gap: 0.688rem;
`;

export const ButtonLikeDislike = styled.button`
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

  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const ButtonComment = styled.button`
  width: 4.083rem;
  height: 1.743rem;

  color: #7f7f7f;
  background-color: #fbfbfb;
  border: 0.1rem solid #ececec;
  border-radius: 28px;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 0.598rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
