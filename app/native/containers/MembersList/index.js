import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';

const _ = require( 'lodash' );

import { ActionCreators } from '../../../core/actions';

import Styles from './styles';

class MembersList extends Component {
	constructor( props ) {
		super( props );
	}

	onAddMemberClick() {
		this.props.toggleOverlay( 'addMember' );
	}

	onMemberClick( memberId ) {
		let memberToEdit = _.find( this.props.members, { id: memberId } );
		this.props.editMember( memberToEdit );
		this.props.toggleOverlay( 'editMember' );
	}

	_getMembers() {
		return this.props.members.map( ( member, index ) => {
			let memberName = member.firstName;
			if ( member.lastName ) {
				memberName += " " + member.lastName;
			}

			if ( member.isAdmin ) {
				memberName += " (admin)";
			}

			return (
				<TouchableOpacity key={'member_' + index} activeOpacity={0.9} onPress={this.onMemberClick.bind( this, member.id )}
					style={Styles.memberContainer}>
					<View style={Styles.memberPhotoWrapper}>
						<Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_G3a2C27gIrVA3JtDoMfmdTycsiKj7kMHrdhovYRfkxT6a9fkAw' }} style={Styles.image} />
					</View>

					<View style={Styles.memberInfoWrapper}>
						<Text style={[ Styles.text, Styles.memberInfoNameText ]}>{memberName}</Text>
						<Text style={[ Styles.text, Styles.memberInfoOtherText ]}>{member.phone}</Text>
						<Text style={[ Styles.text, Styles.memberInfoOtherText ]}>{member.email}</Text>
					</View>
				</TouchableOpacity>
			)
		} );
	}

	render() {
		let subText = "You have " + this.props.members.length;
		if ( this.props.members.length == 1 ) {
			subText += " team member";
		} else {
			subText += " team members";
		}

		return (
			<View style={[ Styles.flexOne, Styles.container ]}>
				<View style={Styles.headerSection}>
					<View style={Styles.iconWrapper}>
						<TouchableOpacity activeOpacity={0.9} onPress={this.onAddMemberClick.bind( this )}>
							<Icon name={'ios-add-outline'} size={40} color={'#2196f3'} />
						</TouchableOpacity>
					</View>
					<Text style={[ Styles.text, Styles.headerTitle ]}>Team Members</Text>
					<Text style={[ Styles.text ]}>{subText}</Text>
				</View>

				<ScrollView showsVerticalScrollIndicator={false}>
					{this._getMembers()}
				</ScrollView>
			</View>
		);
	}
}

function mapDispatchToProps( dispatch ) {
	return bindActionCreators( ActionCreators, dispatch );
}

function mapStateToProps( state ) {
	return {
		members: state.members
	}
}

export default connect( mapStateToProps, mapDispatchToProps )( MembersList );