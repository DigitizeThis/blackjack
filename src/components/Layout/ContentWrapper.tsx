import React from 'react';

interface Props {
    children?: any;
    unwrap?: boolean
}

//const defaultProps: Props = { unwrap: false };

/**
 * Wrapper element for template content
 */
const ContentWrapper: React.FunctionComponent<Props> = props => (
    <div className="content-wrapper">
        {props.unwrap ?
            (<div className="unwrap">{props.children}</div>)
            :
            (props.children)
        }
    </div>
);

export default ContentWrapper;
