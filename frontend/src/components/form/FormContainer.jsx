import PropTypes from "prop-types";

import "../../styles/form/FormContainer.css";

const FormContainer = ({ children }) => {
  return (
    <div className="form">
      <div className="form-container">{children}</div>
    </div>
  );
};
export default FormContainer;

FormContainer.propTypes = {
  children: PropTypes.node,
};
