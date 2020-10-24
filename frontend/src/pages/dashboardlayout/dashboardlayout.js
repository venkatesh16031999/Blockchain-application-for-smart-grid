import React,{Component,Fragment} from 'react';
import DashboardHome from '../dashboardhome/dashboardhome';
import DashboardTransaction from '../dashboardtransactions/dashboardtransaction';
import {Col,Row,Container} from 'react-bootstrap';
import {withRouter,Switch,Route} from 'react-router-dom';
import Header from '../../components/header/header';
import styles from './dashboardlayout.module.css';


class DashboardLayout extends Component {
    render(){
        return (
            <Fragment>
                <Container fluid>
                        <Row>
                            <Col md={12} className="p-0">
                                <Header></Header>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className="p-0">
                                <Switch>
                                    <Route path="/dashboard/transaction" component={DashboardTransaction}/>
                                    <Route path="/dashboard/home" exact component={DashboardHome}/>
                                </Switch>
                            </Col>
                        </Row>
                </Container>
            </Fragment>
        );
    }
}

export default withRouter(DashboardLayout);