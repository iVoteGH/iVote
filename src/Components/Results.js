import React from 'react'
import Link from 'react-router-dom'
import { VictoryBar, VictoryAxis, VictoryChart } from 'victory';

const Results = (props) => {
    let data = []; 
    props.location.state.candidates.map(candidate => { 
        data.push({id: candidate[0]["c"][0], votes: candidate[2]["c"][0]})
    })

    let data2 = [{id: 1, votes: 3}, {id: 2, votes: 1}]
    console.log('data2', data2)
       
      console.log('state', props.location.state.candidates)
      console.log('data', data); 
  return (
     
    <div>   
        <h2>RESULTS!</h2>
        <VictoryBar
        data={data}
        // data accessor for x values
        x="id"
        // data accessor for y values
        y="votes"
      />
    </div>
)}

export default Results
