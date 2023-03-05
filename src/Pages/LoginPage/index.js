import React from "react";
import { useNavigate } from "react-router-dom";
import logoLabeddit from "../../assets/logo-labeddit.svg";
import { goToFeed, goToSignup } from "../../Router/coordinator";
import {
  Logo,
  FormContainer,
  Input,
  BoxButton,
  Button,
  ButtonSignup,
  Line,
} from "./LoginPageStyled";

export const LoginPage = () => {
  
  const navigate = useNavigate();

  return (
    <>
      <Logo>
        <img src={logoLabeddit} alt="" />
        <p>O projeto de rede social da Labenu</p>
      </Logo>

      <FormContainer>
        <Input name="email" placeholder="E-mail" type="email" />
        <Input name="password" placeholder="Senha" type="password" />
        <BoxButton>
          <Button onClick={() => goToFeed(navigate)}>Continuar</Button>
          <Line></Line>
          <ButtonSignup onClick={() => goToSignup(navigate)}> Crie uma conta!</ButtonSignup>
        </BoxButton>
      </FormContainer>
    </>
  );
};
