import React, { PureComponent } from 'react';
import Modal from 'components/Modal';

class ExampleModal extends PureComponent {
  state = {
    active: false,
  };

  setActiveState = (active) => {
    this.setState({
      active,
    });
  };

  render() {
    const {
      active,
    } = this.state;

    return (
      <div>
        <button
          className="button is-primary"
          onClick={() => { this.setActiveState(true) }}
        >
          Open the example modal!
        </button>
        <Modal
          active={active}
          handleClose={() => { this.setActiveState(false) }}
        >
          <div className="box">
            This is an example modal! Hope you find it useful!
          </div>
        </Modal>
      </div>
    );
  }
}

export default ExampleModal;
