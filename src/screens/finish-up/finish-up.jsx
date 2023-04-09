import "./finish-up.css";
import {  useSelector } from "react-redux";

const FinishUp = ({step}) => {
  const { user_info } = useSelector((state) => state);

  return (
    <div className="container">
      <h1>Finishing up</h1>
      <h2>Double-check everything looks Ok before confirming.</h2>
      <div className="check-container">
        <div className="blue-bg-container">
          <div className="pricing-container">
            <div className="pricing-name-container">
              <div className="pricing-text">
                {user_info.plan.name}
                {user_info.pricingMonthly === true ? " (Monthly)" : " (Yearly)"}
              </div>
              <span className="change" onClick={() => step(2)}>Change</span>
            </div>
            <span className="pricing-text">${user_info.plan.price}/{user_info.pricingMonthly === true ? "mo" : "yr"}</span>
          </div>
          <span className="line"></span>
          {user_info.add_ons.onlineState.state === true && (
            <div className="add-on-container">
              <span>Online service</span>
              <span>+${user_info.add_ons.onlineState.price}/{user_info.pricingMonthly === true ? "mo" : "yr"}</span>
            </div>
          )}
          {user_info.add_ons.storageState.state === true && (
            <div className="add-on-container">
              <span>Large storage</span>
              <span>+${user_info.add_ons.storageState.price}/{user_info.pricingMonthly === true ? "mo" : "yr"}</span>
            </div>
          )}
          {user_info.add_ons.profileState.state === true && (
            <div className="add-on-container">
              <span>Customizable profile</span>
              <span>+${user_info.add_ons.profileState.price}/{user_info.pricingMonthly === true ? "mo" : "yr"}</span>
            </div>
          )}
        </div>
        <div className="sum-bg-container">
          <div className="add-on-container">
            <span>
              Total{" "}
              {user_info.pricingMonthly === true ? " (per month)" : " (per year)"}
            </span>
            <span>{`+$${user_info.total}/${user_info.pricingMonthly === true ? "mo" : "yr"}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishUp;
