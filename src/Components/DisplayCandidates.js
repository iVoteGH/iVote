import React from 'react'
import { Table, thead, tr, th, tbody, td } from 'react-bootstrap'

const DisplayCandidates = (props) => {
  return (
  <div>
    {props.candidates && props.candidates.length > 0 ?
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Total Votes</th>
          </tr>
        </thead>
        <tbody>
          {
            props.candidates.map((candidate) => (
              <tr key={candidate[0].toString()}>
                <td>{candidate[0].toString()}</td>
                  <td>{candidate[1]}</td>
                  <td>{candidate[2].toString()}</td>
                  <td><button onClick={() => props.castVote(candidate[0].toString())} /></td>
              </tr>
            ))
          }
        </tbody>
      </Table>

      :

      <div>
        <h1>Loading...</h1>
      </div>
    }
  </div>
)}

export default DisplayCandidates
