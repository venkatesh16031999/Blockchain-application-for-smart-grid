import React,{Component,Fragment} from 'react';
import {Col,Row,Container,Table} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import axios from '../../axios';
import styles from './providerListPage.module.css';
import EBContract from '../../etheruem/EB';
import web3 from '../../etheruem/web3';

class ProvidersListPage extends Component {

    state = {
        providersList: []
    }

    async componentDidMount(){
        // const ebId = localStorage.getItem("ebId");
        // const transaction = await axios.get("/getTransactionList/"+ebId);
        // const transactionList = transaction.data.result.map(transactionData=>{
        //     return transactionData.transaction
        // })
        // console.log(transactionList);
        // this.setState({transactionList:transactionList});

        const providersList = await axios.get("/getAllProvider");
        this.setState({providersList: providersList.data.result});
    }

    verifyProviders = async (ebId) => {

        try {
            const accounts = await web3.eth.getAccounts();
            EBContract.methods.verifyProvider(ebId).send({
                from: accounts[0]
            });
            const providersList = await axios.put(`/verifyProvider/${ebId}`);
            this.setState({providersList: providersList.data.result});
        } catch (error) {
            console.log(error.message);
        }
    }

    checkoutPayments = (ebId) => {
        this.props.history.push({
            pathname: `/dashboard/transaction/${ebId}`,
            search: '?admin=true'
          });
    }

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
                                            <h3>Providers</h3>
                                            <div className="table">
                                            <Table striped bordered hover >
                                                <thead>
                                                    <tr>
                                                    <th>SI NO</th>
                                                    <th>EB ID</th>
                                                    <th>City</th>
                                                    <th>isVerified</th>
                                                    <th>Check Payments</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.providersList.map((providers,index)=>{
                                                            return (
                                                                <tr>
                                                                    <td>{index+1}</td>
                                                                    <td>{providers.ebId}</td>
                                                                    <td>{providers.city}</td>
                                                                    <td>{providers.isVerified?"Verified":<div className={styles.flexCenter}><button onClick={()=>this.verifyProviders(providers.ebId)}>Verify</button></div>}</td>
                                                                    <td><div className={styles.flexCenter}><button onClick={()=>this.checkoutPayments(providers.ebId)}>Payments</button></div></td>
                                                                </tr>
                                                            );
                                                        })
                                                    }
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

export default withRouter(ProvidersListPage);