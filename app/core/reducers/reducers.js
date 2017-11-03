const _ = require( 'lodash' );

import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const overlayAction = createReducer( {}, {
	[ types.TOGGLE_OVERLAY ]( state, action ) {
		return action.payload.overlayAction;
	}
} );

export const members = createReducer( {}, {
	[ types.ADD_MEMBER ]( state, action ) {
		let members = [ ...state ];
		members.push( action.payload.member );
		members = _.sortBy( members, [ "firstName", "lastName" ] );

		return members;
	},
	[ types.DELETE_MEMBER ]( state, action ) {
		let members = [ ...state ];
		members = _.filter( members, { id: action.payload.id } );
		return members;
	},
	[ types.UPDATE_MEMBER ]( state, action ) {
		let updatedMember = action.payload.updatedMember;
		let members = [ ...state ];
		_.remove( members, { id: action.payload.updatedMember.id } );
		members.push( updatedMember );
		members = _.sortBy( members, [ "firstName", "lastName" ] );

		return members;
	}
} );

export const memberToEdit = createReducer( {}, {
	[ types.EDIT_MEMBER ]( state, action ) {
		return action.payload.member;
	}
} );