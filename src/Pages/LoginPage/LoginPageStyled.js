import styled from "styled-components";

export const Container = styled.div`
padding: 2rem;
`

export const Logo = styled.div`
  /* margin-top: 2%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1rem;
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: light;
  }
`;

export const FormContainer = styled.form`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;

  span {
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;

    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
`;

export const Input = styled.input`
  width: 22.6875rem;
  height: 3.75rem;
  padding: 8px;
  border: 1px solid #d5d8de;
  border-radius: 3px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
`;

export const BoxButton = styled.div`
  margin-top: 1.5rem;
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

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  cursor: pointer;

`;

export const ButtonSignup = styled.button`
  border-radius: 20px;
  width: 22.8125rem;
  height: 3.1875rem;
  border: 0.5px solid #eb7502;
  color: #fe7e02;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  cursor: pointer;

`;

export const Line = styled.div`
  margin: 0.5rem 0 0.5rem 0;
  width: 100%;
  height: 1px;
  background: rgb(255, 106, 128);
  background: linear-gradient(
    41deg,
    rgba(255, 106, 128, 1) 0%,
    rgba(250, 171, 84, 1) 100%
  );
  opacity: 0.9;
`;
