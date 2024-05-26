import { useEffect } from "react";

import FormContainer from "../../components/form/FormContainer.jsx";
import Carousel from "../../components/form/Carousel.jsx";
import LoginForm from "../../components/form/LoginForm.jsx";

const LoginPage = () => {
  // Change the title of the website based on specific page
  useEffect(() => {
    document.title = "IU | Healthcare | Login";
  }, []);

  return (
    <>
      <FormContainer>
        <Carousel />
        <LoginForm />
      </FormContainer>
    </>
  );
};
export default LoginPage;
