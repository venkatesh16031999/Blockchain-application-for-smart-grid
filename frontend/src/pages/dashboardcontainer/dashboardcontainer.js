import React,{Component,Fragment} from 'react';
import {Col,Row,Container} from 'react-bootstrap';
import DashboardList from  '../../components/dashboardlist/dashboardlist';
import DashboardLayout from '../dashboardlayout/dashboardlayout';
import styles from './dashboardcontainer.module.css';

class DashboardContainer extends Component {

    state = {
        portal: "provider"
    }

    componentDidMount(){
        const params = this.props.location.search.replace("?","").split("=");

        if(params[0]==="admin" && params[1]==="true"){
            this.setState({portal:"admin"});
        }

    }

    render(){


        const ebId = localStorage.getItem("ebId");

        const list = {
            providersList:{
                routes: [
                    {
                        routeName: "Home",
                        routeLink: `/dashboard/home/${ebId}`
                    },
                    {
                        routeName: "Transaction",
                        routeLink: `/dashboard/transaction/${ebId}`
                    },
                    {
                        routeName: "Account details",
                        routeLink: `/dashboard/accountdetails/${ebId}`
                    }
                ]
            },
            adminList:{
                routes: [
                    {
                        routeName: "adminHome",
                        routeLink: "/dummy"
                    }
                ]
            }
        }

        return (
            <Fragment>
                <Container fluid>
                        <Row>
                            <Col md={2} className={styles.dashlist}>
                                {this.state.portal==="provider" && <DashboardList routeList={list.providersList}></DashboardList>}
                                {this.state.portal==="admin" && <DashboardList routeList={list.adminList}></DashboardList>}
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