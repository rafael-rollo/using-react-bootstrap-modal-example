import React, { Component, PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class MyModal extends Component {

    render() {
        return (
            <div className="static-modal">
                <Modal show={this.props.visible}>
                    <Modal.Header>
                        <Modal.Title>{this.props.modalTitle}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {this.props.children}
                    </Modal.Body>

                    <Modal.Footer>
                        {/** Exemplo de alguma lógica de renderização condicional (dada a presença de uma props, renderiza de uma forma)*/}
                        {this.props.titleConfirm ? 
                            <div>
                                <Button data-modal={this.props.modal} onClick={this.props.closeCallback}>Close</Button>
                                <Button data-modal={this.props.modal} onClick={this.props.confirmCallback} bsStyle="primary">{this.props.titleConfirm}</Button>
                            </div> 
                            :
                            <div>
                                <Button data-modal={this.props.modal} onClick={this.props.closeCallback}>Ok</Button>
                            </div>
                        }
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
