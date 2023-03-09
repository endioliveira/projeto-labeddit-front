import styled from "styled-components";

export const Title = styled.h2`
  margin-top: 1.813rem;
  padding-left: 1.5rem;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  color: #373737;
`;

export const Form = styled.form`
  margin-top: 6.6875rem;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;

  p {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #000000;
  }

  span {
    color: #4088cb;
  }
`;

export const Input = styled.input`
  width: 22.6875rem;
  height: 3.75rem;
  padding: 8px;
  border: 1px solid #d5d8de;
  border-radius: 3px;
`;

export const BoxParagraph = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .checkbox {
    margin-top: 1.063rem;
  }

  label {
    margin-left: 0.6rem;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #000000;
  }
`;

export const BoxButton = styled.div`
  margin-top: 1.3rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Button = styled.button`
  border: none;
  border-radius: 20px;
  width: 22.8125rem;
  height: 3.1875rem;
  background: rgb(255, 106, 128);
  background: linear-gradient(
    41deg,
    rgba(255, 106, 128, 1) 0%,
    rgba(250, 171, 84, 1) 100%
  );
  color: #ffffff;
`;
