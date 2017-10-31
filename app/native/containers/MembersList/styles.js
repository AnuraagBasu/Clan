import React from 'react';
import {
	StyleSheet
} from 'react-native';

import CommonStyles from '../../resources/CommonStyles';

export default Styles = StyleSheet.create( Object.assign( {}, CommonStyles, {
	memberContainer: {
		paddingVertical: 15,
		borderTopColor: '#ccc',
		borderTopWidth: 1,
		flexDirection: 'row'
	},
	memberPhotoWrapper: {
		width: 40,
		height: 40,
		borderRadius: 20
	},
	memberInfoWrapper: {
		marginLeft: 8
	},
	memberInfoNameText: {
		fontWeight: 'bold',
		color: '#aaa'
	},
	memberInfoOtherText: {
		marginTop: 4
	},
	iconWrapper: {
		alignItems: 'flex-end'
	}
} ) );