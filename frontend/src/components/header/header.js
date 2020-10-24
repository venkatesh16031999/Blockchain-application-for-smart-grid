import React,{Component} from 'react';
import { Navbar , Nav } from 'react-bootstrap'
import { Button } from 'semantic-ui-react'
import styles from './header.module.css';
import { Link , withRouter } from 'react-router-dom';
import axios from "../../axios";

 
    class Header extends Component{

        logout=()=>{
            this.props.history.replace("/");
        }

        render(){
            return (
            <Navbar className={styles.headerwrapper} collapseOnSelect expand="lg" >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>   
                    <Nav.Link>
                        <Link to="/campaign/profile">
                            <Button content="Venkatesh" icon='user' labelPosition='right' />
                        </Link>
                    </Nav.Link>
                    <Nav.Link >
                         <Button content='Logout' onClick={this.logout} color="red" />
                    </Nav.Link>
                </Nav>
               </Navbar.Collapse>
            </Navbar>
            );
        }
}

export default withRouter(Header);