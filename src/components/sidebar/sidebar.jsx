import './sidebar.css'

const Sidebar = ({stepNum}) =>{
    return(
        <div className='sidebar-container'>
            <div className='step-container'>
                <span className={(stepNum==1 ? 'num-container active' : 'num-container')}>1</span>
                <div className='text-container'>
                    <span className='step-span'>Step 1</span>
                    <h3>Your Info</h3>
                </div>
            </div>
            <div className='step-container'>
                <span className={(stepNum==2 ? 'num-container active' : 'num-container')}>2</span>
                <div className='text-container'>
                    <span className='step-span'>Step 2</span>
                    <h3>Select Plan</h3>
                </div>
            </div>
            <div className='step-container'>
                <span className={(stepNum==3 ? 'num-container active' : 'num-container')}>3</span>
                <div className='text-container'>
                    <span className='step-span'>Step 3</span>
                    <h3>Add-ons</h3>
                </div>
            </div>
            <div className='step-container'>
                <span className={(stepNum==4 ? 'num-container active' : 'num-container')}>4</span>
                <div className='text-container'>
                    <span className='step-span'>Step 4</span>
                    <h3>Summary</h3>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;