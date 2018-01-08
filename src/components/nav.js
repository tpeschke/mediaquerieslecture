import React, { Component } from 'react'
import './nav.css'

export default class Nav extends Component {

    render() {

        return (
            <div>
                <nav className='main-nav'>
                    <div className='title'>
                    Start Bootstrap
                    </div>
                    <div className="links">
                    Home About Services Contact
                    </div>

                    <div className="ham-menu"></div>
                </nav>
            </div>
        )
    }
}