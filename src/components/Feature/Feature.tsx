import * as React from 'react';

import ContentWrapper from '../Layout/ContentWrapper';
import BlackjackGame from '../BlackjackGame/BlackjackGame';
import { Row, Col } from 'reactstrap';

const styles = {
    tableContainer: {
        backgroundImage: `url(${"table.png"})`
    }
};

interface Props {
}

class Feature extends React.Component<Props> {

    render() {
        return (
            <ContentWrapper>
                <div className="jacktable" style={styles.tableContainer}>
                    <section>
                        <div className="container">
                            <div className="text-center mt-5">
                                <h1>Pick a Card</h1>
                            </div>

                            <div className="wrap-bj">
                                <Row>
                                    <Col md={ 12 }>
                                        <BlackjackGame />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </section>
                </div>
            </ContentWrapper>
        );
    }

}

export default Feature;
