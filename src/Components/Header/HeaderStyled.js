import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #ededed;
  height: 3.125rem;

  position: relative;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;


  #logo {
    position: absolute;
    width: 28.02px;
    height: 28.64px;
    left: 199.99px;
  }

  #buttonLougout {
    border: none;
    position: absolute;
    left: 344px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #4088cb;
    cursor: pointer;
  }
   
  button {
    border: none;
    left: 344px;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #4088cb;
    cursor: pointer;
  }

  .iconX {
    margin-top: 0.2rem;
  }
`;
