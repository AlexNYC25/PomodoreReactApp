import React, {useState, useEffect} from 'react'

function Navbar(){


    return (
        <nav id="pom-nav" className="navbar navbar-expand-lg navbar-dark primary-color">
            <a className="navbar-brand" href="#" >Pomodore Timer</a>

            <ul className="navbar-nav ml-auto ">
                <li className="nav-item active">
                    <a className="nav-link" href="https://en.wikipedia.org/wiki/Pomodoro_Technique">
                        What is the Pomodore method
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="https://tomato-timer.com/">
                        Other Resources
                    </a>
                </li>
                

            </ul>

        </nav>
    );
}

export default Navbar;