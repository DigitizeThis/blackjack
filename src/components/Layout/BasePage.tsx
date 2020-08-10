import React from 'react';

interface Props {
    children: any;
}

const BasePage: React.FunctionComponent<Props> = (props) => {
    return (
        <div className="wrapper">
            { props.children }           
        </div>
    );
};


export default BasePage;
