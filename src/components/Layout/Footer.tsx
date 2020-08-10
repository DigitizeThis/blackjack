import React, { Component } from 'react';

class Footer extends Component {

    render() {
        const year = new Date().getFullYear();
        return (
            <footer className="container-fluid text-center mastfoot">
                <div className="mx-auto my-5">
                    <span>&copy; {year} - BlackJack</span>
                </div>
            </footer>
        );
    }
}

export default Footer;
