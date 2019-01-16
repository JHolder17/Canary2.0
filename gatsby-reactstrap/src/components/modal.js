import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class ModalExample extends React.Component {
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
                <img src={this.props.pic} alt="" onClick={this.toggle}></img>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalBody>{this.props.link}</ModalBody>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;