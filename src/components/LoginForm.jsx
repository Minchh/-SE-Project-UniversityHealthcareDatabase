import { SlArrowLeft, SlEye } from "react-icons/sl";

const LoginForm = () => {
  return (
    <div className="w-1/2 h-full">
      <div className="mt-8 text-[#3C58A0]">
        <a href="#">
          <SlArrowLeft className="inline-block mr-2" />
          <span>Back to website</span>
        </a>
      </div>

      <span className="block mt-8 text-4xl font-bold text-[#2E3191]">Welcome Back!</span>

      <div className="mt-4 text-xl">
        <a href="#" className="underline font-semibold text-[#2E3191]">
          <span>Create an account</span>
        </a>
        <span> or login to get started...</span>
      </div>

      <form action="" className="text-[#3C58A0] mt-8">
        <label htmlFor="" className="block">
          Email or Username
        </label>
        <input type="text" className="block w-4/5 h-12 rounded-full px-4 border-[1px] border-[#3C58A0]" />

        <label htmlFor="" className="block mt-4">
          Password
        </label>
        <dir className="relative p-0 m-0 w-4/5">
          <input type="text" className="block w-full h-12 rounded-full px-4 border-[1px] border-[#3C58A0]" />
          <SlEye className="inline-block absolute right-4 top-1/3 text-xl cursor-pointer"/>
        </dir>

        <div className="flow-root w-4/5 mt-1 text-sm font-bold underline">
          <a href="#" className="block float-right">
            <span>Forgot password?</span>
          </a>
        </div>

        <button className="mt-4 w-4/5 h-12 rounded-full text-[18px] font-bold text-white bg-[#3C58A0]">Submit</button>
      </form>

      <div className="w-4/5 relative flex py-5 items-center">
        <div className="flex-grow border-t border-[#3C58A0]"></div>
        <div className="flex-shrink mx-4 text-[#3C58A0]">OR</div>
        <div className="flex-grow border-t border-[#3C58A0]"></div>
      </div>
    </div>
  );
};

export default LoginForm;
