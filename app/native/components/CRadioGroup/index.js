import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native';

import Styles from './styles';

export default class CRadioGroup extends Component {
	render() {
		const { input } = this.props;

		let radioButtons = this.props.options.map( ( option, index ) => {
			let outerCircleStyles = [ Styles.radioCheckOuter ];
			let innerCircleStyles = [ Styles.radioCheckInner ];
			let radioLabelStyles = [ Styles.radioLabel ];

			if ( option.value == input.value ) {
				outerCircleStyles.push( Styles.radioCheckOuterSelected );
				innerCircleStyles.push( Styles.radioCheckInnerSelected );
				radioLabelStyles.push( Styles.radioLabelSelected );
			}

			return (
				<TouchableOpacity key={'option_' + index} activeOpacity={0.9}
					onPress={input.onChange.bind( undefined, option.value )}
					style={Styles.radioBtn}>
					<View style={Styles.radioLabelWrapper}>
						<Text numberOfLines={1} style={radioLabelStyles}>{option.label}</Text>
					</View>
					<View style={Styles.radioCheckWrapper}>
						<View style={outerCircleStyles}>
							<View style={innerCircleStyles} />
						</View>
					</View>
				</TouchableOpacity>
			);
		} );

		return (
			<View style={this.props.containerStyle}>
				{radioButtons}
			</View>
		);
	}
}