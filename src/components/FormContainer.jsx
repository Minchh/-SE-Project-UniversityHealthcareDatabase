const FormContainer = (props) => {
  return (
    <div className="w-full h-screen bg-[#BCBCFC] flex justify-center items-center">
      <div className="w-[calc(100%-20%)] h-[calc(100%-10%)] bg-white rounded-3xl shadow-xl flex">
        {props.children}
      </div>
    </div>
  );
};

export default FormContainer;
