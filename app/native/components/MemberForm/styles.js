import React from 'react';
import {
	StyleSheet
} from 'react-native';

import CommonStyles from '../../resources/CommonStyles';

export default Styles = StyleSheet.create( Object.assign( {}, CommonStyles, {
	formSection: {
		marginTop: 20
	},
	sectionTitle: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	radioBtnWrapper: {
		height: 80,
		marginTop: 10
	},
	actionBtnWrapper: {
		paddingVertical: 20,
		flexDirection: 'row'
	},
	deleteActionBtnWrapper: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'center'
	},
	saveActionBtnWrapper: {
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'center'
	},
	saveActionBtn: {
		backgroundColor: '#2196f3'
	},
	deleteActionBtn: {
		backgroundColor: 'transparent'
	},
	saveActionBtnText: {
		color: 'rgba(255, 255, 255, 0.8)'
	},
	deleteActionBtnText: {
		color: 'red'
	}
} ) );