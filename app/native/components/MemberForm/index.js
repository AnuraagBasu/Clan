import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity
} from 'react-native';
import { reduxForm, Field } from 'redux-form';

import CTextInput from '../CTextInput';
import CRadioGroup from '../CRadioGroup';

import Styles from './styles';

class MemberForm extends Component {
	_phoneNumberFormatter( number ) {
		if ( !number ) {
			return "";
		}

		const splitter = /.{1,3}/g;
		number = number.substring( 0, 10 );
		return number.substring( 0, 7 ).match( splitter ).join( '-' ) + number.substring( 7 );
	};

	_phoneNumberParser( number ) {
		return number ? number.replace( /-/g, '' ) : '';
	}

	render() {
		const { handleSubmit } = this.props;
		const radioLabels = [ {
			label: "Regular - Can't delete members",
			value: false
		},
		{
			label: "Admin - Can delete members",
			value: true
		}];

		console.log( "props of form are: " + JSON.stringify( this.props ) );

		let deleteActionBtnWrapper;
		if ( this.props.enableDelete ) {
			deleteActionBtnWrapper = (
				<View style={Styles.deleteActionBtnWrapper}>
					<TouchableOpacity activeOpacity={0.9} onPress={this.props.onDelete}
						style={[ Styles.allCenter, Styles.actionBtn, Styles.deleteActionBtn ]}>
						<Text style={[ Styles.text, Styles.deleteActionBtnText ]}>Delete</Text>
					</TouchableOpacity>
				</View>
			);
		}

		return (
			<View style={Styles.flexOne}>
				<View style={Styles.formSection}>
					<Text style={[ Styles.text, Styles.sectionTitle ]}>Info</Text>

					<Field name="firstName" component={CTextInput}
						placeholder={'First name'} placeholderTextColor={'#777'} />
					<Field name="lastName" component={CTextInput}
						placeholder={'Last name'} placeholderTextColor={'#777'} />
					<Field name="email" component={CTextInput}
						placeholder={'Email'} placeholderTextColor={'#777'} />
					<Field name="phone" component={CTextInput}
						placeholder={'Phone'} placeholderTextColor={'#777'}
						format={this._phoneNumberFormatter.bind( this )}
						parse={this._phoneNumberParser.bind( this )} />
				</View>

				<View style={Styles.formSection}>
					<Text style={[ Styles.text, Styles.sectionTitle ]}>Role</Text>

					<Field name="isAdmin" component={CRadioGroup}
						options={radioLabels}
						containerStyle={Styles.radioBtnWrapper} />
				</View>


				<View style={Styles.actionBtnWrapper}>
					{deleteActionBtnWrapper}

					<View style={Styles.saveActionBtnWrapper}>
						<TouchableOpacity activeOpacity={0.9} onPress={handleSubmit( this.props.onSave )}
							style={[ Styles.allCenter, Styles.actionBtn, Styles.saveActionBtn ]}>
							<Text style={[ Styles.text, Styles.saveActionBtnText ]}>Save</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}

export default reduxForm( {
	form: 'memberInfo',
	validate: ( values ) => {
		const errors = {};
		errors.firstName = !values.firstName ? 'First name is required' : undefined;
		errors.email = !values.email ? 'Email is required' : undefined;
		errors.phone = !values.email ? 'Phone is required' : undefined;

		return errors;
	}
} )( MemberForm );