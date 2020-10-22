import React from 'react';
import Header from '../header/header';
import styles from './layout.module.css';

const Layout= (props)=>{
    return (
            <React.Fragment >
                    <Header  />
                {props.children}
            </React.Fragment>
    );
}

export default Layout;