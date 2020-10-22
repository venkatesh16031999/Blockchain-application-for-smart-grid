import React from 'react';
import {Row,Col} from 'react-bootstrap';
import styles from './web3.module.css';
import { Message , Button } from 'semantic-ui-react'


const web3=(props)=>{


    

    return (

        <React.Fragment>
            
            <Row className={styles.wrapper}>
                <Col md={12} xs={12}  >
                    <img  />
                </Col>
            </Row>
            <br />
            <Row className="justify-content-center">
                <Col md={12} xs={12} className="text-center" >
                    <h1>Install MetaMask To Use This Site</h1>
                
                </Col>
            </Row>
            <hr />
            <Row className="justify-content-center">
                <Col md={8} xs={12} className="text-center" >
                <Message
                    error
                    header='Decentralized Application Requires Crypto Currency Wallet. '
                    list={[
                    'Your Browser Don\'t have Metamask Account so Install It',
                    'Add MetaMask Chrome Extension',
                    'Setup An Account To Use This Site'
                    ]}
                />

                </Col>
            </Row>
            <br/>
            <Row className="justify-content-center">
                <Col md={8} xs={12} className="text-center" >

                    <h4>Click Here To Install MetaMask <a target="_blank" href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"><Button>Install MetaMask</Button></a> </h4>
                    
                </Col>
            </Row>

        </React.Fragment>

    );

}

export default web3;