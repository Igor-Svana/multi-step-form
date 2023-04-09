import './planBox.css';


const PlanBox = ({data, iconName, planPricingMonthly, active, onClick}) => {

    return(
        <div className={(active===data.name ? 'planbox-container active' : 'planbox-container')} onClick={onClick}>
            <img src={iconName} alt="icon" className='icon'/>
            <div className='plan-text-container'>
                <span className='plan-name'>{data.name}</span>
                <span className='plan-price'>${data.price}/{planPricingMonthly===true ? "mo":"yr"}</span>
                <span className={(planPricingMonthly==true ? 'free-plan' : 'free-plan show')}>2 months free</span>
            </div>
            
           
        </div>
    )
}

export default PlanBox;