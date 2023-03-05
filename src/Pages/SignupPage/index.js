import { BoxButton, Form, Button, Input, Title, BoxParagraph } from "./SignupPageStyled";
import { Header } from "../../Components/Header"

export const SignupPage = () => {
  return (
    <>
      <Header/>
      <Title>
        Olá, boas vindas ao <br />
        LabEddit ;)
      </Title>

        <Form>
            <Input placeholder="Apelido"/>
            <Input placeholder="E-mail" />
            <Input placeholder="Senha" />

            <BoxParagraph>
                <p>Ao continuar, você concorda com o nosso <span>Contrato de <br/> usuário</span> e nossa <span>Política de Privacidade</span></p>

                <div className="checkbox">
                    <input type="checkbox"/>
                    <label>Eu concordo em receber emails sobre coisas legais <br/> no Labeddit</label>
                </div>
            </BoxParagraph>

            <BoxButton>
              <Button>Cadastrar</Button>
            </BoxButton>
        </Form>
    </>
  );
};
