import "./add-ons.css";
import { saveAddOnsInfo } from "../../features/userInfoSlice";
import { useDispatch, useSelector } from "react-redux";
import AddOn from "../../components/addon/addon";
import { useEffect, useState } from "react";

const AddOns = ({ subStat, step }) => {
    const [firstRender, setFirstRender] = useState(true);
  const { user_info } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [active, setActive] = useState({
    onlineState: {state: user_info.add_ons.onlineState.state},
    storageState: {state: user_info.add_ons.storageState.state},
    profileState: {state: user_info.add_ons.profileState.state},
  })

  const clickFunc = (props) => {
    setActive(current => {
        return{
            ...current,
            [props.name]: {state: !active[props.name].state}
        }
    });
  };

  useEffect(() => {
    if (firstRender != true) {
      dispatch(saveAddOnsInfo(active));
      step(4);
    }
    if (firstRender === true) setFirstRender(false);
  }, [subStat]);


  const onlineServiceData = {
    name: "Online service",
    description: "Access to multiplayer games",
    price: user_info.add_ons.onlineState.price,
  };
  const storageData = {
    name: "Large storage",
    description: "Extra 1TB of could save",
    price: user_info.add_ons.storageState.price,
  };
  const profileData = {
    name: "Customizable profile",
    description: "Custom theme on your profile",
    price: user_info.add_ons.profileState.price,
  };

  return (
    <div className="container">
      <h1>Pick add-onss</h1>
      <h2>Add-ons help enhance your gaming experience.</h2>
      <div className="addons-container">
        <AddOn data={onlineServiceData} planPricingMonthly={user_info.pricingMonthly} active={active.onlineState.state} onClick={clickFunc.bind(this, {name: "onlineState"})}/>
        <AddOn data={storageData} planPricingMonthly={user_info.pricingMonthly} active={active.storageState.state} onClick={clickFunc.bind(this, {name: "storageState"})}/>
        <AddOn data={profileData} planPricingMonthly={user_info.pricingMonthly} active={active.profileState.state} onClick={clickFunc.bind(this, {name: "profileState"})}/>
      </div>
    </div>
  );
};

export default AddOns;
