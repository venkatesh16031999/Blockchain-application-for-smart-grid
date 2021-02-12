import React,{Component,Fragment} from 'react';
import DashboardHome from '../dashboardhome/dashboardhome';
import DashboardTransaction from '../dashboardtransactions/dashboardtransaction';
import Accountdetails from '../accountDetailPage/accountDetails';
import {Col,Row,Container} from 'react-bootstrap';
import {withRouter,Switch,Route} from 'react-router-dom';
import Header from '../../components/header/header';
import providersListPage from '../providerListPage/providerListPage';
import styles from './dashboardlayout.module.css';


class DashboardLayout extends Component {

    state = {
        portal: "provider"
    }

    componentDidMount(){
        const params = this.props.location.search.replace("?","").split("=");
        
        if(params[0]==="admin" && params[1]==="true"){
            this.setState({portal:"admin"});
            this.props.history.push("/dashboard/home/admin?admin=true");
        }

    }

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
                                { this.state.portal==="provider" && <Switch>
                                    <Route path="/dashboard/transaction/:id" component={DashboardTransaction}/>
                                    <Route path="/dashboard/home/:id" exact component={DashboardHome}/>
                                    <Route path="/dashboard/accountdetails/:id" exact component={Accountdetails}/>
                                </Switch>
                                }
                                { this.state.portal==="admin" && <Switch>
                                    <Route path="/dashboard/home/admin" exact component={providersListPage} />
                                    <Route path="/dashboard/transaction/:id" component={DashboardTransaction}/>
                                </Switch>
                                }
                            </Col>
                        </Row>
                </Container>
            </Fragment>
        );
    }
}

export default withRouter(DashboardLayout);