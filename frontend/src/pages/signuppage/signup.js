import React, { Component } from 'react';
import styles from  './signup.module.css'
import InputField from '../../components/input-field/inputfield';
import {Container,Row,Col} from 'react-bootstrap';
import { Form, Input , Button } from 'semantic-ui-react'
import { Link , Redirect } from "react-router-dom"; 


class Signup extends Component{
    state={
        name:"",
        number:"",
        email:"",
        password:"",
        userData:"",
    }

    register= ()=>{
        this.props.history.push("/dashboard/home");
    }

    onNameChange = (name) => {
        this.setState({name:name});
    }
    
    onNumberChange = (number) => {
        this.setState({number:number});
    }

    onEmailChange = (email) => {
        this.setState({email:email});
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
                            
                            <Button.Group size='large'>
                            <Link to="/login"><Button >Sign In</Button></Link>
                                <Button.Or />
                                <Link to="/register"><Button active inverted color='black' >Sign Up</Button></Link>
                            </Button.Group>
                            <br />
                            <br />
                            </Col>
                           <Col md={10}>
                           <Form>
                           <InputField className={styles.field}>
                            <Input icon='address book' iconPosition='left' placeholder='Name' onInputChange={this.onNameChange} />
                            </InputField>
                            <InputField className={styles.field}>
                            <Input icon='phone' iconPosition='left' placeholder='Phone Number' onInputChange={this.onNumberChange} />
                            </InputField>
                            <InputField className={styles.field}>
                            <Input icon='users' iconPosition='left' placeholder='Email Id' onInputChange={this.onEmailChange} />
                            </InputField>
                            <InputField className={styles.field}>
                            <Input icon='keyboard' iconPosition='left' type="password" placeholder='Password' onInputChange={this.onPasswordChange} />
                            </InputField>
                            </Form>
                           </Col>
                           <Col md={10}>
                                <div className=" d-flex pt-3 justify-content-center">
                                <button inverted  className={styles.loginbutton} onClick={this.register}>Signup</button>
                                </div>    
                            </Col>
                            <Col md={10}>
                                <div className=" d-flex pt-3 justify-content-center">
                                <button inverted  className={styles.loginbuttonGoogle} onClick={this.register}>Signup by Google</button>
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


export default Signup;