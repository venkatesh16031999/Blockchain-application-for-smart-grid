import React,{Component,Fragment} from 'react';
import {Col,Row,Container} from 'react-bootstrap';
import DashboardList from  '../../components/dashboardlist/dashboardlist';
import DashboardLayout from '../dashboardlayout/dashboardlayout';
import styles from './dashboardcontainer.module.css';

class DashboardContainer extends Component {
    render(){
        return (
            <Fragment>
                <Container fluid>
                        <Row>
                            <Col md={2} className={styles.dashlist}>
                                <DashboardList></DashboardList>
                            </Col>
                            <Col md={10} className={styles.pageContainer}>
                                <DashboardLayout></DashboardLayout>
                            </Col>
                        </Row>
                </Container>
            </Fragment>
        );
    }
}

export default DashboardContainer;