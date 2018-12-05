pragma solidity ^0.4.24;

contract Election {
    // Model a Candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
        string state;
    }

    // Store accounts that have voted
    mapping(address => bool) public voters;

    //store admin accounts
    mapping(address => bool) public admins;

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
        addCandidateInit("Kamala Harris", "CA");
        addCandidateInit("Ted Cruz", "TX");
        addCandidateInit("Amy Klobuchar", "MN");
        addCandidateInit("Rand Paul", "KY");
        addCandidateInit("Cory Booker", "NJ");
        addCandidateInit("Lisa Murkowski", "AK");
        addAdmins();
    }

    function addAdmins() private {
        //call addAdmins(address) here, where address is account address of admin user 
    }


    function isAdmin() public returns (bool){
        return admins[msg.sender];
    }

    function addCandidateInit(string _name, string _state) private {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 3, _state);
    }

    function addCandidate(string _name, string _state) public {
        require(admins[msg.sender]);
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name,0, _state);
    }

    function addAdmin(address _admin) private {
        admins[_admin] = true;
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
