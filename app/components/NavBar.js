import React, { Component } from 'react'

class NavBar extends Component {
    render () {
        return (
            <div>
                <nav className="transparent z-depth-0">
                    <div className="nav-wrapper">
                    <a href="#" className="brand-logo">RIVALUS</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><i className="material-icons">settings</i></li>
                    </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar