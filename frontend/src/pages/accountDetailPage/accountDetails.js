import React,{Component,Fragment} from 'react';
import {Col,Row,Container,Button} from 'react-bootstrap';
import ModalContainer from '../../components/modal/modal';
import styles from './accounts.module.css';
import web3 from '../../etheruem/web3';
import EBContract from '../../etheruem/EB';
import InputField from '../../components/input-field/inputfield';
import { Form } from 'semantic-ui-react'
import axios from '../../axios';


class Accountdetails extends Component {

    state = {
        accountAddress:"",
        balance:0,
        inrBalance:0,
        lastTransactionWatts:0,
        modalShow:false,
        watts:0,
        EBID:""
    }

    onCurrentValueChange = (watts) => {
        this.setState({watts:watts});
    }
    
    getLastTransaction = async () =>{
        return await EBContract.methods.getLastTransaction(this.props.match.params.id).call();
    }

    async componentDidMount(){

        const accounts = await web3.eth.getAccounts();
        let balance = await web3.eth.getBalance(accounts[0]);
        balance = await web3.utils.fromWei(balance,'ether');

        const lastTransaction = await this.getLastTransaction();
        this.setState({
            accountAddress:accounts[0],
            balance:balance,
            inrBalance:Math.round(balance*26000),
            lastTransactionWatts:lastTransaction[0]===""?0:lastTransaction[0],
            EBID:this.props.match.params.id,
            availableWatts: 5000
        });
    }

    setModalShow(stateValue){
        this.setState({modalShow:stateValue});
    }

    sendElectricity = async () =>{
        const { accountAddress,EBID, watts } = this.state;

        try{

            const timestamp = Date.now();

            await EBContract.methods.sendElectricPower(watts,EBID,timestamp).send({
                from:accountAddress
            });
            const lastTransaction = await this.getLastTransaction();
            const transaction = await axios.post("/storeLastTransaction",{ebId:EBID,watts:watts,timestamp:timestamp,isAmountPaid:lastTransaction[3], amount: lastTransaction[4]});
            console.log("send", transaction);
            this.setState((state,props)=>(
                {
                    availableWatts: state.availableWatts-Number(lastTransaction[0]),
                    lastTransactionWatts:lastTransaction[0]
                }
                )
                );

            this.setModalShow(false);
        }catch(e){
            console.log(e);
        }

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
                                            <Button variant="primary" onClick={() => this.setModalShow(true)}>
                                                Transfer Electric currents
                                            </Button>

                                            <ModalContainer
                                                show={this.state.modalShow}
                                                onHide={() => this.setModalShow(false)}
                                                onSubmit={this.sendElectricity}
                                            >

                                                <Form>
                                                    <InputField 
                                                        type="email"
                                                        icon='users' 
                                                        placeholder='Enter the no of Watts'
                                                        onInputChange={this.onCurrentValueChange}
                                                        >
                                                    </InputField>
                                                </Form>

                                            </ModalContainer>
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
                                    <p>{this.state.availableWatts}</p>
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