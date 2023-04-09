import { useEffect, useRef, useState } from "react";
import "./personal.css";
import { saveUserInfo } from "../../features/userInfoSlice";
import { useDispatch, useSelector } from "react-redux";

const Personal = ({ subStat, step }) => {
  const [firstRender, setFirstRender] = useState(true);
  const [error, setError] = useState({
    validName: true,
    emailFormValid: true,
    emailLengthValid: true,
    numValid: true,
  });
  const { user_info } = useSelector((state) => state)
  const [name, setName] = useState(!user_info ? "" : user_info.name) 
  const [email, setEmail] =useState(!user_info ? "" : user_info.email)
  const [num, setNum] = useState(!user_info ? "" : user_info.number)
  const dispatch = useDispatch()
  
   
  useEffect(() => {
    if (firstRender != true) {
      const isValidName = name.length > 0;
      const isValidEmail = email.includes("@");
      const isValidEmilLength = email.length > 0;
      const isValidNum = num.length > 0;

      setError({
        validName: isValidName,
        emailFormValid: isValidEmail,
        emailLengthValid: isValidEmilLength,
        numValid: isValidNum,
      });
      if (!isValidName || !isValidEmail || !isValidEmilLength || !isValidNum) {
        return;
      }
      dispatch(saveUserInfo({name:name, email: email, number: num} ))
      step(2)
    }
    if(firstRender===true)setFirstRender(false)
    
  }, [subStat]);

  return (
    <div className="container">
      <h1>Personal Info</h1>
      <h2>Please provide your name, email address, and phone number.</h2>
      <div className="input-container">
        <div className="label-container">
          <label htmlFor="name">Name</label>
          {error.validName != true && (
            <label htmlFor="name" className="error">
              This field is required!
            </label>
          )}
        </div>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Stephen King"
          className={error.validName != true ? "error-border" : ""}
          value={name}
        />
      </div>
      <div className="input-container">
        <div className="label-container">
          <label htmlFor="email">Email Address</label>
          {error.emailFormValid != true && error.emailLengthValid != false && (
            <label htmlFor="email" className="error">
              Email format is not correct
            </label>
          )}
          {error.emailLengthValid != true && (
            <label htmlFor="email" className="error">
              This field is required!
            </label>
          )}
        </div>

        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e.g. stephenkind@lorem.com"
          className={(error.emailFormValid != true || error.emailLengthValid != true) ? "error-border" : ""}
          value={email}
        />
      </div>
      <div className="input-container">
        <div className="label-container">
          <label htmlFor="num">Phone Number</label>
          {error.numValid != true && (
            <label htmlFor="num" className="error">
              This field is required!
            </label>
          )}
        </div>
        <input
          type="text"
          id="num"
          onChange={(e) => setNum(e.target.value)}
          placeholder="e.g. +1 234 567 890"
          className={error.numValid != true ? "error-border" : ""}
          maxLength="16"
          value={num}
        />
      </div>
    </div>
  );
};

export default Personal;
