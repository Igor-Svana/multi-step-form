import "./addon.css";

const AddOn = ({ data, planPricingMonthly, active, onClick }) => {
  return (
    <div className={(active===true ? 'addon-container active' : 'addon-container')} onClick={onClick}>
      <div className="left-continer">
        <span className={(active===true ? "check-box active" : "check-box")}>
        <i className="fa-solid fa-check"></i>
        </span>
        <div className="text-container">
          <span className="plan-name">{data.name}</span>
          <span className="plan-description">{data.description}</span>
        </div>
      </div>
      <span className="plan-price">+${data.price}/{planPricingMonthly===true ? "mo" : "yr"}</span>
    </div>
  );
};

export default AddOn;
