import React from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import HOC from "./HOC";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <div>
        <h3>All Candidates</h3>
        <p>Explore news sources about each candidate</p>
        {/* <div className="container">
          <div className="row justify-content-center"> */}
        <div id="accordion">
          {this.props.candidates.map((candidate, index) => (
            <div className="card">
              <div className="card-header" id={`heading${index}`}>
                <h5 className="mb-0">
                  <button
                    className="btn btn-link"
                    data-toggle="collapse"
                    data-target={`#collapse${index}`}
                    aria-expanded="false"
                    aria-controls={`collapse${index}`}
                  >
                    {candidate[1]}
                  </button>
                </h5>
              </div>
              <div
                id={`collapse${index}`}
                className="collapse hide"
                aria-labelledby={`heading${index}`}
              >
                <div className="card-body">
                  Current Vote Count: {candidate[2].toString()}
                </div>
              </div>
              {/* <h3 className="card-title">{candidate[1]}</h3>
                  <p className="card-title">
                    Current Vote Count: {candidate[2].toString()}
                  </p>
                  <div className="card-footer text-muted">Duel 1804</div> */}
            </div>
          ))}
        </div>
        {/* </div>
        </div> */}
        <a
          className="btn btn-primary btn-lg"
          role="button"
          href="/vote"
          // onClick={() => this.toggle}
        >
          {/* <Link to="/vote">Vote!</Link> */}
          Go to Ballot!
        </a>
        <div>
          <Button color="danger" onClick={this.toggle}>
            Wait a second!
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader
              toggle={this.toggle}
              className="col-12 modal-title text-center"
            >
              <strong>*** VOTER FRAUD ALERT ***</strong>{" "}
            </ModalHeader>
            <ModalBody>
              ⚠️{" "}
              <strong>
                WARNING!!! VOTER FRAUD ALERT!!! YOU HAVE ALREADY VOTED...DON'T
                EVEN THINK ABOUT IT!!!!!!!!!!!!!!!!!!!!!!!!
              </strong>{" "}
              ⚠️
              <img src="https://lishacauthen.files.wordpress.com/2013/04/dog_shaking_finger.gif" />
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}

export default HOC(Info);
