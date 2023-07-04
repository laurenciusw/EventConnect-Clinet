import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../store/actions/userAction.js"

export default function MyAccount() {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.user.profile;
  });

  useEffect(() => {
    dispatch(fetchProfile());
    console.log(user)
  }, []);


  return (
    <>
    <div className="mt-8 mb-20">
     <h3 className="acc-title">Your Account</h3>
     <p className="text-center">Information about your account</p>
     <div className="info-container">
      <p>Username</p>
      <p>{user?.username}</p>
      <br />
      <hr className="hr-account" />
      <br />
      <p>Email</p>
      <p>{user?.email}</p>
      <br />
      <hr className="hr-account" />
      <br />
      <p>Password</p>
      <p>*******</p>
     </div>
     <Link to={"/user/account/confirm"}>
     <button className="update-button">Update Account</button>
      </Link>
     </div>
     
    </>
  );
}