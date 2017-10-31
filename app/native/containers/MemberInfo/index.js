import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';

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

	onAddMember( values ) {
		this.props.addMember( values );
	}

	render() {
		let headerTitle = "Add team member";
		let headerSubText = "Set name, email, phone and role";
		if ( this.props.action == "editMember" ) {
			headerTitle = "Edit team member";
			headerSubText = "Edit name, email, phone and role";
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
						enableDelete={true} initialValues={{ isAdmin: false }}
						onSave={this.onAddMember.bind( this )} />
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

	};
}

export default connect( mapStateToProps, mapDispatchToProps )( MemberInfo );