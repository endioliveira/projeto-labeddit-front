import { useLocation, useNavigate } from "react-router-dom";
import icone from "../../assets/icone-labeddit.svg";
import { HeaderContainer } from "./HeaderStyled";
import { goToLogin } from "../../Router/coordinator";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const renderingTheHeader = () => {
    if (location.pathname === "/signup") {
      return (
        <>
          <img src={icone} alt="Logo do Labeddit" />
          <button onClick={() => goToLogin(navigate)}>Entrar</button>
        </>
      );
    } else if (location.pathname === "/feed") {
      return (
        <>
          <img src={icone} alt="Logo do Labeddit" />
          <button onClick={() => goToLogin(navigate)}>Logout</button>
        </>
      );
    }
  };

  return <HeaderContainer>{renderingTheHeader()}</HeaderContainer>;
};
