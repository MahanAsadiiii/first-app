import React from 'react'

import ChartBar from './ChartBar'
import './Chart.css'

const Chart = props =>{
 return <div className="Chart">
    {props.dataPoints.map(dataPoint => <ChartBar value={dataPoint.value} maxValue={null} label />)}
 </div>
}

export default Chart