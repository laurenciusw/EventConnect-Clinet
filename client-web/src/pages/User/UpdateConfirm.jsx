import React from "react";

export default function UpdateConfirm() {
  return (
    <>
    <div className="update-container">
     <p className="acc-title">Please input your password</p>
     <input type="password" id="pwd" name="pwd" className="pass-input" />
     <button className="confirm-button">Continue</button>
     </div>
    </>
  );
}