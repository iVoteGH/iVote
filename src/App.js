import React, { Component } from 'react'
import { DisplayCandidates } from './Components'
import Election from '../build/contracts/Election.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      electionInstance: {},
      candidates: [],
      account: '',
      votedStatus: false
    }
    this.castVote = this.castVote.bind(this);
  }

  async componentDidMount(){
    // Obtain the Web3 object and instantiate the smart contract.
    await this.instantiateContract();
    // Obtain the candidate count after.
    await this.getCandidateCount();
    // Obtain the account of the user currently voting.
    await this.getAccount();
    // obtain the result of the account being in the voters mapping.
    await this.getVoterState();
  }

  async instantiateContract(){
    const contract = require('truffle-contract');
    const electionContract = contract(Election);
    // IMPORTANT:
    // Set provider of contract's instance to the blockchain node currently connected to
    electionContract.setProvider(window.web3.currentProvider);
    // Await deployed instance of smart contract
    const electionInstance = await electionContract.deployed();
    // Set the instance of contract to local state
    this.setState({ electionInstance });
  }

  async getCandidateCount() {
    const totalNumberOfCandidates = await this.state.electionInstance.candidatesCount();
    const pendingCandidatesArr = [];
    for (let i = 1; i <= totalNumberOfCandidates; i++) {
      pendingCandidatesArr.push(this.state.electionInstance.candidates(i));
    }
    const candidates = await Promise.all(pendingCandidatesArr);
    this.setState({ candidates });
  }

  async getAccount() {
    await window.web3.eth.getAccounts((err, [account]) => {
      this.setState({ account })
    });
  }

  async getVoterState() {
    const { voters } = this.state.electionInstance;
    let votedStatus = await voters(this.state.account);
    this.setState({ votedStatus });
  }

  async castVote(idx) {
    const { vote } = this.state.electionInstance;
    await window.web3.eth.getAccounts((err, [account]) => {
      vote(idx, { from: account })
    });
    this.getVoterState();
  }

  render() {
    console.log('STATE: ', this.state)
    return (
      <div >
        <nav>
            <a href="#">Election Page</a>
        </nav>

        <main>
          <div>
            <div>
              <h1>Election of 1800</h1>
              <p>Federalists v Democratic-Republicans</p>
              <DisplayCandidates candidates={this.state.candidates} castVote={this.castVote} />
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App
