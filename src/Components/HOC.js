import React, { Component } from 'react';
import Election from '../../build/contracts/Election.json';

const HOC = OtherComponent => {
  return class Vote extends Component {
    constructor(props) {
      super(props);
      this.state = {
        addedCandidate: null,
        electionInstance: {},
        allCandidates: [],
        account: '',
        selectedBallot: {},
        cast: false,
        ballots: [],
        singleBallot1: {
          candidates: [],
          ballotId: 1,
          ballotName: '',
          votedStatus: null
        },
        singleBallot2: {
          candidates: [],
          ballotId: 2,
          ballotName: '',
          votedStatus: null
        },
        singleBallot3: {
          candidates: [],
          ballotId: 3,
          ballotName: '',
          votedStatus: null
        }
      };
      this.castVote = this.castVote.bind(this);
      this.selectBallot = this.selectBallot.bind(this);
    }

    async componentDidMount() {
      try {
        // Obtain the Web3 object and instantiate the smart contract.
        await this.instantiateContract();
        // Obtain the candidate count after.
        await this.getCandidateCount();
        // Obtain the result of the account being in the voters mapping.
        await this.getVoterState();
        await this.getBallots();


        await this.arrangeBallot();
      } catch (err) {
        console.error(err);
      }
    }

    selectBallot(slctdBlt) {
      // console.log('TYPE OF : ', typeof slctdBlt)
      this.setState( { selectedBallot: slctdBlt } )
    }

    async instantiateContract() {
      try {
        const contract = require('truffle-contract');
        const electionContract = contract(Election);
        // IMPORTANT:
        // Set provider of contract's instance to the blockchain node currently connected to
        electionContract.setProvider(window.web3.currentProvider);
        // Await deployed instance of smart contract
        const electionInstance = await electionContract.deployed();
        // Set the instance of contract to local state
        this.setState({ electionInstance });
      } catch (err) {
        console.error(err);
      }
    }

    async getCandidateCount() {
      try {
        const totalNumberOfCandidates = await this.state.electionInstance.candidatesCount();
        const pendingCandidatesArr = [];
        for (let i = 1; i <= totalNumberOfCandidates; i++) {
          pendingCandidatesArr.push(this.state.electionInstance.candidates(i));
        }
        const allCandidates = await Promise.all(pendingCandidatesArr);
        this.setState({ allCandidates });
      } catch (err) {
        console.error(err);
      }
    }

    async getBallots() {
      try {
        const allBallots = await this.state.allCandidates
          .map(cand => cand[3])
        const ballots = [...new Set(allBallots)]
        this.setState({ ballots })
      } catch (err) {
        console.error(err);
      }
    }

    arrangeBallot(ballotName) {
      console.log('allCandidates: ', this.state.allCandidates)

      this.setState({
        singleBallot1: {
        candidates: [ this.state.allCandidates[0], this.state.allCandidates[1] ],
        ballotName: this.state.allCandidates[0][3],

      },
      singleBallot2: {
        candidates: [ this.state.allCandidates[2], this.state.allCandidates[3] ],
        ballotName: this.state.allCandidates[2][3],

      },
      singleBallot3: {
        candidates: [ this.state.allCandidates[4], this.state.allCandidates[5] ],
        ballotName: this.state.allCandidates[4][3],
      } })
    }

    async getVoterState() {
      try {
        const { voters1, voters2, voters3 } = this.state.electionInstance;
        await window.web3.eth.getAccounts(async (err, [account]) => {
          let votedStatus1 = await voters1(account);
          let votedStatus2 = await voters2(account);
          let votedStatus3 = await voters3(account);
          // this.setState({
          //   singleBallot1: {
          //     votedStatus: votedStatus1
          //   },
          //   singleBallot2: {
          //     votedStatus: votedStatus2
          //   },
          //   singleBallot3: {
          //     votedStatus: votedStatus3
          //   },
          //   account
          // });
          if (votedStatus1 || votedStatus2 || votedStatus3) {
            this.setState({ cast: true });
          }
        });
      } catch (err) {
        console.error(err);
      }
    }

    async castVote(idx) {
      try {
        const { vote } = this.state.electionInstance;
        await window.web3.eth.getAccounts((err, [account]) => {
          vote(idx, { from: account });
        });
        this.setState({ cast: true });
      } catch (err) {
        console.error(err);
      }
    }

    render() {
      console.log("STATE: ", this.state)
      return (
        <OtherComponent
          {...this.props}
          {...this.state}
          castVote={this.castVote}
          selectBallot={this.selectBallot}
        />
      );
    }
  };
};

export default HOC;
