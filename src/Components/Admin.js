import React, { Component } from 'react';




    async addCand() {
      try {
        const { addCandidate } = this.state.electionInstance;
        await addCandidate("WHO",{ from: "0x5C7151bD1f8D09Bc427f3dF5974efE832d7Ece65" });
        // window.web3.eth.getAccounts((err, [account]) =>
          this.setState({ addedCandidate: true })
      } catch (error) {
        console.error(error);
      }
    }
