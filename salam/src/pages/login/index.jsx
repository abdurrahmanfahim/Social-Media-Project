import React from "react";
import RegistrationForm from "../../components/authentication/RegistrationForm";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";
import LoginForm from "../../components/authentication/LoginForm";
import LeftAuth from "../../components/authentication/leftAuth";
import LoginIcon from "../../svg/LoginIcon";

const Login = () => {
  const backgroundDecorationClasses = {
    primary:
      "size-[300px] sm:size-[500px] lg:size-[600px] bg-linear-to-r from-purple-100 to-pink-100 rounded-full absolute -top-[100px] sm:-top-[150px] lg:-top-[200px] -left-[100px] sm:-left-[150px] lg:-left-[200px] opacity-60 animate-pulse",
    secondary:
      "size-[200px] sm:size-[300px] lg:size-[400px] bg-linear-to-r from-cyan-100 to-blue-100 rounded-full absolute -bottom-[50px] sm:-bottom-[75px] lg:-bottom-[100px] -right-[50px] sm:-right-[75px] lg:-right-[100px] opacity-40 animate-pulse delay-1000",
  };
  return (
    <>
      <ToastContainer />
      <Helmet>
        <title>Login - Salam</title>
      </Helmet>
      <main className="relative min-h-screen bg-linear-to-br from-purple-50 via-white to-cyan-50 overflow-hidden font-gilroy">
        <div
          className={backgroundDecorationClasses.primary}
          aria-hidden="true"
        />
        <div
          className={backgroundDecorationClasses.secondary}
          aria-hidden="true"
        />

        <div className="container mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <section
            className="hidden lg:block lg:w-[50%] max-w-lg"
            aria-label="Welcome message"
          >
            <LeftAuth
              title="Welcome Back"
              description="Sign in to your account and continue your journey with us. Access your personalized dashboard and stay connected with our powerful platform designed for your success."
              img={<LoginIcon />}
            />
          </section>

          <section
            aria-label="Registration form"
          >
            <div className="w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-6 sm:p-8 transition-all duration-300 hover:shadow-3xl hover:bg-white/95 mx-2 sm:mx-0">
              <header className="lg:hidden text-center mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                  Welcome
                </h1>
                <p className="text-gray-600 text-sm">
                  Login to your account
                </p>
              </header>
              <LoginForm toast={toast} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Login;
