import React,{Component,Fragment} from 'react';
import {Col,Row,Container,Table} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import axios from '../../axios';
import styles from './dashboardtransaction.module.css';

class DashboardTransaction extends Component {

    state = {
        transactionList: []
    }

    async componentDidMount(){
        const ebId = localStorage.getItem("ebId");
        const transaction = await axios.get("/getTransactionList/"+ebId);
        const transactionList = transaction.data.result.map(transactionData=>{
            return transactionData.transaction
        })
        console.log(transactionList);
        this.setState({transactionList:transactionList});
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
                                            <h3>Transaction</h3>
                                            <div className="table">
                                            <Table striped bordered hover >
                                                <thead>
                                                    <tr>
                                                    <th>SI NO</th>
                                                    <th>Date</th>
                                                    <th>Transfered (Watts)</th>
                                                    <th>Amount Paid</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.transactionList.map((transaction,index)=>{
                                                            return (
                                                                <tr>
                                                                    <td>{index+1}</td>
                                                                    <td>{new Date(transaction.timestamp).toDateString()}</td>
                                                                    <td>{transaction.watts}</td>
                                                                    <td>{transaction.isAmountPaid?"Paid":"Not Paid"}</td>
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

export default withRouter(DashboardTransaction);