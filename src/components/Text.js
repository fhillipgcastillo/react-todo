import React, { Component } from 'react';
import PropTypes from 'prop-types';

Text.propTypes = {
	text: PropTypes.string.isRequired,
	customStyles: PropTypes.object
};

Text.defualtProps = {
	customStyles: {}
};

export default function Text (props) {
  return (
	  <span className={`Text ${props.customClassName}`} style={props.customStyles || styles}>
	    {props.text}
	  </span>
  );
};

const styles = {
	fontSize: "1em",
	fontStyle: "normal"
};
