/*
	NOTES: please move this into a folder with Text as a secundary Text Component
				 rename this to be only Text, which use a secundary text functional component
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
/*local Components*/
import Text from "./Text";

export default class TextTitle extends Component {
	render(){
		let _component;
		switch(this.props.type){
			case "main":
			case "title":
			case "h1":
				_component = (<h1 className="text-title" style={styles.textTitle}>{this.props.text}</h1>);
				break;
			case "subtitle":
			case "h2":
				_component = (<h2 className="text-title" style={styles.textSubtitle}>{this.props.text}</h2>);
				break;
			default:
				_component = (<Text customClassName={`text-title ${this.props.customClassName}`} text={this.props.text} />);
				break;
		};
		return _component;
		// return (
		// 	<span className="text-title item-title" style={styles.textTitle}>{this.props.text}>
		// 	</span>
		// );
	}
};

TextTitle.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string, 
	customClassName: PropTypes.string,
};

TextTitle.defaultProps = {
	text: "",
	type: "text",/*text => span; main/title/h1 => h1; subtitle => h2*/
	customClassName: ""
};

const styles = {
	textTitle: {
		fontSize: "1.5em",
		fontStyle: "bold"
	},
	textSubtitle: {
		fontSize: "1.17em",
		fontStyle: "bold"
	}

};