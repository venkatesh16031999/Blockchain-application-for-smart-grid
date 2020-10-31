import React,{Component,Fragment} from 'react';
import {Col,Row,Container} from 'react-bootstrap';
import styles from './accounts.module.css';
import web3 from '../../etheruem/web3';
import EBContract from '../../etheruem/EB';

class Accountdetails extends Component {

    state = {
        accountAddress:"",
        balance:0,
        inrBalance:0,
        lastTransactionWatts:0
    }

    async componentDidMount(){
        const accounts = await web3.eth.getAccounts();
        let balance = await web3.eth.getBalance(accounts[0]);
        balance = await web3.utils.fromWei(balance,'ether');

        const lastTransaction = await EBContract.methods.getLastTransaction("test-id").call();
        this.setState({
            accountAddress:accounts[0],
            balance:balance,
            inrBalance:Math.round(balance*26000),
            lastTransactionWatts:lastTransaction[0]
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
                                        <Col md={12} className={styles.accountswarpper}>
                                        </Col>
                                    </Row>
                            </Container>
                            </Col>
                        </Row>
                </Container>
                <Container fluid>
                        <Row className="d-flex justify-content-center mt-4">
                            <Col md={3} className="card m-3 shadow-sm ">
                                <div className={styles.heading}>
                                    <p>Balance (ETH)</p>
                                </div>
                                <div className={styles.accountValue}>
                                    <p>{this.state.balance} ETH</p>
                                </div>
                            </Col>
                            <Col md={3} className="card m-3 shadow-sm">
                                <div className={styles.heading}>
                                    <p>Balance (INR)</p>
                                </div>
                                <div className={styles.accountValue}>
                                    <p>{this.state.inrBalance} INR</p>
                                </div>
                            </Col>
                            <Col md={3} className="card m-3 shadow-sm">
                                <div className={styles.heading}>
                                    <p>Available Watts </p>
                                </div>
                                <div className={styles.accountValue}>
                                    <p>5000000</p>
                                </div>
                            </Col>
                        </Row>
                </Container>
                <Container fluid>
                        <Row className="d-flex justify-content-center mt-4">
                            <Col md={6} className="card m-3 shadow-sm ">
                                <div className={styles.heading}>
                                    <p>Account Address</p>
                                </div>
                                <div className={styles.accountAddress}>
                                    <p>{this.state.accountAddress}</p>
                                </div>
                            </Col>
                            <Col md={3} className="card m-3 shadow-sm">
                                <div className={styles.heading}>
                                    <p>Last Electricity transaction</p>
                                </div>
                                <div className={styles.accountValue}>
                                    <p>{this.state.lastTransactionWatts} watts</p>
                                </div>
                            </Col>
                        </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Accountdetails;