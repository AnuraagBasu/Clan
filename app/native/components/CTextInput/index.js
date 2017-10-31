import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput
} from 'react-native';

import Styles from './styles';

export default class CTextInput extends Component {
	render() {
		const { input, ...inputProps } = this.props;

		console.log( "props of text are: " + JSON.stringify( this.props ) );
		let textInputStyles = [ Styles.inputBox ];

		if ( this.props.meta.active ) {
			textInputStyles.push( Styles.inputBoxActive );
		}

		if ( this.props.meta.submitFailed && !this.props.meta.valid ) {
			textInputStyles.push( Styles.inputBoxInvalid );
		}

		return (
			<TextInput
				value={input.value}
				{...inputProps}
				onChangeText={input.onChange}
				onFocus={input.onFocus}
				style={textInputStyles}
			/>
		);
	}
}