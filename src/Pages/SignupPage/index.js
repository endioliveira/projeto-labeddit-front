import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useForm } from "../../hooks/useForm";
import { goToFeed } from "../../Router/coordinator";
import { Header } from "../../Components/Header";
import {
  Container,
  BoxButton,
  Form,
  Button,
  Input,
  Title,
  BoxParagraph,
} from "./SignupPageStyled";

export const SignupPage = () => {

  const navigate = useNavigate();

  const [form, onChangeForm] = useForm({
    nickname: "",
    email: "",
    password: "",
  });

  const signup = async (event) => {
    event.preventDefault();
    console.log(form);

    const body = {
      nickname: form.nickname,
      email: form.email,
      password: form.password,
    };

    await api
      .signupApi(body)
      .then((response) => {
        window.localStorage.setItem("labeddit-token", response.data.token);
        goToFeed(navigate);
      })
      .catch((error) => {
        console.error(error?.response?.data);
        window.alert(error?.response?.data);
      });
  };

  return (
    <>
      <Header />
      <Container>
        <Title>
          Olá, boas vindas ao <br />
          LabEddit ;)
        </Title>
        <Form onSubmit={signup}>
          <Input
            placeholder="Apelido"
            id="nickname"
            name="nickname"
            value={form.nickname}
            onChange={onChangeForm}
            required
          />
          <Input
            placeholder="E-mail"
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="envie o email no formato email@email.com"
            id="email"
            name="email"
            value={form.email}
            onChange={onChangeForm}
            required
          />
          <Input
            placeholder="Senha"
            type="password"
            pattern="^[a-zA-Z0-9]{6,}$"
            title="essa senha precisa ter no mínimo 6 caracteres"
            id="password"
            name="password"
            defaultValue={form.password}
            onChange={onChangeForm}
            required
          />
          <BoxParagraph>
            <p>
              Ao continuar, você concorda com o nosso{" "}
              <span>
                Contrato de <br /> usuário
              </span>{" "}
              e nossa <span>Política de Privacidade</span>
            </p>
            <div className="checkbox">
              <input type="checkbox" />
              <label>
                Eu concordo em receber emails sobre coisas legais <br /> no
                Labeddit
              </label>
            </div>
          </BoxParagraph>
          <BoxButton>
            <Button type="submit">Cadastrar</Button>
          </BoxButton>
        </Form>
      </Container>
    </>
  );
};
