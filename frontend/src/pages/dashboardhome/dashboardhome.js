import React,{Component,Fragment} from 'react';
import {Col,Row,Container} from 'react-bootstrap';
import BarChart from '../../components/barchart/barchart';
import {withRouter} from 'react-router-dom';
import Verification from './verification.png';
import styles from './dashboardhome.module.css';

class DashboardHome extends Component {
    render(){
        return (
            <Fragment>
                <Container fluid>
                        <Row>
                            <Col md={12} className={styles.profilewarpper}>
                                <Container fluid>
                                    <Row>
                                        <Col md={3} className={styles.profilepic}>
                                            <img height="200px" width="200px" src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                                        </Col>
                                        <Col md={6} className={styles.profiledetails}>
                                            <h4><b>Name:</b>   Venkatesh</h4>
                                            <h4><b>Email id:</b>   rvenki666@gmail.com</h4>
                                            <h4><b>EB number:</b>   EB6647</h4>
                                            <h4><b>Phone Number:</b>   94872947849</h4>
                                            <h4><b>City:</b>   Coimbatore</h4>
                                        </Col>
                                        <Col md={3} className={styles.verification}>
                                            <img height="140px" width="130px" src={Verification} />
                                            <h5>Verified</h5>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                </Container>
                <Container fluid>
                        <Row>
                            <Col md={12}  className="p-0">
                            <Container fluid>
                                    <Row>
                                        <Col md={12} className={styles.chartcolor}>
                                        </Col>
                                    </Row>
                            </Container>
                            </Col>
                        </Row>
                </Container>
                <Container fluid>
                        <Row>
                            <Col md={12} className={styles.barchartwrapper}>
                            <Container fluid>
                                    <Row className="d-flex justify-content-center">
                                        <Col md={10} >
                                                <BarChart ></BarChart>
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

export default withRouter(DashboardHome);