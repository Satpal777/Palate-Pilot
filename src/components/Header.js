
import logo from './../../assets/FOA-logo.jpg';


const Header = () => {

 
    return (
        <div className="header flex">
            <div className="brand flex flex-row flex-center gap-10">
                <img className="logo" src={logo} alt='logo' />
                <h3>Palate Pilot 🚀</h3>
            </div>
            <div className='search-box flex flex-row'>
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#657789" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                </div>
                <div className="input-container">
                    <input placeholder="Search for restaurants and food..." />
                </div>
            </div>
        </div>
    );
}

export default Header;