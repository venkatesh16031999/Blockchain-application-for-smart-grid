import React,{Component,Fragment} from 'react';
import {Col,Row,Container} from 'react-bootstrap';
import styles from './dashboard.module.css';
import {withRouter,NavLink} from 'react-router-dom';

class DashboardList extends Component{
    render(){
        return (
            <Fragment >
                <Container fluid >
                        <Row>
                            <Col md={12} className={styles.logo}>
                                Logo
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <NavLink 
                                activeClassName={styles.isactive} exact={true} to='/dashboard/home'>
                                    <Row>
                                        <Col md={12}  className={styles.list}>
                                            Home
                                        </Col>
                                    </Row>
                                </NavLink>
                            </Col>
                            <Col md={12}>
                                <NavLink 
                                activeClassName={styles.isactive} to='/dashboard/transaction'>
                                    <Row>
                                        <Col md={12} className={styles.list}>
                                            transaction
                                        </Col>
                                    </Row>
                                </NavLink>
                            </Col>
                            <Col md={12}>
                                <NavLink 
                                activeClassName={styles.isactive} to='/dashboard/accountdetails'>
                                    <Row>
                                        <Col md={12} className={styles.list}>
                                            Account Details
                                        </Col>
                                    </Row>
                                </NavLink>
                            </Col>
                        </Row>
                </Container>
            </Fragment>
        );
    }
}

export default withRouter(DashboardList);