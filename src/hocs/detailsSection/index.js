import React, { Component } from 'react';

export default function detailsSection(WrappedComponent) {
  return class extends Component {
    static contextTypes = {
    };

    static displayName = `DetailsSection(${WrappedComponent.name})`;

    shouldComponentUpdate(nextProps, nextState, nextContext) {
      return Number.isInteger(nextProps.overallIndex) && (nextProps.overallIndex > -1) && (this.props.overallIndex !== nextProps.overallIndex);
    }

    render() {

      return (
        <WrappedComponent {...this.props} />
      );
    }
  };
}
