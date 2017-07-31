import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  active: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

const defaultProps = {
  children: 'Add content through children nodes',
};

const Modal = ({
  active,
  handleClose,
  children,
}) => (
  <div className={`modal ${active ? 'is-active' : ''}`}>
    <div className="modal-background" />
    <div className="modal-content">
      {children}
    </div>
    <button
      className="modal-close is-large"
      onClick={handleClose}
    />
  </div>
);

Modal.propTypes = propTypes;

Modal.defaultProps = defaultProps;

export default Modal;
