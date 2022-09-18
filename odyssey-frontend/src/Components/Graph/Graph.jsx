import React from 'react'
import Plot from 'react-plotly.js';
import './Graph.css'

const Graph = (props) => {
  return (
    <div className="graph">
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 500, height: 500, title: 'TES'} }
      />
    </div>
    
  )
}

export default Graph