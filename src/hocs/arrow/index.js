import React, { Component } from 'react';

export default function arrow(WrappedComponent) {
  return class extends Component {
    static contextTypes = {
    };

    static displayName = `Arrow(${WrappedComponent.name})`;

    shouldComponentUpdate(nextProps, nextState, nextContext) {
      return true;
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  };
}
