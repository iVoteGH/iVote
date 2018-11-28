import React, { Component } from 'react';
import HOC from './HOC';

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: false,
      selectedCandidates: [],
      candidateList: [
        { candidate: 'Doug Jones', state: 'AL' },
        { candidate: 'Richard Shelby', state: 'AL' },
        { candidate: 'Lisa Murkowski', state: 'AK' },
        { candidate: 'Dan Sullivan', state: 'AK' },
        { candidate: 'Jeff Flake', state: 'AZ' },
        { candidate: 'Jon Kyl', state: 'AZ' },
        { candidate: 'John Boozman', state: 'AR' },
        { candidate: 'Tom Cotton', state: 'AR' },
        { candidate: 'Dianne Feinstein', state: 'CA' },
        { candidate: 'Kamala Harris', state: 'CA' },
        { candidate: 'Michael Bennet', state: 'CO' },
        { candidate: 'Cory Gardner', state: 'CO' },
        { candidate: 'Richard Blumenthal', state: 'CT' },
        { candidate: 'Christopher Murphy', state: 'CT' },
        { candidate: 'Thomas Carper', state: 'DE' },
        { candidate: 'Christopher Coons', state: 'DE' },
        { candidate: 'Bill Nelson', state: 'FL' },
        { candidate: 'Marco Rubio', state: 'FL' },
        { candidate: 'Johnny Isakson', state: 'GA' },
        { candidate: 'David Perdue', state: 'GA' },
        { candidate: 'Brian Schatz', state: 'HI' },
        { candidate: 'Mazie Hirono', state: 'HI' },
        { candidate: 'Michael Crapo', state: 'ID' },
        { candidate: 'Jim Risch', state: 'ID' },
        { candidate: 'Richard Durbin', state: 'IL' },
        { candidate: 'Tammy Duckworth', state: 'IL' },
        { candidate: 'Joe Donnelly', state: 'IN' },
        { candidate: 'Todd Young', state: 'IN' },
        { candidate: 'Charles Grassley', state: 'IA' },
        { candidate: 'Joni Ernst', state: 'IA' },
        { candidate: 'Pat Roberts', state: 'KS' },
        { candidate: 'Jerry Moran', state: 'KS' },
        { candidate: 'Mitch McConnell', state: 'KY' },
        { candidate: 'Rand Paul', state: 'KY' },
        { candidate: 'Bill Cassidy', state: 'LA' },
        { candidate: 'John Kennedy', state: 'LA' },
        { candidate: 'Susan Collins', state: 'ME' },
        { candidate: 'Angus King', state: 'ME' },
        { candidate: 'Benjamin Cardin', state: 'MD' },
        { candidate: 'Chris Van Hollen', state: 'MD' },
        { candidate: 'Elizabeth Warren', state: 'MA' },
        { candidate: 'Edward Markey', state: 'MA' },
        { candidate: 'Debbie Stabenow', state: 'MI' },
        { candidate: 'Gary Peters', state: 'MI' },
        { candidate: 'Amy Klobuchar', state: 'MN' },
        { candidate: 'Tina Smith', state: 'MN' },
        { candidate: 'Roger Wicker', state: 'MS' },
        { candidate: 'Cindy Hyde-Smith', state: 'MS' },
        { candidate: 'Claire McCaskill', state: 'MO' },
        { candidate: 'Roy Blunt', state: 'MO' },
        { candidate: 'Jon Tester', state: 'MT' },
        { candidate: 'Steve Daines', state: 'MT' },
        { candidate: 'Deb Fischer', state: 'NE' },
        { candidate: 'Ben Sasse', state: 'NE' },
        { candidate: 'Dean Heller', state: 'NV' },
        { candidate: 'Catherine Cortez Masto', state: 'NV' },
        { candidate: 'Jeanne Shaheen', state: 'NH' },
        { candidate: 'Margaret Hassan', state: 'NH' },
        { candidate: 'Robert Menendez', state: 'NJ' },
        { candidate: 'Cory Booker', state: 'NJ' },
        { candidate: 'Tom Udall', state: 'NM' },
        { candidate: 'Martin Heinrich', state: 'NM' },
        { candidate: 'Charles Schumer', state: 'NY' },
        { candidate: 'Kirsten Gillibrand', state: 'NY' },
        { candidate: 'Richard Burr', state: 'NC' },
        { candidate: 'Thom Tillis', state: 'NC' },
        { candidate: 'John Hoeven', state: 'ND' },
        { candidate: 'Heidi Heitkamp', state: 'ND' },
        { candidate: 'Sherrod Brown', state: 'OH' },
        { candidate: 'Rob Portman', state: 'OH' },
        { candidate: 'James Inhofe', state: 'OK' },
        { candidate: 'James Lankford', state: 'OK' },
        { candidate: 'Ron Wyden', state: 'OR' },
        { candidate: 'Jeff Merkley', state: 'OR' },
        { candidate: 'Bob Casey', state: 'PA' },
        { candidate: 'Patrick Toomey', state: 'PA' },
        { candidate: 'Jack Reed', state: 'RI' },
        { candidate: 'Sheldon Whitehouse', state: 'RI' },
        { candidate: 'Lindsey Graham', state: 'SC' },
        { candidate: 'Tim Scott', state: 'SC' },
        { candidate: 'John Thune', state: 'SD' },
        { candidate: 'Mike Rounds', state: 'SD' },
        { candidate: 'Lamar Alexander', state: 'TN' },
        { candidate: 'Bob Corker', state: 'TN' },
        { candidate: 'Ted Cruz', state: 'TX' },
        { candidate: 'John Cornyn', state: 'TX' },
        { candidate: 'Orrin Hatch', state: 'UT' },
        { candidate: 'Mike Lee', state: 'UT' },
        { candidate: 'Patrick Leahy', state: 'VT' },
        { candidate: 'Bernard Sanders', state: 'VT' },
        { candidate: 'Tim Kaine', state: 'VA' },
        { candidate: 'Mark Warner', state: 'VA' },
        { candidate: 'Patty Murray', state: 'WA' },
        { candidate: 'Maria Cantwell', state: 'WA' },
        { candidate: 'Joe Manchin', state: 'WV' },
        { candidate: 'Shelley Capito', state: 'WV' },
        { candidate: 'Ron Johnson', state: 'WI' },
        { candidate: 'Tammy Baldwin', state: 'WI' },
        { candidate: 'John Barrasso', state: 'WY' },
        { candidate: 'Michael Enzi', state: 'WY' },
      ],
      adminStatus: false,
      checked: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.addCandidates = this.addCandidates.bind(this);
    this.getAdminStatus = this.getAdminStatus.bind(this);
    this.toAddCandidate = this.toAddCandidate.bind(this);
    this.toRemoveCanidate = this.toRemoveCanidate.bind(this);
    this.filterCandidates = this.filterCandidates.bind(this);
  }

  filterCandidates() {
    const contractCandidates = this.props.candidates.map(
      candidate => candidate[1]
    );
    let remainingCandidates = this.state.candidateList.filter(
      candidate => !contractCandidates.includes(candidate.candidate)
    );
    this.setState({ candidateList: remainingCandidates });
  }

  async getAdminStatus() {
    try {
      const { admins } = this.props.electionInstance;
      await window.web3.eth.getAccounts(async (err, [account]) => {
        let adminStatus = await admins(account);
        this.setState({ adminStatus, checked: true });
        this.filterCandidates();
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleChange(evt) {
    let parsed = JSON.parse(evt.target.value);
    this.setState({ candidate: parsed.candidate, state: parsed.state });
  }

  async addCandidates() {
    try {
      if (this.state.selectedCandidates.length) {
        const candidates = this.state.selectedCandidates;
        const { addCandidate } = this.props.electionInstance;

        for (let i = 0; i < this.state.selectedCandidates.length; i++) {
          await window.web3.eth.getAccounts((err, [account]) => {
            addCandidate(candidates[i].candidate, candidates[i].state, {
              from: account,
            });
          });
        }
      } else {
        throw 'Please pick a candidate to add';
      }
    } catch (err) {
      console.error(err);
    }
  }

  toAddCandidate(addCandidate) {
    let selectedCandidates = this.state.selectedCandidates;
    selectedCandidates.push(addCandidate);
    this.setState({ selectedCandidates });
    let candidateList = this.state.candidateList.filter(
      candidate => candidate.candidate !== addCandidate.candidate
    );
    this.setState({ candidateList });
  }

  toRemoveCanidate(remCandidate) {
    let candidates = this.state.selectedCandidates;
    let selectedCandidates = candidates.filter(
      candidate => candidate.candidate !== remCandidate.candidate
    );
    this.setState({ selectedCandidates });
    let candidateList = this.state.candidateList;
    candidateList.push(remCandidate);
    this.setState({ candidateList });
  }

  render() {
    return !this.state.adminStatus ? (
      <div>
        <br />
        <button className="btn btn-primary" onClick={this.getAdminStatus}>
          Check Admin Status
        </button>
        {this.state.checked ? <p>Admin Access Denied</p> : null}
      </div>
    ) : (
      <div>
        <br />
        <button className="btn btn-primary" onClick={this.addCandidates}>
          Add {this.state.selectedCandidates.length} Candidates
        </button>

        <div>
          <p>Candidates to Add</p>
          <ul className="addCandList">
            {this.state.selectedCandidates.map(candidate => (
              <li>
                {candidate.candidate}{' '}
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => this.toRemoveCanidate(candidate)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>

        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Add</th>
              <th scope="col">Candidate</th>
              <th scope="col">State</th>
            </tr>
          </thead>
          <tbody>
            {this.state.candidateList.map((candidate, i) => (
              <tr key={i}>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => this.toAddCandidate(candidate)}
                  >
                    Add Candidate
                  </button>
                </td>
                <td>{candidate.candidate}</td>
                <td>{candidate.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default HOC(AdminPage);
