import React from "react";

export default function NavBar(){
    return(
        <nav>
            <h1 className="nav-heading">Gari-Mzuri</h1>
            <div className="nav--links">
                <ul>
                    <li>Home</li>
                    <li>New Arrivals</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}