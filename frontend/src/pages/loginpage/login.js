import React,{ Component } from 'react';
import styles from  './login.module.css'
import InputField from '../../components/input-field/inputfield';
import {Container,Row,Col} from 'react-bootstrap';
import { Form, Input , Button } from 'semantic-ui-react'
import { Link , Redirect } from "react-router-dom"; 

import axios from '../../axios';

class Login extends Component{

    state={
        email:"",
        password:"",
    }

login= async ()=>{
    
    localStorage.removeItem("ebId");
    const { email,password } = this.state;
    this.setState({isLoading:true});
    try{
        const providerData = await axios.post("/providerLogin",{
            email,
            password
        });
        localStorage.setItem("ebId",providerData.data.ebId);
        this.setState({isLoading:false});
        this.props.history.push(`/dashboard/home/${providerData.data.ebId}`);
    }catch(e){
        this.setState({isLoading:false});
        console.log(e);
    }

}

onEmailChange = (email) => {
    this.setState({email:email});
}

onPasswordChange = (password) => {
    this.setState({password:password});
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
                            <InputField 
                            type="email"
                            icon='users' 
                            placeholder='Email Id'
                            onInputChange={this.onEmailChange}
                            >
                            </InputField>
                            <InputField 
                            type="password"
                            icon='keyboard' 
                            placeholder='Password'
                            onInputChange={this.onPasswordChange}
                            >
                            </InputField>
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