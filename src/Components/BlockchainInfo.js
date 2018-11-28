import React from 'react';
import { Link } from 'react-router-dom';

const BlockchainInfo = () => {
  return (
    <div>
      <br />
      <h1>What is a blockchain?</h1>
      <p>
        A blockchain is a peer-to-peer network of computers, referred to as
        'nodes'. This decentralized nature also makes blockchain a database.
        More specifically, it is a transactional database that is commonly
        referred to as a public ledger. These nodes race to verify and add
        transactions to the database. This database is composed of the 'blocks'
        in 'blockchain'. Every block is mathematically linked to the block
        before and the block after in a chain. Each block is built from the
        addition of the block before it and the newly verified transaction.
      </p>
      <br />

      <h2>Why blockchain?</h2>
      <p>
        Using blockchain allows iVote to harness the distributed ledger aspect
        of the technology. Instead of a usual general ledger, this is
        distributed across multiple servers - typically geographically separate.
        These servers verify the authenticity of the votes, or blocks, which
        contain anonymous votes. After verification, they are added to the
        blockchain. Once added, they cannot be changed. This leads to the topic
        of security
      </p>
      <br />

      <h2>Security</h2>
      <p>
        Ballots are stored on the immutable blockchain; they cannot be changed
        once added. This prevents anyone from hacking into the election to
        change votes. Remember, each time a vote is added to the chain, the
        entire ledger is updated. If every vote is stored on the blockchain,
        anyone can read what votes are counted.
      </p>
      <br />

      <h2>Transparency</h2>
      <p>
        This may be the most critical aspect of utilizing blockchain technology
        for voting purposes. Any single person can audit each and every vote on
        the chain. Otherwise, there can be no assurance of accurate results. At
        any step in the process, a voter can check to make sure their vote is
        counted and accurate.
      </p>
      <br />
      <Link to="/info">
        <button type="button" className="btn btn-navy btn-lg text-white">
          View Candidates!
        </button>
      </Link>
    </div>
  );
};

export default BlockchainInfo;
