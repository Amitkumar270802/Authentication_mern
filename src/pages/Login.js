import React from "react";
import Template from "../components/core/auth/Template";

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center">
          <Template
            title="Welcome Back"
            desc1="Build skills for today, tomorrow, and beyond."
            desc2="Education to future-proof your career."
            formType="login"
          />
      </div>
    </>
  );
};
export default Login;
