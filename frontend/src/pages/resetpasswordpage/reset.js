import React,{ Component } from 'react';
import styles from  './login.module.css'
import InputField from '../../components/input-field/inputfield';
import {Container,Row,Col} from 'react-bootstrap';
import { Form, Input , Button } from 'semantic-ui-react'
import { Link , Redirect } from "react-router-dom"; 
import axios from '../../axios';

class Login extends Component{

    state={
        password:"",
    }

  setpassword=()=>{

  }

  onPasswordChange = (password) => {
    this.setState({password:password});
}


render(){
    return (
       
       <div className={styles.wrapper}>
           
            <Container>
                <Row className="justify-content-center" >
                    <Col md={6} xs={10} className={styles.formwrapper}>
                        <Row  className="justify-content-center">
                            <Col md={10} className="justify-content-center">
                                <br />
                                <h2>Reset Password</h2>
                                <hr />
                            </Col>
                           <Col md={10}>
                           <Form>
                            <InputField 
                            type="Password"
                            icon='users' 
                            placeholder='Password'
                            onInputChange={this.onPasswordChange}
                            >
                            </InputField>
                            </Form>
                           </Col>
                           <Col md={10}>
                                <div className=" d-flex pt-5 justify-content-center">
                                    <button className={styles.loginbutton} onClick={this.setpassword} >Set Password</button>
                                </div>   
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>

    );
    }
}

export default Login;