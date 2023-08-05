import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/operation/auth";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="flex h-14 items-center justify-center border-b-[1px]  border-b-richblack-600">
      <div className="flex w-8/12 max-w-maxContent items-center justify-between">
        <div className="flex gap-x-4 items-center">
          {token === null && (
            <Link to="/login">
              <button className="bg-richblack-700 text-richblack-100 rounded-md px-[12px] py-[8px] hover:bg-richblack-200 hover:text-black cursor-pointer hover:scale-90">
                LogIn
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="bg-richblack-700 text-richblack-100 rounded-md px-[12px] py-[8px] hover:bg-richblack-200 hover:text-black cursor-pointer hover:scale-90">
                SignUp
              </button>
            </Link>
          )}
          {token !== null && (
            <div
              className="bg-richblack-700 text-richblack-100 rounded-md px-[12px] py-[8px] hover:bg-richblack-200 hover:text-black cursor-pointer hover:scale-90"
              onClick={() => {
                dispatch(logout(navigate));
              }}
            >
              Logout
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
