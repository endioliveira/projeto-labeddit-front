import {
  BoxButton,
  Form,
  Button,
  Input,
  Title,
  BoxParagraph,
} from "./SignupPageStyled";
import { Header } from "../../Components/Header";
import { useForm } from "../../hooks/useForm";

export const SignupPage = () => {
  const [form, onChangeForm] = useForm({
    nickname: "",
    email: "",
    password: "",
  });

  const signup = (event) => {
    event.preventDefault();
    console.log(form);

    const body = {
      nickname: form.nickname,
      email: form.email,
      password: form.password,
    };

    console.log(body);
  };

  return (
    <>
      <Header />
      <Title>
        Olá, boas vindas ao <br />
        LabEddit ;)
      </Title>

      <Form onSubmit={signup}>
        <Input
          placeholder="Apelido"
          pattern="[A-Za-z]{4,}"
          title="é preciso que o apelido tenha pelo menos 4 letras"
          id="nickname"
          name="nickname"
          defaultValue={form.nickname}
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
          defaultValue={form.email}
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
          <Button>Cadastrar</Button>
        </BoxButton>
      </Form>
    </>
  );
};
