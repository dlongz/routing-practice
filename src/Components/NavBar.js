import React from "react";
import { Link } from '@reach/router';

const NavBar = (props) => {




    return(
        <div>
            <nav>
            <Link to = "/dashboard">Dashboard</Link>
            <br/>
            <Link to = "/login">LogIn</Link>
            <br/>
            <Link to = "/home">Home</Link>
            <br/>
            <Link to = "/4">NuM</Link>
            <br />
            <Link to = "/hello">Hello</Link>
            </nav>
        </div>

    )
}

export default NavBar