import React,{Component,Fragment} from 'react';
import {Col,Row,Container} from 'react-bootstrap';
import styles from './dashboard.module.css';
import {withRouter,NavLink} from 'react-router-dom';

class DashboardList extends Component{

    state = {
        routes:[]
    }

    componentDidMount(){
        this.setState({routes:this.props.routeList.routes});
    }

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
                            {
                                this.state.routes.map(route=>{
                                    return (
                                        <Col md={12}>
                                            <NavLink 
                                            activeClassName={styles.isactive} exact={true} to={route.routeLink} >
                                                <Row>
                                                    <Col md={12}  className={styles.list}>
                                                        {route.routeName}
                                                    </Col>
                                                </Row>
                                            </NavLink>
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                </Container>
            </Fragment>
        );
    }
}

export default withRouter(DashboardList);