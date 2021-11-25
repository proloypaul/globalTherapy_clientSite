import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/banner">Banner</Link>
                <Link to="/doctorDashboard">Doctor</Link>
            </nav>
        </div>
    );
};

export default Header;