pragma solidity ^0.4.24;

contract Election {
    // Model a Candidate
    struct Candidate {
        uint id;
        string name;
        string state; 
        uint voteCount;
    }

    // Store accounts that have voted
    mapping(address => bool) public voters;

    //store admin accounts 
    mapping(address => bool) private admins; 

    // Store Candidates
    // Fetch Candidates
    mapping(uint => Candidate) public candidates;
    // Store Candidates Count
    uint public candidatesCount;

    // voted event
    event votedEvent (
        uint indexed _candidateId
    );

    // Constructor
    function Election() public {
        addCandidateInit("Alexander Hamilton", "NY");
        addCandidateInit("Aaron Burr", "NY");
        addAdmin(0xc9Be7e69a60bc72d7a2837a7d444A5741227893c); 
        addAdmin(0x67fd37f1078fDCB5FF9D85BacDb8a61aB9f89956); 
    }

    function isAdmin() public returns (bool){ 
        return admins[msg.sender]; 
    }

    function addCandidateInit(string _name, string _state) private {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, _state, 0);
    }

    function addCandidate(string _name, string _state) public {
        require(admins[msg.sender]); 
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, _state, 0);
    }

    function addAdmin(address _addy) private { 
        admins[_addy] = true; 
    }

    function vote(uint _candidateId) public {
        // require that voter hasn't voted before
        require(!voters[msg.sender]);

        // require a valid candidate
        require(_candidateId > 0 && _candidateId <= candidatesCount);

        // record that voter has voted
        voters[msg.sender] = true;

        // update candidate vote count
        candidates[_candidateId].voteCount ++;

        // trigger voted event
        votedEvent(_candidateId);
    }

}
