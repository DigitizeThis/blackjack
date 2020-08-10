import * as React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../logo.svg';

interface Props {}

const styles = {
    imgContainer: {
        backgroundImage: `url(${"home.jpg"})`
    }
};

class Home extends React.Component<Props> {

    render() {
        return (
            <div className="body-home" style={styles.imgContainer}>
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <main role="main" className="inner cover">
                        <h1 className="cover-heading">Welcome to BlackJack™</h1>
                        <div className="jack-wrapper"><img src={logo} className="App-logo text-center" alt="logo" /></div>
                        <p className="lead">
                            <Link to="Feature" className="btn btn-warning btn-lg px-5">
                                Let's Play
                            </Link>
                        </p>
                    </main>
                    <footer className="mastfoot mt-auto container-fluid">
                        <div className="inner">
                            <p>&copy;BlackJack<br />All Rights Reserved</p>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default Home;
