import React from "react";
import logoLabeddit from "../../assets/logo-labeddit.svg";
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
          <Button type="submit">Continuar</Button>
          <Line></Line>
          <ButtonSignup>Crie uma conta!</ButtonSignup>
        </BoxButton>
      </FormContainer>
    </>
  );
};
