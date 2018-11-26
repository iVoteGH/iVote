import React, { Component } from 'react'; 
import HOC from './HOC'

class AdminPage extends Component { 
    constructor() { 
        super(); 
        this.state = { 
            admin: false,
            candidate: "", 
            state: "", 
            candidateList: [
                "",
                "Mark Warner", 
                "Tim Kaine", 
                "Chris Van Hollen", 
                "Ben Cardin", 
                "Dianne Feinstein", 
                "Kamala D. Harris", 
                "Tina Smith", 
                "Amy Klobuchar", 
                "Ted Cruz", 
                "John Cornyn", 
                "Mitch McConnell", 
                "Rand Paul", 
                "Jeff Flake", 
                "Jon Kyl", 
                "Shelley Moore Capito", 
                "Joe Manchin III", 
                "Tom Carper", 
                "David Perdue", 
                "Johnny Isakson", 
                "Elizabeth Warren", 
                "Ed Markey", 
                "Micheal Bennet", 
                "Cory Gardner", 
                "Dean Heller", 
                "Catherine Cortez Masto", 
                "Tom Udall", 
                "Martin Heinrich", 
                "Lamar Alexander", 
                "Bob Corker", 
                "Ricard Burr", 
                "Thom Tillis", 
                "Maggie Hassan", 
                "Jeanne Shaheen", 
                "Susan Collins", 
                "Angus King", 
                "Bill Nelson", 
                "Marco Rubio", 
                "John Thune", 
                "Mike Rounds", 
                "Jack Reed", 
                "Sheldon Whitehouse", 
                "Bob Menendez", 
                "Cory Booker", 
                "Lindsey Graham", 
                "Tim Scott", 
                "Brian E. Schatz", 
                "Mazie K. Hirono", 
                "Daniel S. Sullivan", 
                "Lisa Murkowski", 
                "Jim Inhofe", 
                "James Lankford", 
                "Ben Sasse", 
                "Deb Fischer", 
                "Christopher S. Murphy", 
                "Richard Blumenthal", 
                "Roger Wicker", 
                "Cindy Hyde-Smith", 
                "Claire McCaskill", 
                "Roy Blunt", 
                "Pat Toomey", 
                "Bob Casey Jr.", 
                "Orrin Hatch", 
                "Mike Lee", 
                "Pat Roberts", 
                "Jerry Moran", 
                "Gary Peters", 
                "Debbie Stabenow", 
                "Doug Jones", 
                "Richard Shelby", 
                "Todd C. Young", 
                "Joe Donnelly", 
                "Chuck Grassley", 
                "Joni Ernst", 
                "John Barrasso", 
                "Mike Enzi", 
                "Mike Crapo", 
                "Jim Risch", 
                "Bill Cassidy", 
                "John Neely Kennedy", 
                "Steve Daines", 
                "Jon Tester", 
                "Tammy Duckworth", 
                "Dick Durbin", 
                "Maria Cantwell", 
                "Patty Murray", 
                "Jeff Merkley", 
                "Ron Wyden", 
                "Ronald Harold Johnson", 
                "Tammy Baldwin", 
                "Charles Schumer", 
                "Kirsten Gillibrand", 
                "Tom Cotton", 
                "John Boozman", 
                "Rob Portman", 
                "Sherrod Brown", 
                "Heidi Heitkamp", 
                "John Hoeven", 
                "Bernie Sanders", 
                "Patrick Leahy"
            ], 
            stateList: [
                "", "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"   
            ]
        }
        this.handleChange = this.handleChange.bind(this); 
        this.addCandidate = this.addCandidate.bind(this); 
        this.adminBooly = this.adminBooly.bind(this); 
    }


    handleChange(evt){ 
        this.setState({[evt.target.name]: evt.target.value})    
    }

    async addCandidate(){ 
        try {
            if(this.state.candidate !== "" && this.state.state !== ""){ 
                const { addCandidate } = this.props.electionInstance;
                await window.web3.eth.getAccounts((err, [account]) => {
                    addCandidate(this.state.candidate, this.state.state, { from: account });
                });
            }
            else { 
                throw 'Please pick a candidate and state'
            }
            
          } catch (err) {
            console.error(err);
          }

    }

    render(){ 
        return ( 
            // this.state.admin ? (
                <div>
                <form>
                    <select name="candidate" onChange={this.handleChange}>
                        {this.state.candidateList.map(candidate => ( 
                            <option value={candidate}>{candidate}</option>
                        ))}
                    </select>
                    <select name="state" onChange={this.handleChange}>
                        {this.state.stateList.map(state => ( 
                            <option value={state}>{state}</option>
                        ))}
                    </select>
                </form>
                <button onClick={this.addCandidate}>Add Candidate</button>
                
            </div>
            // ) : 
            // (<button onClick={this.adminBooly}>Admin Booly</button>)
            
        )
    }


}

export default HOC(AdminPage); 
