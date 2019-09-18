import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavBar extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to= '/'> Entire Store</Link></li>
                    <li><Link to= '/Meat'> Meat Department</Link></li>
                    <li><Link to= '/Dairy'> Dairy Department</Link></li>
                    <li><Link to= '/Frozen'> Frozen Department</Link></li>
                </ul>
            </div>
        )
    }
}
export default NavBar;