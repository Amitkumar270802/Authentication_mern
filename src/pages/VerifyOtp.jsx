import React, { useEffect } from "react";
import OTPInput from "react-otp-input";
import { useSelector, useDispatch } from "react-redux";
import { sendOtp, signUp } from "../services/operation/auth";
import { Link, useNavigate } from "react-router-dom";
import {BiArrowBack} from 'react-icons/bi'
import {RxCountdownTimer} from 'react-icons/rx'

const VerifyOtp = () => {
  const [otp, setOtp] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signupData } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!signupData) {
      navigate("/signup");
    }
  },[]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const {
      email,
      accountType,
      confirmPassword,
      password,
      lastName,
      firstName,
    } = signupData;

    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    );
  };

  return  (
    <div>
      <div className="min-h-[calc(100vh-3.5rem)] grid place-items-center">
        <div className="max-w-[500px] p-4 lg:p-8">
          <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
            Verify Email
          </h1>
          <p className="text-[1.125rem] leading-[1.625rem] my-4 text-richblack-100">
            A verification code has been sent to you. Enter the code below
          </p>
          <form onSubmit={handleOnSubmit}>
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>-</span>}
              inputStyle="w-[20px] rounded-[8px] border-[1px] border-richblack-500 text-[3rem] text-center"
              focusStyle="border-[5px] border-red-500"
              isInputNum={true}
              shouldAutoFocus={true}
              containerStyle="flex justify-between gap-4"
              renderInput={(props) => <input {...props} />}
            />
             <button
              type="submit"
              className="w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900"
            >
              Verify Email
            </button>
          </form>
          <div className="mt-6 flex items-center justify-between">
            <Link to="/signup">
              <p className="text-richblack-5 flex items-center gap-x-2">
                <BiArrowBack /> Back To Signup
              </p>
            </Link>
            <button
              className="flex items-center text-blue-100 gap-x-2"
              onClick={() => dispatch(sendOtp(signupData.email))}
            >
              <RxCountdownTimer />
              Resend it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
