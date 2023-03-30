import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="header-navigation cyan lighten-1">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo right ">React Cooking Book</Link>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><Link to="/contacts">Contacts</Link></li>                    
                    <li><Link to="/about">About</Link></li>                    
                </ul>
            </div>
         </nav>
    )
}

export {Header};