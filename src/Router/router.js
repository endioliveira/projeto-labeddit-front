import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, SignupPage, FeedPage } from "../Pages";

const Private = ({ Item }) => {
  const signed = false;
  return signed > 0 ? <Item/> : <LoginPage/>
}

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route exact path="/feed" element={<Private Item={<FeedPage/>} />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
