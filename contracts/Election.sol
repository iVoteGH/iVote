pragma solidity ^0.4.24;

contract Election {
    // Model a Candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
        string ballotName;
        uint ballotId;
    }

    // Store accounts that have voted
    mapping(address => bool) public voters1;
    mapping(address => bool) public voters2;
    mapping(address => bool) public voters3;

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
        addCandidate("Alexander Hamilton", "Duel of 1804", 1);
        addCandidate("Aaron Burr", "Duel of 1804", 1);
        addCandidate("Ay-Nur", "Duel of 1992", 2);
        addCandidate("Veronica", "Duel of 1992", 2);
        addCandidate("Jim Inhofe", "Duel of 2018", 3);
        addCandidate("Charles Schumer", "Duel of 2018", 3);
    }

    function addCandidate(string _name, string _ballotName, uint _ballotId) public {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0, _ballotName, _ballotId);
    }

    function vote(uint _candidateId, uint _ballotId) public {

        // require a valid candidate
        require(_candidateId > 0 && _candidateId <= candidatesCount);

        // require that voter hasn't voted before
        // record that voter has voted
        if (_ballotId == 3) {
            require(!voters3[msg.sender]);
            voters3[msg.sender] = true;
        }
        if (_ballotId == 2) {
            require(!voters2[msg.sender]);
            voters2[msg.sender] = true;
        }
        if (_ballotId == 1) {
            require(!voters1[msg.sender]);
            voters1[msg.sender] = true;
        }

        // update candidate vote count
        candidates[_candidateId].voteCount ++;

        // trigger voted event
        votedEvent(_candidateId);
    }

}
