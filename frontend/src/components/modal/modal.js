import React,{Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
import styles from './modal.module.css';

class ModalContainer extends Component {

    render(){
    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className={styles.header}>
          <Modal.Title >
            Transfer electric current
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                    {this.props.children}
        </Modal.Body>
        <Modal.Footer>
          <Button className={styles.button} onClick={this.props.onHide}>Cancel</Button>
          <Button className={styles.button}  onClick={this.props.onSubmit}>Send Electricity</Button>
        </Modal.Footer>
      </Modal>
        )
    }
  }

  export default ModalContainer;