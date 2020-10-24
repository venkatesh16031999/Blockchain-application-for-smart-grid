import React,{Component,Fragment} from 'react';
import {Col,Row,Container,Table} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

import styles from './dashboardtransaction.module.css';

class DashboardTransaction extends Component {
    render(){
        return (
            <Fragment>
                <Container fluid>
                        <Row>
                            <Col md={12}  className="p-0">
                            <Container fluid>
                                    <Row>
                                        <Col md={12} className={styles.transactionabovewarpper}>
                                        </Col>
                                    </Row>
                            </Container>
                            </Col>
                        </Row>
                </Container>
                <Container fluid>
                        <Row>
                            <Col md={12} className={styles.transactiontablewarpper}>
                            <Container fluid>
                                    <Row className="d-flex justify-content-center">
                                        <Col md={11} >
                                            <h3>Transaction</h3>
                                            <div className="table">
                                            <Table striped bordered hover >
                                                <thead>
                                                    <tr>
                                                    <th>SI NO</th>
                                                    <th>Date</th>
                                                    <th>Transfered (Watts)</th>
                                                    <th>(need to confirm)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    <td>1</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                    <td>2</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                    </tr>
                                                    <tr>
                                                    <td>1</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    </tr><tr>
                                                    <td>1</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    </tr><tr>
                                                    <td>1</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    </tr><tr>
                                                    <td>1</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    </tr><tr>
                                                    <td>1</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    </tr><tr>
                                                    <td>1</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    </tr><tr>
                                                    <td>1</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    </tr><tr>
                                                    <td>1</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    </tr><tr>
                                                    <td>1</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    </tr><tr>
                                                    <td>1</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            </div>
                                        </Col>
                                    </Row>
                            </Container>
                            </Col>
                        </Row>
                </Container>
            </Fragment>
        );
    }
}

export default withRouter(DashboardTransaction);