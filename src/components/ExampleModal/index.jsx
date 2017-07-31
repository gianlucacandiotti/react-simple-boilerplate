import React, { PureComponent } from 'react';
import Modal from 'components/Modal';
import styles from './styles.scssm';

class ExampleModal extends PureComponent {
  state = {
    active: false,
  };

  render() {
    const {
      active,
    } = this.state;

    return (
      <div>
        <button
          className={styles.button}
          onClick={() => {
            this.setState({
              active: true,
            });
          }}
        >
          Open the example modal!
        </button>
        <Modal
          active={active}
          handleClose={() => {
            this.setState({
              active: false,
            });
          }}
        >
          <div className={styles.modalContent}>
            This is an example modal! Hope you find it useful!
          </div>
        </Modal>
      </div>
    );
  }
}

export default ExampleModal;
