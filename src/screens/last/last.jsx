import "./last.css";
import ThankYouIcon from '../../assets/icon-thank-you.svg';

const ThankYou = () => {
  return (
    <div className="thank-you-container">
        <img src={ThankYouIcon} alt="thank-you-icon" />
      <h1>Thank you!</h1>
      <h2>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please fell free to email us at
        support@loremgaming.com.
      </h2>
    </div>
  );
};

export default ThankYou;
