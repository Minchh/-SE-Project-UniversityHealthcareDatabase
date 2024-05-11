import { useState } from "react";
import { AiOutlineLeft, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginForm = () => {
  const [open, setOpen] = useState(false);

  // handle toggle password
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="w-1/2 h-full">
      <div className="mt-20 text-[#3C58A0]">
        <a href="#">
          <AiOutlineLeft className="inline-block mr-2" />
          <span>Back to website</span>
        </a>
      </div>

      <span className="block mt-12 text-4xl font-bold text-[#2E3191]">Welcome Back!</span>

      <div className="mt-4 text-xl">
        <a href="#" className="underline font-semibold text-[#2E3191]">
          <span>Create an account</span>
        </a>
        <span> or login to get started...</span>
      </div>

      {/* Login form */}
      <form action="" className="text-[#3C58A0] mt-12">
        {/* Email input */}
        <label htmlFor="" className="block">
          Email
        </label>
        <input type="email" className="block w-4/5 h-12 rounded-full px-4 border-[1px] border-[#3C58A0]" />

        {/* Password input */}
        <label htmlFor="" className="block mt-8">
          Password
        </label>
        <div className="relative p-0 m-0 w-4/5">
          <input
            type={(open === false) ? "password" : "text"}
            className={`h-12 w-full rounded-full pl-4 pr-12 border-[1px] border-[#3C58A0] ${(open == false) ? "font-bold tracking-widest" : ""}`}
          />

          <div className="text-2xl absolute top-3 right-5 cursor-pointer">
            {open === false ? <AiOutlineEyeInvisible onClick={toggle} /> : <AiOutlineEye onClick={toggle} /> }
          </div>
        </div>

        {/* Forgot password */}
        <div className="flow-root w-4/5 mt-4 pr-4 text-sm font-bold underline">
          <a href="#" className="block float-right">
            <span>Forgot password?</span>
          </a>
        </div>

        {/* Submit button */}
        <button className="mt-8 w-4/5 h-12 rounded-full text-[18px] font-bold text-white bg-[#3C58A0] hover:text-[#3C58A0] hover:bg-white hover:border-[1px] hover:border-[#3C58A0]">
          Submit
        </button>
      </form>

      {/* Divider horizontal line */}
      <div className="w-4/5 relative flex my-8 items-center">
        <div className="flex-grow border-t border-[#3C58A0]"></div>
        <div className="flex-shrink mx-4 text-[#3C58A0]">OR</div>
        <div className="flex-grow border-t border-[#3C58A0]"></div>
      </div>

      {/* Other login methods */}
      <div className="w-4/5 flex items-center justify-center gap-4">
        {/* Chrome Logo */}
        <div className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
        </div>

        {/* Facebook logo */}
        <div className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
            <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
            <path
              fill="#fff"
              d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
