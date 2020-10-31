import React,{Component,Fragment} from 'react';
import {Col,Row,Container} from 'react-bootstrap';
import axios from '../../axios';
import BarChart from '../../components/barchart/barchart';
import {withRouter} from 'react-router-dom';
import Verification from './verification.png';
import styles from './dashboardhome.module.css';

class DashboardHome extends Component {

    state = {
        city:"",
        ebId:"", 
        name:"", 
        number:"",
        email:""
    }

    async componentDidMount(){
        
        try{
            const providerData = await axios.get("/getProvider/test-id");
            const {city, ebId, name, number,email} = providerData.data.result[0];

            this.setState({city, ebId, name, number, email});
        }catch(e){
            console.log(e);
        }

    }

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
                                            <h4><b>Name:</b>   {this.state.name}</h4>
                                            <h4><b>Email id:</b>   {this.state.email}</h4>
                                            <h4><b>EB number:</b>   {this.state.ebId}</h4>
                                            <h4><b>Phone Number:</b>   {this.state.number}</h4>
                                            <h4><b>City:</b>   {this.state.city}</h4>
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