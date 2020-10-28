import React from 'react';
import {Bar} from 'react-chartjs-2';
import styles from './bar.module.css';
const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Current Generation',
      backgroundColor: '#FFDF6C',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 0,
      data: [65, 59, 80, 81, 56]
    },
    {
      label: 'Transfered Current',
      backgroundColor: '#1e2446',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 0,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default class BarChart extends React.Component {
  render() {
    return (
      <div className="card p-5" style={{boxShadow:'0px 0px 10px rgba(0, 0, 0, 0.232)'}}>
        <Bar 
          data={state}
          options={{
            title:{
              display:true,
              text:'Electricity Readings per month',
              fontSize:15
            },
            legend:{
              display:true,
              position:'bottom'
            }
          }}
        />
      </div>
    );
  }
}