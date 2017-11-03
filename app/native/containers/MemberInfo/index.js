import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';

const _ = require( 'lodash' );

import { ActionCreators } from '../../../core/actions';

import MemberForm from '../../components/MemberForm';
import Styles from './styles';

class MemberInfo extends Component {
	constructor( props ) {
		super( props );
	}

	onClose() {
		this.props.toggleOverlay();
	}

	onSave( values ) {
		if ( this.props.action == "editMember" ) {
			this.props.updateMember( values );
		} else {
			this.props.addMember( values );
		}

		this.props.toggleOverlay();
	}

	onDelete() {
		this.props.deleteMember();
		this.props.toggleOverlay();
	}

	render() {
		let headerTitle = "Add team member";
		let headerSubText = "Set name, email, phone and role";
		let enableDelete = false;
		let initialValuesForForm = { isAdmin: false };
		if ( this.props.action == "editMember" ) {
			headerTitle = "Edit team member";
			headerSubText = "Edit name, email, phone and role";
			enableDelete = true;
			initialValuesForForm = this.props.memberToEdit;
		}

		return (
			<View style={[ Styles.flexOne, Styles.container ]}>
				<View style={Styles.headerSection}>
					<View style={Styles.iconWrapper}>
						<TouchableOpacity activeOpacity={0.9} onPress={this.onClose.bind( this )}>
							<Icon name={'ios-close-outline'} size={40} color={'#2196f3'} />
						</TouchableOpacity>
					</View>
					<Text style={[ Styles.text, Styles.headerTitle ]}>{headerTitle}</Text>
					<Text style={[ Styles.text ]}>{headerSubText}</Text>
				</View>

				<View style={[ Styles.flexOne, Styles.formContainer ]}>
					<MemberForm {...this.props}
						initialValues={initialValuesForForm}
						enableDelete={enableDelete}
						onDelete={this.onDelete.bind( this )}
						onSave={this.onSave.bind( this )} />
				</View>
			</View>
		);
	}
}

function mapDispatchToProps( dispatch ) {
	return bindActionCreators( ActionCreators, dispatch );
}

function mapStateToProps( state ) {
	return {
		members: state.members,
		memberToEdit: state.memberToEdit
	};
}

export default connect( mapStateToProps, mapDispatchToProps )( MemberInfo );