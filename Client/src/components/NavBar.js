import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'



const NavBar = () => {
    return (
        <div>
            <header>
                <Link style={{ 'text-decoration': 'none' }} to="/"><h1>The Little Fruit Shop</h1></Link>
                <nav>
                    <ul>
                        <li><Link style={{ 'text-decoration': 'none', 'color': 'black' }} to="/login">Log-in</Link></li>
                        <li><Link style={{ 'text-decoration': 'none', 'color': 'black' }} to="/users">Sign-up</Link></li>
                        <li><Link style={{ 'text-decoration': 'none', 'color': 'black' }} to='/products'>Products</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
export default NavBar;
