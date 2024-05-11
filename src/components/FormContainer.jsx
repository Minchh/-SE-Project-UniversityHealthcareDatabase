import PropTypes from "prop-types";

const FormContainer = (props) => {
  return (
    <div className="w-full h-screen bg-[#BCBCFC] flex justify-center items-center">
      <div className="min-w-[calc(100%-20%)] min-h-[calc(100%-20%)] bg-white rounded-3xl shadow-xl flex">
        {props.children}
      </div>
    </div>
  );
};

FormContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}

export default FormContainer;
