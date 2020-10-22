import React,{Component,Fragment} from "react";
import { Container,Row,Col } from 'react-bootstrap';
import styles from './home.module.css';
import Heroimg from './Power.png';

class HomePage extends Component{

    navigate = ()=>{
        this.props.history.push("/login");
    }

    render(){
        return (
            <Fragment>
                <Container fluid className={styles.homewrapper}>
                    <Row>
                    <Col  lg={5} className={styles.homeLeft} >
                        <div>
                            <h1>
                                Electricity Board
                            </h1>
                        </div>
                        <div>
                            <h3>
                                Welcomes you
                            </h3>
                        </div>
                        <div>
                            <button className={styles.dashboardbtn} onClick={this.navigate}>Visit your dashboard</button>
                        </div>
                    </Col>
                    <Col className={styles.homeRight} lg={7}>
                        <div className={styles.heroimg}>
                            <img height="450px" width="500px" src={Heroimg} />
                        </div>
                    </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default HomePage;