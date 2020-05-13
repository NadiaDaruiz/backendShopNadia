import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'



const NavBar = () => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link style={{ textDecoration: 'none', color: 'blanchedalmond' }} to="/users/login">Log-in</Link></li>
                        <li><Link style={{ textDecoration: 'none', color: 'blanchedalmond' }} to="/users">Sign-up</Link></li>
                        <li><Link style={{ textDecoration: 'none', color: 'blanchedalmond' }} to='/products'>Products</Link></li>
                    </ul>
                </nav>
                <Link style={{ 'text-decoration': 'none' }} to="/"><h1>The Little Fruit Shop</h1></Link>
            </header>
        </div>
    );
}
export default NavBar;
