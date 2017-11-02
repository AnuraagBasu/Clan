import React from 'react';
import {
	StyleSheet
} from 'react-native';

import CommonStyles from '../../resources/CommonStyles';

export default Styles = StyleSheet.create( Object.assign( {}, CommonStyles, {
	radioBtn: {
		flex: 1,
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: '#ccc'
	},
	radioLabelWrapper: {
		flex: 3,
		alignItems: 'flex-start',
		justifyContent: 'center'
	},
	radioLabelSelected: {
		fontWeight: 'bold',
		color: 'rgba(0, 0, 0, 0.5)'
	},
	radioCheckWrapper: {
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'center'
	},
	radioCheckOuter: {
		borderWidth: 1,
		borderColor: '#ccc',
		width: 16,
		height: 16,
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center'
	},
	radioCheckOuterSelected: {
		borderColor: '#2196f3'
	},
	radioCheckInner: {
		width: 8,
		height: 8,
		borderRadius: 4
	},
	radioCheckInnerSelected: {
		backgroundColor: '#2196f3'
	},
} ) );