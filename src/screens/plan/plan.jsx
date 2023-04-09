import "./plan.css";
import PlanBox from "../../components/planBox/planBox";
import ArcadeIcon from "../../icons/icon-arcade.svg";
import AdvancedIcon from "../../icons/icon-advanced.svg";
import ProIcon from "../../icons/icon-pro.svg";
import { useState, useEffect } from "react";
import { savePlanInfo, saveAddOnsInfo } from "../../features/userInfoSlice";
import { useDispatch, useSelector } from "react-redux";

const Plan = ({ subStat, step }) => {
  const [firstRender, setFirstRender] = useState(true);
  const { user_info } = useSelector((state) => state)
  const [active, setActive] = useState(user_info.plan.name);
  const dispatch = useDispatch();
  const [planPricingMonthly, setPlanPricingMonthly] = useState(user_info.pricingMonthly);
  const arcadeData = {
    name: "Arcade",
    price: planPricingMonthly === true ? 9 : 90,
  };
  const advancesData = {
    name: "Advances",
    price: planPricingMonthly === true ? 12 : 120,
  };
  const proData = {
    name: "Pro",
    price: planPricingMonthly === true ? 15 : 150,
  };

  const addOnsPrice = {
    onlineServicePrice: planPricingMonthly === true ? 1 : 10,
    storagePrice: planPricingMonthly === true ? 2 : 20,
    profilePrice: planPricingMonthly === true ? 2 : 20,
  };
  

  const clickFunc = (props) => {
    setActive(props.name);
  };

  useEffect(() => {
    if (firstRender != true) {
      const data = [arcadeData, advancesData, proData]
      dispatch(savePlanInfo({plan: data.find(data => data.name==active), pricingMonthly: planPricingMonthly, addonsPrice: addOnsPrice }));
      step(3);
    }
    if (firstRender === true) setFirstRender(false);
  }, [subStat]);

  return (
    <div className="container">
      <h1>Select your plan</h1>
      <h2>You have the option of monthly or yearly billing.</h2>
      <div className="plans-container">
        <PlanBox
          data={arcadeData}
          iconName={ArcadeIcon}
          planPricingMonthly={planPricingMonthly}
          active={active}
          onClick={clickFunc.bind(this, arcadeData)}
        />
        <PlanBox
          data={advancesData}
          planPricingMonthly={planPricingMonthly}
          active={active}
          iconName={AdvancedIcon}
          onClick={clickFunc.bind(this, advancesData)}
        />
        <PlanBox
          data={proData}
          price={"$15/mo"}
          planPricingMonthly={planPricingMonthly}
          active={active}
          iconName={ProIcon}
          onClick={clickFunc.bind(this, proData)}
        />
      </div>
      <div className="toogle-container">
        <span className={planPricingMonthly === true ? "active" : ""}>Monthly</span>
        <div className="toogle" onClick={() => setPlanPricingMonthly(!planPricingMonthly)}>
          <span
            className={planPricingMonthly === true ? "toogle-dot" : "toogle-dot right"}
          ></span>
        </div>
        <span className={planPricingMonthly === false ? "active" : ""}>Yearly</span>
      </div>
    </div>
  );
};

export default Plan;
