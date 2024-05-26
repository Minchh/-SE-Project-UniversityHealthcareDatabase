import { useEffect } from "react";

import FormContainer from "../../components/form/FormContainer.jsx";
import Carousel from "../../components/form/Carousel.jsx";
import RegisterForm from "../../components/form/RegisterForm.jsx";

const RegisterPage = () => {
  // Change the title of the website based on specific page
  useEffect(() => {
    document.title = "IU | Healthcare | Register";
  }, []);

  return (
    <>
      <FormContainer>
        <Carousel />
        <RegisterForm />
      </FormContainer>
    </>
  );
};
export default RegisterPage;
