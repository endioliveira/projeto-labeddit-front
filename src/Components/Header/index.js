import { useLocation, useNavigate, useParams } from "react-router-dom";
import { goToFeed, goToLogin } from "../../Router/coordinator";
import { HeaderContainer } from "./HeaderStyled";
import icone from "../../assets/icone-labeddit.svg";
import iconClose from "../../assets/icon-x.png";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const logout = () => {
    window.localStorage.removeItem("labeddit-token");
    goToLogin(navigate);
  };

  const renderingTheHeader = () => {
    if (location.pathname === "/signup") {
      return (
        <>
          <img id="logo" src={icone} alt="Logo do Labeddit" />
          <button id="buttonLougout" onClick={() => goToLogin(navigate)}>
            Entrar
          </button>
        </>
      );
    } else if (location.pathname === "/feed") {
      return (
        <>
          <img id="logo" src={icone} alt="Logo do Labeddit" />
          <button id="buttonLougout" onClick={logout}>
            Logout
          </button>
        </>
      );
    } else if (location.pathname === `/feed/post/${params.id}`) {
      return (
        <>
          <button className="iconX" onClick={() => goToFeed(navigate)}>
            <img src={iconClose} alt="Botão para fechar a página" />
          </button>
          <img src={icone} alt="Logo do Labeddit" />
          <button onClick={logout}>Logout</button>
        </>
      );
    }
  };

  return <HeaderContainer>{renderingTheHeader()}</HeaderContainer>;
};
