import React, { Component } from 'react';
import HOC from './HOC'

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admin: false,
            candidate: "",
            state: "",
            candidateList: [
                { candidate: "Jeff Flake", state: "AZ" },
                { candidate: "Diane Feinstein", state: "CA" },
                { candidate: "Jeff Flake", state: "AZ" },
                { candidate: "Mark Warner", state: "VA" },
                { candidate: "Lisa Murkowski" , state: "AL" },
                { candidate: "Daniel S. Sullivan", state: "AL" },
                { candidate: "Jon Kyl", state: "AZ" },
                { candidate: "John Boozman", state: "AK" },
                { candidate: "Tom Cotton", state: "AK" },
                { candidate: "Kamala D. Harris", state: "CA" },
                { candidate: "Micheal Bennet", state: "CO" },
                { candidate: "Cory Gardner", state: "CO" },
                { candidate: "Richard Blumenthal", state: "CT" },
                { candidate: "Christopher S. Murphy", state: "CT" },
                { candidate: "Tom Carper", state: "DE" },
                { candidate: "Chris Coons", state: "DE" },
                { candidate: "Bill Nelson", state: "FL" },
                { candidate: "Marco Rubio", state: "FL" },
                { candidate: "Johnny Isakson", state: "GA" },
                { candidate: "David Perdue", state: "GA" },
                { candidate: "Brian E. Schatz", state: "HI" },
                { candidate: "Mazie K. Hirono", state: "HI" },
                { candidate: "Mike Crapo", state: "ID" },
                { candidate: "Jim Risch", state: "ID" },
                { candidate: "Dick Durbin", state: "IL" },
                { candidate: "Tammy Duckworth", state: "IL" },
                { candidate: "Joe Donnelly", state: "IN" },
                { candidate: "Todd C. Young", state: "IN" },
                { candidate: "Chuck Grassley", state: "IA" },
                { candidate: "Joni Ernst", state: "IA" },
                { candidate: "Pat Roberts", state: "KS" },
                { candidate: "Jerry Moran", state: "KS" },
                { candidate: "Mitch McConnell", state: "KY" },
                { candidate: "Rand Paul", state: "KY" },
                { candidate: "Bill Cassidy", state: "LA" },
                { candidate: "John Neely Kennedy", state: "LA" },
                { candidate: "Susan Collins", state: "ME" },
                { candidate: "Angus King", state: "ME" },
                { candidate: "Ben Cardin", state: "MD" },
                { candidate: "Chris Van Hollen", state: "MD" },
                { candidate: "Elizabeth Warren", state: "MA" },
                { candidate: "Ed Markey", state: "MA" },
                { candidate: "Debbie Stabenow", state: "MI" },
                { candidate: "Gary Peters", state: "MI" },
                { candidate: "Amy Klobuchar", state: "MN" },
                { candidate: "Tina Smith", state: "MN" },
                { candidate: "Roger Wicker", state: "MS" },
                { candidate: "Cindy Hyde-Smith", state: "MS" },
                { candidate: "Claire McCaskill", state: "MO" },
                { candidate: "Roy Blunt", state: "MO" },
                { candidate: "Jon Tester", state: "MT" },
                { candidate: "Steve Daines", state: "MT" },
                { candidate: "Deb Fischer", state: "NE" },
                { candidate: "Ben Sasse", state: "NE" },
                { candidate: "Dean Heller", state: "NV" },
                { candidate: "Catherine Cortez Masto", state: "NV" },
                { candidate: "Jeanne Shaheen", state: "NH" },
                { candidate: "Maggie Hassan", state: "NH" },
                { candidate: "Bob Menendez", state: "NJ" },
                { candidate: "Cory Booker", state: "NJ" },
                { candidate: "Tom Udall", state: "NM" },
                { candidate: "Martin Heinrich", state: "NM" },
                { candidate: "Charles Schumer", state: "NY" },
                { candidate: "Kirsten Gillibrand", state: "NY" },
                { candidate: "Richard Burr", state: "NC" },
                { candidate: "Thom Tillis", state: "NC" },
                { candidate: "John Hoeven", state: "ND" },
                { candidate: "Heidi Heitkamp", state: "ND" },
                { candidate: "Sherrod Brown", state: "OH" },
                { candidate: "Rob Portman", state: "OH" },
                { candidate: "Jim Inhofe", state: "OK" },
                { candidate: "James Lankford", state: "OK" },
                { candidate: "Ron Wyden", state: "OR" },
                { candidate: "Jeff Merkley", state: "OR" },
                { candidate: "Bob Casey Jr.", state: "PA" },
                { candidate: "Pat Toomey", state: "PA"  },
                { candidate: "Jack Reed", state: "RI" },
                { candidate: "Sheldon Whitehouse", state: "RI" },
                { candidate: "Lindsey Graham", state: "SC" },
                { candidate: "Tim Scott", state: "SC" },
                { candidate: "John Thune", state: "SD" },
                { candidate: "Mike Rounds" , state: "SD" },
                { candidate: "Lamar Alexander", state: "TN" },
                { candidate: "Bob Corker", state: "TN" },
                { candidate: "Ted Cruz", state: "TX" },
                { candidate:  "John Cornyn", state: "TX" },
                { candidate: "Orrin Hatch", state: "UT" },
                { candidate: "Mike Lee" , state: "UT" },
                { candidate: "Patrick Leahy", state: "VT" },
                { candidate: "Bernard Sanders", state: "VT" },
                { candidate: "Tim Kaine", state: "VA" },
                { candidate: "Patty Murray", state: "WA" },
                { candidate: "Maria Cantwell", state: "WA" },
                { candidate: "Joe Manchin III", state: "WV" },
                { candidate: "Shelley Moore Capito", state: "WV" },
                { candidate: "Ronald Harold Johnson", state: "WI" },
                { candidate: "Tammy Baldwin", state: "WI" },
                { candidate: "John Barrasso", state: "WY" },
                { candidate: "Mike Enzi", state: "WY" },
                { candidate: "Doug Jones", state:"AL" },
                { candidate:  "Richard Shelby", state: "AL" }
            ],
            adminStatus: false,
            checked: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.addCandidate = this.addCandidate.bind(this);
        this.getAdminStatus = this.getAdminStatus.bind(this);
    }


    async getAdminStatus() {
        try{
            const {admins} = this.props.electionInstance;
            await window.web3.eth.getAccounts(async (err, [account]) => {
                let adminStatus = await admins(account);
                this.setState({adminStatus, checked: true})
            })
        } catch (error) {
            console.error(error);
        }
    }


    handleChange(evt){
        let parsed = JSON.parse(evt.target.value);
        this.setState({candidate: parsed.candidate, state: parsed.state})
    }

    async addCandidate(){
        try {
            if(this.state.candidate !== "" && this.state.state !== ""){
                const { addCandidate } = this.props.electionInstance;
                await window.web3.eth.getAccounts((err, [account]) => {
                    addCandidate(this.state.candidate, this.state.state, { from: account });
                });
            }
            else { throw 'Please pick a candidate and state' }
          } catch (err) {
            console.error(err);
          }
    }

    render(){
        return (
            !this.state.adminStatus ?
            ( <div>
                <button onClick={this.getAdminStatus}>Check Admin Status</button>
                {this.state.checked ? <p>Admin Access Denied</p> : null}
            </div> ) :
            ( <div>
                <form>
                    <select name="candidate" onChange={this.handleChange}>
                        {this.state.candidateList.map(candidate => (
                            <option value={JSON.stringify(candidate)}>{candidate.candidate} - {candidate.state}</option>
                        ))}
                    </select>
                </form>
                <button onClick={this.addCandidate}>Add Candidate</button>
            </div> )
        )
    }
}

export default HOC(AdminPage);
