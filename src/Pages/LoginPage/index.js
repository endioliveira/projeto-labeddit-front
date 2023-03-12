import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
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
import api from "../../services/api";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [form, changeForm] = useForm({
    email: "",
    password: "",
  });

  const login = async (e) => {
    e.preventDefault();

    const body = {
      email: form.email,
      password: form.password,
    };

    await api
      .login(body)
      .then((response) => {
        window.localStorage.setItem("labeddit-token", response.data.token);
        goToFeed(navigate)
      })
      .catch((error) => {
        console.error(error?.response?.data);
        window.alert(error?.response?.data)
      });

  };

  return (
    <>
      <Logo>
        <img src={logoLabeddit} alt="" />
        <p>O projeto de rede social da Labenu</p>
      </Logo>

      <FormContainer onSubmit={login}>
        <Input
          placeholder="E-mail"
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={changeForm}
        />
        <Input
          placeholder="Senha"
          type="password"
          id="senha"
          name="password"
          value={form.password}
          onChange={changeForm}
        />
        <BoxButton>
          <Button type="submit">Continuar</Button>
          <Line></Line>
          <ButtonSignup onClick={() => goToSignup(navigate)}>
            {" "}
            Crie uma conta!
          </ButtonSignup>
        </BoxButton>
      </FormContainer>
    </>
  );
};
