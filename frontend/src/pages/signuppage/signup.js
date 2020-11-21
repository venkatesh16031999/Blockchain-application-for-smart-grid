import React, { Component } from 'react';
import styles from  './signup.module.css';
import axios from '../../axios';
import web3 from '../../etheruem/web3';
import EB from '../../etheruem/EB';
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
        EBID:"",
        city:"",
        isLoading: false,
    }

    register = async () => {
        localStorage.removeItem("ebId");
        const { name,number,email,password, EBID,city} = this.state;
        this.setState({isLoading:true});
        try{
            const accounts = await web3.eth.getAccounts();
            await EB.methods.registerProvider(name, email, city, number, EBID).send({from:accounts[0]});
            const providerData = await axios.post("/providerSignup",{
                name,
                email,
                city,
                number,
                password,
                accountAddress:accounts[0],
                ebId:EBID
            });
            localStorage.setItem("ebId",EBID);
            this.setState({isLoading:false});
            this.props.history.push("/dashboard/home/"+EBID);
        }catch(e){
            this.setState({isLoading:false});
            console.log(e);
        }

        
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

    onEBIDChange = (EBID) => {
        this.setState({EBID:EBID});
    }

    onCityChange = (city) => {
        this.setState({city:city});
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

                           <InputField 
                                className={styles.field} 
                                icon='address book' 
                                placeholder='Name' 
                                onInputChange={this.onNameChange} >
                           </InputField>

                           <InputField 
                                className={styles.field} 
                                icon='address book' 
                                placeholder='City' 
                                onInputChange={this.onCityChange} >
                           </InputField>

                           <InputField 
                                className={styles.field} 
                                icon='address book' 
                                placeholder='EB ID' 
                                onInputChange={this.onEBIDChange} >
                           </InputField>

                            <InputField 
                                className={styles.field} 
                                icon='phone' 
                                placeholder='Phone Number' 
                                onInputChange={this.onNumberChange}
                            >
                            </InputField>

                            <InputField 
                                className={styles.field} 
                                icon='users' 
                                placeholder='Email Id' 
                                onInputChange={this.onEmailChange} 
                            >
                            </InputField>

                            <InputField 
                                className={styles.field}
                                icon='keyboard' 
                                type="password" 
                                placeholder='Password' 
                                onInputChange={this.onPasswordChange} 
                            >
                            </InputField>
                            </Form>
                           </Col>
                           <Col md={10}>
                                <div className=" d-flex pt-3 justify-content-center">
                                <Button loading={this.state.isLoading}  className={styles.loginbutton} onClick={this.register}>Signup</Button>
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