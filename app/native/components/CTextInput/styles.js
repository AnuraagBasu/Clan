import React from 'react';
import {
	StyleSheet
} from 'react-native';

import CommonStyles from '../../resources/CommonStyles';

export default Styles = StyleSheet.create( Object.assign( {}, CommonStyles, {
	inputBox: {
		borderWidth: 1,
		borderColor: '#eee',
		paddingHorizontal: 10,
		paddingVertical: 5,
		marginTop: 10,
		fontSize: 14
	},
	inputBoxActive: {
		borderColor: '#ccc'
	},
	inputBoxInvalid: {
		borderColor: '#ef5350'
	}
} ) );