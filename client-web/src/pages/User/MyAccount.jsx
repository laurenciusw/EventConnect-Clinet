import React from "react";
import { Link } from "react-router-dom";

export default function MyAccount() {
  return (
    <>
    <div className="mt-8 mb-20">
     <h3 className="acc-title">Your Account</h3>
     <p className="text-center">Information about your account</p>
     <div className="info-container">
      <p>Username</p>
      <p>ayamgoreng</p>
      <br />
      <hr className="hr-account" />
      <br />
      <p>Email</p>
      <p>ayamgoreng@gmail.com</p>
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