import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { goToFeed, goToSignup } from "../../Router/coordinator";
import api from "../../services/api";
import logoLabeddit from "../../assets/logo-labeddit.svg";
import {
  Container,
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

  const [showPassword, setShowPassword] = useState(false);

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
        window.location.href = "/feed"
        // goToFeed(navigate);
      })
      .catch((error) => {
        console.error(error?.response?.data);
        window.alert(error?.response?.data);
      });
  };

  return (
    <Container>
      <Logo>
        <img src={logoLabeddit} alt="Logo do LabEddit" />
        <p>O projeto de rede social da Labenu</p>
      </Logo>

      <FormContainer onSubmit={login} autoComplete="off">
        <Input
          placeholder="E-mail"
          type="email"
          name={"email"}
          value={form.email}
          onChange={changeForm}
        />
        <Input
          placeholder="Senha"
          type={showPassword ? "text" : "password"}
          name={"password"}
          value={form.password}
          onChange={changeForm}
        />

        <span>
          <input
            type="checkbox"
            value={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          Mostrar Senha
        </span>
        <BoxButton>
          <Button type="submit">Continuar</Button>
          <Line></Line>
          <ButtonSignup onClick={() => goToSignup(navigate)}>
            {" "}
            Crie uma conta!
          </ButtonSignup>
        </BoxButton>
      </FormContainer>
    </Container>
  );
};
