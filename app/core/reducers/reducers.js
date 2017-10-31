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
		return [ ...state, action.payload.member ];
	},
	[ types.DELETE_MEMBER ]( state, action ) {
		let members = [ ...state ];
		members = _.filter( members, { id: action.payload.id } );
		return members;
	}
} );

export const memberToEdit = createReducer( {}, {
	[ types.EDIT_MEMBER ]( state, action ) {
		return action.payload.memberId;
	}
} );