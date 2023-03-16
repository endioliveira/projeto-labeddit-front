import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BoxComments = styled.div`
  /* margin-top: 0.563rem;
  margin-top: 1.625rem;
  width: 22.75rem;
  height: 10.438rem;
  border-radius: 12px;
  background-color: #fbfbfb;
  border: 0.1rem solid #e0e0e0;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px; */

  margin-top: 1.625rem;
  padding: 0.625rem;
  width: 22.75rem;
  border-radius: 12px;
  background-color: #fbfbfb;
  border: 0.1rem solid #e0e0e0;

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

export const Like = styled.button`
  border: none;
  background-color: #fbfbfb;

  cursor: pointer;

  svg:hover path {
    fill: #b3ffae;
  }
`;

export const Dislike = styled.button`
  border: none;
  background-color: #fbfbfb;

  cursor: pointer;

  svg:hover path {
    fill: #ff6464;
  }
`;
