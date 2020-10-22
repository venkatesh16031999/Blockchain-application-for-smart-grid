import React,{Component} from 'react';
import { Navbar , Nav } from 'react-bootstrap'
import { Button } from 'semantic-ui-react'
import styles from './header.module.css';
import { Link , withRouter } from 'react-router-dom';
import axios from "../../axios";

 
    class Header extends Component{

        logout=()=>{

            this.props.logout();
            this.props.history.replace("/");

        }

        render(){
            return (
            <Navbar className={styles.headerwrapper} collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand><h3  ><Link to="/"><button className={styles.nostyle}>Crowd Box</button></Link></h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    
                        <Nav.Link >
                            <Link to="/campaign"><button className={styles.nostyle}>Campaign</button></Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to="/campaign/create"><button className={styles.nostyle}>Create Campaign</button></Link>    
                        </Nav.Link>
                </Nav>
                <Nav>   
                    <Nav.Link>
                        <Link to="/campaign/profile">
                            <Button content={this.props.name} icon='user' labelPosition='right' />
                        </Link>
                    </Nav.Link>
                    <Nav.Link to="/login" >
                         <Button content='Login'  color="red" />
                    </Nav.Link>
                </Nav>
               </Navbar.Collapse>
            </Navbar>
            );
        }
}

export default withRouter(Header);