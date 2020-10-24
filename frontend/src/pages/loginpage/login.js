import React,{ Component } from 'react';
import styles from  './login.module.css'
import {Container,Row,Col} from 'react-bootstrap';
import { Form, Input , Button } from 'semantic-ui-react'
import { Link , Redirect } from "react-router-dom"; 

import axios from '../../axios';

class Login extends Component{

    state={
        email:"",
        password:""
    }

login=()=>{
    this.props.history.push("/dashboard/home");
}

forgetPassword=()=>{

this.props.history.push("/forgetpassword");

}

render(){
    return (
       <div>
       <div className={styles.wrapper}>
           
            <Container>
                <Row className="justify-content-center" >
                    <Col md={6} xs={10} className={styles.formwrapper}>
                        <Row  className="justify-content-center">
                            <Col md={10} className="justify-content-center">
                            <br />
                            <Button.Group size='large'>
                                <Link to="/login"><Button active inverted color='black' >Sign In</Button></Link>
                                <Button.Or />
                                <Link to="/register"><Button  >Sign Up</Button></Link>
                            </Button.Group>
                            <br />
                            <br />
                            </Col>
                           <Col md={10}>
                           <Form>
                            <Form.Field className={styles.field}>
                            <Input icon='users' iconPosition='left' 
                            onChange={event=>this.setState({email:event.target.value})}
                            placeholder='Email Id' />
                            </Form.Field>
                            <Form.Field className={styles.field}>
                            <Input icon='keyboard' 
                            iconPosition='left' 
                            placeholder='Password'
                            type="password"
                            onChange={event=>this.setState({password:event.target.value})}
                            />
                            </Form.Field>
                            </Form>
                           </Col>
                            <Col md={10} >
                                <div className=" d-flex pt-3 justify-content-center">
                                <button className={styles.loginbutton} onClick={this.login} >Login</button>
                                </div>    
                            </Col>
                            <Col md={10}>
                                <div className="d-flex pt-3 justify-content-center">
                                    <button 
                                    className={styles.forgetpassword}
                                    onClick={this.forgetPassword}
                                    >Forgrt password ?</button>
                                </div>  
                               
                            <br />
                            <br />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
        </div>
    );
    }
}

export default Login;