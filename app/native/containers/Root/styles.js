import React from 'react';
import {
	StyleSheet
} from 'react-native';

import CommonStyles from '../../resources/CommonStyles';

export default Styles = StyleSheet.create( Object.assign( {}, CommonStyles, {
	root: {
		flex: 1,
		backgroundColor: '#fff'
	},
	overlayContainer: {
		position: 'absolute',
		backgroundColor: '#fff'
	}
} ) );