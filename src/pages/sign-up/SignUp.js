import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const [signupState, setSignupState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

const {handleSignUpFn}=useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    const {email,password,confirmPassword}=signupState
    if(password!==confirmPassword){
      toast.error('Password and Confirm password do not match')
      return
    }
    handleSignUpFn({email,password})
  };


  const changeHandlerFn = (e) => {
    setSignupState({ ...signupState, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto mt-32 sm:mt-0 md:h-screen lg:py-0">
        <div className="w-full bg-gray-800 border border-gray-700 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-100 md:text-2xl">
              Create and account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-100"
                >
                  Your email
                </label>
                <input
                  onChange={changeHandlerFn}
                  value={signupState.email}
                  type="email"
                  name="email"
                  id="email"
                  className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100 focus:ring-cyan-800 focus:border-cyan-800"
                  placeholder="abc@email.com"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-100"
                >
                  Password
                </label>
                <input
                  onChange={changeHandlerFn}
                  value={signupState.password}
                  type="password"
                  name="password"
                  minLength="6"
                  id="password"
                  placeholder="••••••••"
                  className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100 focus:ring-cyan-800 focus:border-cyan-800"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-100"
                >
                  Confirm password
                </label>
                <input
                  onChange={changeHandlerFn}
                  value={signupState.confirmPassword}
                  type="password"
                  name="confirmPassword"
                  minLength="6"
                  id="confirmPassword"
                  placeholder="••••••••"
                  className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100 focus:ring-cyan-800 focus:border-cyan-800"
                  required={true}
                />
              </div>

              <button
                type="submit"
                className="w-full px-5 py-2.5 text-xs lg:text-sm font-medium text-center text-gray-100 rounded-lg bg-cyan-900 focus:ring-4 focus:outline-none hover:bg-cyan-950 focus:ring-cyan-950"
              >
                Create Account
              </button>
              <p className="text-sm font-light text-gray-400">
                Already have an account?
                <Link
                  to="/login"
                  className="ml-1 font-medium text-gray-100 hover:underline"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
