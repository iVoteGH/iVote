import React from "react";
import HOC from "./HOC";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

class ModalWarning extends React.Component {
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
    );
  }
}
export default HOC(ModalWarning);
