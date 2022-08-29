import logo from '../images/airbnb-logo.png';

function Header() {
    return (
        <nav className="Header">
            <img className='header--logo' src={logo} alt="" />
        </nav>
    )
}

export default Header;