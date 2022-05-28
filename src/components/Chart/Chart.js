import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'
export default function Chart(props) {
  
  const dataPointsValues = props.datapoints.map(datapoint=>datapoint.value);
  const totalMaximum = Math.max(...dataPointsValues);
  return (
    <div className='chart'>
    {props.datapoints.map(datapoint => <ChartBar key={datapoint.label} value={datapoint.value} maxValue={totalMaximum} lbl={datapoint.label}/>)}
    </div>
  )
}
