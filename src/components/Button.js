import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
	render(){
		return (
			<div className={`btn ${this.props.type} ${this.props.indentifier}`}>
        <span className="btn-text" title="Add New"> {this.props.text} </span>
      </div>
		);
	}
};

Button.propTypes = {
	text: PropTypes.string,
	type: PropTypes.string,
	indentifier: PropTypes.string,
	title: PropTypes.string,
	icon: PropTypes.string,
};

Button.defaultProps = {
	text: "",
	type: "btn-default",
	indentifier: "",/*class to identify the individual/grouped component*/
	/*maybe later add or devide by classIdentifier or id*/
	title: "",
	icon: "", /*will be use later to add some icon when implement bootstrap css*/
};