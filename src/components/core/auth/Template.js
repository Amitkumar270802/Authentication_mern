import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

import frameImg from "../../../assets/Images/frame.png";

const Template = ({ title, desc1, desc2, formType, image }) => {
  return (
    <div className="flex w-8/12 py-12 mx-auto gap-x-12 gap-y-0">
      <div>
        <h1 className="text-white w-9/12 font-semibold text-[1.875rem] leading-[2.375rem]">
          {title}
        </h1>
        <p className="text-[1.125rem] leading-[1.625rem] gap-7">
          <span className="text-richblack-300 ">{desc1}</span>
          <br></br>
          <span className="text-blue-400 italic mt-2">{desc2}</span>
        </p>
        {formType === "signup" ? <SignupForm /> : <LoginForm />}
      </div>
      <div className="relative mx-auto w-11/12 max-w-[390px] md:mx-0 hidden lg:block">
        <img
          src={frameImg}
          alt="Pattern"
          // width={550}
          // height={500}
          loading="lazy"
        />
        <img
          src={image}
          alt="Students"
          // width={558}
          // height={504}
          loading="lazy"
          className="absolute -top-4 right-4 z-10 "
        />
      </div>
    </div>
  );
};

export default Template;
