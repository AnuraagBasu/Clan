import React from 'react';
import {
	StyleSheet
} from 'react-native';

import CommonStyles from '../../resources/CommonStyles';

export default Styles = StyleSheet.create( Object.assign( {}, CommonStyles, {
	formContainer: {
		borderTopWidth: 1,
		borderTopColor: '#ccc'
	},
	iconWrapper: {
		alignItems: 'flex-end'
	}
} ) );