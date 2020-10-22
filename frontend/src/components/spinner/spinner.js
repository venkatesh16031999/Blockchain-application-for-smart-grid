import React from 'react';

import { Spinner } from 'react-bootstrap';

import styles from './spinner.module.css';

const SpinnerView =()=>{

    return (

        <div className={styles.wrapper}>
            <Spinner style={{height:"70px",width:"70px"}} animation="border" />
        </div>

    );

}

export default SpinnerView;