import * as React from 'react';

import Header from './Header';
import Footer from './Footer';

interface Props {
    children: any;
}

const Base: React.FunctionComponent<Props> = (props) => {
    return (
        <div className="wrapper">
            <Header />

            <section className="section-container">
                { props.children }
            </section>

            <Footer />
        </div>
    );
};

export default Base;