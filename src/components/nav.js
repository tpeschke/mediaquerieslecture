import React, { Component } from 'react'
import './nav.css'

export default class Nav extends Component {
    constructor() {
        super()

        this.state = {
            shouldSpin: false,
            show: false
        }
        this.animate = this.animate.bind(this)
    }

    animate(){
        this.setState({ shouldSpin: !this.state.shouldSpin})
    }

    slide = () => {
        this.setState({ show: !this.state.show})
    }


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

                    <div className="ham-menu"
                        onClick={this.slide}
                        ></div>

                    <div className={this.state.show ? 'menu slide': 'menu'}
                    ></div>
                </nav>

                <br />
                <br />
                <br />
                <br />
                <hr />

                <div 
                    className={this.state.shouldSpin ? 'square square-spin' : 'square'}
                    onClick={this.animate}
                    ></div>

                <div className="transition"></div>
    
            </div>
        )
    }
}