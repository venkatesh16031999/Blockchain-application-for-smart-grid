import React,{ Component } from 'react';
import styles from  './forget.module.css'
import {Container,Row,Col} from 'react-bootstrap';
import { Form, Input , Button } from 'semantic-ui-react'
import { Link , Redirect } from "react-router-dom"; 

import axios from '../../axios';

class Login extends Component{

    state={
        email:"",
    }

getMail=()=>{

}

render(){
    return (
       
       <div className={styles.wrapper}>

           {this.props.loggedIn ? <Redirect to="/campaign" /> : null}
           
            <Container>
                <Row className="justify-content-center" >
                    <Col md={6} xs={10} className={styles.formwrapper}>
                        <Row  className="justify-content-center">
                            <Col md={10} className="justify-content-center">
                                <br />
                                <h2>Forget Password</h2>
                                <hr />
                            </Col>
                           <Col md={10}>
                           <Form>
                            <Form.Field className={styles.field}>
                            <Input icon='users' iconPosition='left' 
                            onChange={event=>this.setState({email:event.target.value})}
                            placeholder='Email Id' />
                            </Form.Field>
                            </Form>
                           </Col>
                           <Col md={10}>
                                <div className=" d-flex pt-5 justify-content-center">
                                    <button className={styles.loginbutton} onClick={this.getMail} >Get Mail</button>
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