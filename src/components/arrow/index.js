import React from 'react';
import arrow from './../../hocs/arrow';
import MaterialIcon from 'material-icons-react';

const Arrow = ({ ...props }) => {

  const SHIFT_INCREMENTS = {
    right: 1,
    left: -1
  };

  const incrementIndex = (increment) => {
    props.onChange(increment);
  };

  const increment = SHIFT_INCREMENTS[props.direction] || SHIFT_INCREMENTS.right;

  return (
    <div className={`arrow ${props.direction}`} onClick={() => incrementIndex(increment)} >
      <MaterialIcon icon={`keyboard_arrow_${props.direction}`} invert />
    </div>
  );
};

Arrow.contextTypes = {
};

export default arrow(Arrow);
