import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Personal from "./screens/personal/personal";
import Plan from "./screens/plan/plan";
import AddOns from "./screens/add-ons/add-ons";
import FinishUp from "./screens/finish-up/finish-up";
import ThankYou from "./screens/last/last";

function App() {
  const [step, setStep] = useState(1);
  const [sub, setSub] = useState(false);
  const [confirm, setConfirm] = useState(false)
  
  return (
    <main className="main-container">
      <div className="app-container">
        <div className="sidebar">
          <Sidebar stepNum={step} />
        </div>
        <div className="info-panel">
          {step == 1 && <Personal subStat={sub} step={setStep} />}
          {step == 2 && <Plan subStat={sub} step={setStep} />}
          {step == 3 && <AddOns subStat={sub} step={setStep} />}
          {(step == 4 && confirm===false) && <FinishUp step={setStep}/>}
          {confirm===true && <ThankYou />}
          <span className="btn-container">
            <button
              className={(step != 1 && confirm===false) ? "go-back-btn" : "btn go-back-btn hidden"}
              onClick={() => step != 1 && setStep(step - 1)}
            >
              Go Back
            </button>
            {step != 4 && (
              <button className="btn next-btn" onClick={() => setSub(!sub)}>
                Next Step
              </button>
            )}
            {(step == 4 && confirm===false) && (
              <button className="btn confirm-btn" onClick={() => setConfirm(!confirm)}>
                Confirm
              </button>
            )}
          </span>
        </div>
      </div>
    </main>
  );
}

export default App;
