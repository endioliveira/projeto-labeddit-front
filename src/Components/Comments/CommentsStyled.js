import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BoxComments = styled.div`
  margin-top: 0.563rem;
  margin-top: 1.625rem;
  width: 22.75rem;
  height: 10.438rem;
  border-radius: 12px;
  background-color: #fbfbfb;
  border: 0.1rem solid #e0e0e0;

  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;

  span {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #6f6f6f;

    padding-left: 0.625rem;
    margin-top: 0.563rem !important;
  }

  p {
    padding: 0.625rem;
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;

    color: #000000;
  }
`;

export const LikeOrDislike = styled.div`
  border-radius: 28px;
  border: 1px solid #DFDFDF;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 6.125rem;
  height: 1.7431rem;

  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 9.56098px;
  text-align: center;

  color: #6f6f6f;
`;

export const Like = styled.button`
  border: none;
  background-color: #fbfbfb;
`;

export const Dislike = styled.button`
  border: none;
  background-color: #fbfbfb;
`;
