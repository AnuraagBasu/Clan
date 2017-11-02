import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Animatable from 'react-native-animatable';
import { ActionCreators } from '../../../core/actions';

import MembersList from '../MembersList';
import MemberInfo from '../MemberInfo';
import MemberForm from '../../components/MemberForm';

import Styles from './styles';

class Root extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		const { height, width } = Dimensions.get( 'window' );

		let overlayView;
		if ( this.props.overlayAction ) {
			let animation = "fadeIn";
			if ( this.props.overlayAction == "editMember" ) {
				animation = {
					0: {
						opacity: 0,
						scale: 0
					},
					1: {
						opacity: 1,
						scale: 1
					}
				};
			}

			overlayView = (
				<Animatable.View animation={animation} duration={200} style={{ position: 'absolute', backgroundColor: '#fff', width: width, height: height }}>
					<MemberInfo action={this.props.overlayAction} />
				</Animatable.View>
			);
		}

		return (
			<View style={Styles.flexOne}>
				<MembersList />

				{overlayView}
			</View>
		);
	}
}

function mapDispatchToProps( dispatch ) {
	return bindActionCreators( ActionCreators, dispatch );
}

function mapStateToProps( state ) {
	return {
		overlayAction: state.overlayAction
	};
}

export default connect( mapStateToProps, mapDispatchToProps )( Root );