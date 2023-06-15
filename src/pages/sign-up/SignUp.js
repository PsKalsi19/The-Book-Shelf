import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
const SignUp = () => {
  const [signupState, setSignupState] = useState({
    firstName:"",
    lastName:"",
    email: "",
    password: "",
    confirmPassword: "",

  });
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const { handleSignUpFn } = useContext(AuthContext);

  useEffect(()=>{
    document.title="Sign Up | The Book Shelf"
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword,firstName,lastName } = signupState;
    if (password !== confirmPassword) {
      toast.error("Password and Confirm password do not match");
      return;
    }
    handleSignUpFn({ email, password,firstName,lastName });
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
              Create an Account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div className="sm:flex sm:space-x-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-gray-100"
                  >
                    First Name
                  </label>
                  <input
                    onChange={changeHandlerFn}
                    value={signupState.firstName}
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100 focus:ring-cyan-800 focus:border-cyan-800"
                    placeholder="Jon"
                    required={true}
                  />
                </div>
                <div className="mt-2 sm:mt-0">
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-gray-100"
                  >
                    Last Name
                  </label>
                  <input
                    onChange={changeHandlerFn}
                    value={signupState.lastName}
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100 focus:ring-cyan-800 focus:border-cyan-800"
                    placeholder="watts"
                    required={true}
                  />
                </div>
              </div>
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
              <div className="relative">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-100"
                >
                  Password
                </label>
                {showPassword.password ? (
                  <EyeIcon
                    onClick={() => setShowPassword({...showPassword,password:false})}
                    className="absolute w-6 h-6 text-gray-500 cursor-pointer right-2 bottom-2"
                  />
                ) : (
                  <EyeSlashIcon
                  onClick={() => setShowPassword({...showPassword,password:true})}
                  className="absolute w-6 h-6 text-gray-500 cursor-pointer right-2 bottom-2"
                  />
                )}
                <input
                  type={showPassword.password ? "text" : "password"}
                  onChange={changeHandlerFn}
                  value={signupState.password}
                  name="password"
                  minLength="6"
                  id="password"
                  placeholder="••••••••"
                  className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100 focus:ring-cyan-800 focus:border-cyan-800"
                  required={true}
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-100"
                >
                  Confirm password
                </label>
                {showPassword.confirmPassword ? (
                  <EyeIcon
                    onClick={() => setShowPassword({...showPassword,confirmPassword:false})}
                    className="absolute w-6 h-6 text-gray-500 cursor-pointer right-2 bottom-2"
                  />
                ) : (
                  <EyeSlashIcon
                  onClick={() => setShowPassword({...showPassword,confirmPassword:true})}
                  className="absolute w-6 h-6 text-gray-500 cursor-pointer right-2 bottom-2"
                  />
                )}
                <input
                  onChange={changeHandlerFn}
                  value={signupState.confirmPassword}
                  type={showPassword.confirmPassword ? "text" : "password"}
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
