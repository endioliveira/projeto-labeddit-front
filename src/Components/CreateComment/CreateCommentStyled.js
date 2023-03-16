import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BoxCreateComments = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextArea = styled.textarea`
  padding-left: 1.063rem;
  padding-top: 1.125rem;
  width: 22.75rem;
  height: 8.188rem;
  resize: none;
  border-radius: 12px;
  background-color: #ededed;
  color: #6f6f6f;
  border: none;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;  
`;

export const BoxButton = styled.div`
  margin-top: 1.3rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Button = styled.button`
  border-radius: 12px;
  width: 22.8125rem;
  height: 3.1875rem;
  background: rgb(255, 106, 128);
  background: linear-gradient(
    41deg,
    rgba(255, 106, 128, 1) 0%,
    rgba(250, 171, 84, 1) 100%
  );
  color: #ffffff;

  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  border: none;
  cursor: pointer;
`;

export const Line = styled.div`
  margin-top: 2rem;
  width: 22.688rem;
  height: 1px;
  background: rgb(255, 106, 128);
  background: linear-gradient(
    41deg,
    rgba(255, 106, 128, 1) 0%,
    rgba(250, 171, 84, 1) 100%
  );
  opacity: 0.9;
`;
