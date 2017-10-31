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
	}
} );

export const memberToEdit = createReducer( {}, {
	[ types.EDIT_MEMBER ]( state, action ) {
		return action.payload.memberId;
	}
} );