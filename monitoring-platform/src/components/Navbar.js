import React from 'react';
import '../styles.css';  // Adjust the path based on your project structure

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">Dashboard</a>
                </li>
                <li>
                    <a href="/data-collection">Data Collection</a>
                </li>
                <li>
                    <a href="/data-processing">Data Processing</a>
                </li>
                <li>
                    <a href="/alerting">Alerting</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;


