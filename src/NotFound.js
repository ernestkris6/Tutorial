import React from "react";
import { Link } from "react-router-dom";


const NotFound = () => {
    return ( 
        <div>
            <h4>Sorry</h4>
            <Link to="/">
            <p>That page not found!!!</p>
            </Link>
        </div>
     );
}
 
export default NotFound;