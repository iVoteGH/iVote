import React, { Component } from 'react';
import { DisplayCandidates, Waiting, Results } from '.';
import Election from '../../build/contracts/Election.json';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      electionInstance: {},
      candidates: [],
      account: '',
      votedStatus: null,
      cast: false
    };
    this.castVote = this.castVote.bind(this);
  }

  async componentDidMount() {
    // Obtain the Web3 object and instantiate the smart contract.
    await this.instantiateContract();
    // Obtain the candidate count after.
    await this.getCandidateCount();
    // Obtain the result of the account being in the voters mapping.
    await this.getVoterState();
  }

  async instantiateContract() {
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

  async getVoterState() {
    const { voters } = this.state.electionInstance;
    await window.web3.eth.getAccounts(async (err, [account]) => {
      let votedStatus = await voters(account);
      this.setState({ votedStatus, account });
    });
  }

  async castVote(idx) {
    const { vote } = this.state.electionInstance;
    await window.web3.eth.getAccounts((err, [account]) => {
      vote(idx, { from: account });
    })
    this.setState({cast: true})

  }


  render() {
    //if account is '' --> need to have something that tells you to log into metamask and does not display ability
    console.log('STATE: ', this.state);
    return (
      <div>
      {!this.state.cast ?
              (<DisplayCandidates
                candidates={this.state.candidates}
                castVote={this.castVote}
              />) :
              <div>
              <Waiting candidates={this.state.candidates}/>
              </div>
            }
      </div>
    );
  }
}

