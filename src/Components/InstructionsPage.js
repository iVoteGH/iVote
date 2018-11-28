import React from 'react'
import { Link } from 'react-router-dom'

const InstructionsPage = () => { 
    return ( 

        <div className="container-fluid">
            <div className="card-group">
                <div className="card text-white bg-secondary" style={{width: 22 + 'rem', height: 25 + 'rem', margin: 2.5 + 'px'}}>
                    <p><strong>STEP 1</strong></p>
                    <div className="card-text">
                        <p>Log into your MetaMask account in order to access your Ethereum blockchain wallet</p>
                    </div> 
                    <img src="step1.gif" height="250px" width="150px" className="center"/>
                </div>
                <div className="card text-white bg-secondary" style={{width: 22 + 'rem', height: 25 + 'rem', margin: 2.5 + 'px'}}>
                    <p><strong>STEP 2 </strong></p>
                    <div className="card-text">
                        <p>Navigate to the Candidates page</p>
                    </div>
                    <img src="step2.gif" height="250px" width="200px" className="center"/>
                </div>  
                <div className="card text-white bg-secondary" style={{width: 22 + 'rem', height: 25 + 'rem', margin: 2.5 + 'px'}}>
                    <p><strong>STEP 3</strong></p>
                    <div className="card-text">
                        <p>Click on each candidate to learn more about their voting record and recent press</p>
                    </div>
                    <img src="step3.gif" height="250px" width="300px" className="center"/>
                </div>
            </div>
        
            <div className="card-group">
                <div className="card text-white bg-secondary" style={{width: 22 + 'rem', height: 25 + 'rem', margin: 2.5 + 'px'}}>
                    <p><strong>STEP 4</strong></p>
                    <div className="card-text">
                        <p>When you are ready to vote, click the "Go To Ballot" button</p>
                    </div>
                    <img src="step4.gif" className="center" width="300px"/>
                </div>
                <div className="card text-white bg-secondary" style={{width: 22 + 'rem', height: 25 + 'rem', margin: 2.5 + 'px'}}>
                    <p><strong>STEP 5</strong></p>
                    <div className="card-text">
                        <p>On the ballot page, first select the candidate you wish to vote for, and then click the "Vote For" button</p>
                    </div>
                    <img src="step5.gif" className="center" width="300px"/>
                </div>
                <div className="card text-white bg-secondary" style={{width: 22 + 'rem', height: 25 + 'rem', margin: 2.5 + 'px'}}>
                    <p><strong>STEP 6</strong></p>
                    <p>Don't forget to submit your vote with MetaMask! Make sure you click SUBMIT on the transaction to have your vote recorded</p>
                    <img src="step6.gif" height="250px" width="150px" className="center"/>
                </div>
            </div>
            <div className="card-group">
                <div className="card text-white bg-secondary" style={{width: 22 + 'rem', height: 25 + 'rem', margin: 2.5 + 'px'}}>
                    <p><strong>STEP 7</strong></p>
                    <div className="card-text">
                        <p>You should get a success pop-up when the transaction has been approved</p>
                    </div>
                    <img src="step7.gif" className="center" width="300px"/>
                </div>
                <div className="card text-white bg-secondary" style={{width: 22 + 'rem', height: 25 + 'rem', margin: 2.5 + 'px'}}>
                    <p><strong>STEP 8</strong></p>
                    <div className="card-text">
                        <p>Navigate to the results page to see the most recent results!</p>
                    </div>
                    <img src="step8.gif" className="center"/>
                </div>
                <div className="card text-white bg-secondary" style={{width: 22 + 'rem', height: 25 + 'rem', margin: 2.5 + 'px'}}>
                    <p><strong>GO MEET THE CANDIDATES</strong></p>
                    <div className="card-text">
                        <p>Click below to</p><p> Get Started and Meet the Candidates!</p>
                    </div>
                    <Link to="/info">
                    <button type="button" className="btn btn-navy btn-sm" style={{color: "white"}}>🇺🇸 Click Here to Meet the Candidates🇺🇸</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default InstructionsPage; 