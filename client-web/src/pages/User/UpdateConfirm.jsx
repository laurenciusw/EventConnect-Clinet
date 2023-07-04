import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyAccount } from "../../store/actions/userAction";


export default function UpdateConfirm() {
  const dispatch = useDispatch();
  const [passInvalid, setPassInvalid] = useState(false);
  const [passInput, setPassInput] = useState({
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    console.log(passInput.password, "<<< pass input");
  }, [passInput]);
  
  const response = useSelector((state) => {
    return state.user.checkPass;
  });

  async function submitHandler(e) {
    try {
      e.preventDefault();

    dispatch(verifyAccount(passInput));
    
    console.log(response, '<<< response')

    if(response == 'OK') {
      console.log('kan salah')
      navigate('/user/account/edit');
    } else {
      setPassInvalid(true)
    }
      
    } catch (err) {
      console.log(err)
    }
    
    
  }

  

  return (
    <>
      <div className="update-container">
        <p className="acc-title">Please input your password</p>
        <input
          type="password"
          id="pwd"
          name="pwd"
          className="pass-input"
          value={passInput.password}
          onChange={(e) => {
            setPassInput({
              password: e.target.value,
            });
          }}
        />
        <button onClick={submitHandler} className="confirm-button">Continue</button>
        {passInvalid && (
          <p className="text-center text-red-600">Password invalid!</p>
        )}
      </div>
    </>
  );
}
