import React from 'react';
// import PropTypes from 'prop-types';
import detailsSection from './../../hocs/detailsSection';

const DetailsSection = ({ ...props }) => {

  return (
    <div className="detailsSection">
      <h1 className="detailsHeading">{props.properties.name}</h1>
      <hr/>
      <h3>Released: {props.properties.release}</h3>
    </div>
  );
};

DetailsSection.contextTypes = {
};

export default detailsSection(DetailsSection);
