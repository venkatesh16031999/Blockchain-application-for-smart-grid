import React,{Component} from 'react';
import styles from './input.module.css';
import { Form, Input , Button } from 'semantic-ui-react'

class InputField extends Component{
    render(){
        return (
            <Form.Field className={styles.field}>
            <Input icon={this.props.icon} 
            iconPosition='left' 
            placeholder={this.props.placeholder}
            type={this.props.type}
            onChange = {(event)=>{this.props.onInputChange(event.target.value)}}
            />
            </Form.Field>
        );
    }
}

export default InputField;