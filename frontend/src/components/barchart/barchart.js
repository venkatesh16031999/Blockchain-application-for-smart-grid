import React from 'react';
import {Bar} from 'react-chartjs-2';
import styles from './bar.module.css';

export default class BarChart extends React.Component {

  state = {
      statistics: {

      }
  }

  componentDidMount(){

    const chartColor = ['#FFDF6C', '#1e2446']; 

    const statistics = {};
    statistics.datasets = [];
    statistics.labels = this.props.statistics.charts[0].providerTransactionList.map((_,index)=>{
      return index+1;
    })

    this.props.statistics.charts.forEach((chart,index)=>{

      const dataObj = {
        label: chart.barChartName,
        backgroundColor: chartColor[index%2],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 0,
        data: chart.providerTransactionList
      }

      statistics.datasets.push(dataObj);

    })

    this.setState({statistics});

  }

  render() {
    return (
      <div className="card p-5" style={{boxShadow:'0px 0px 10px rgba(0, 0, 0, 0.232)'}}>
        <Bar 
          data={this.state.statistics}
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