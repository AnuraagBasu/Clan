import * as types from './types';

export function toggleOverlay( overlayAction = "" ) {
	return {
		type: types.TOGGLE_OVERLAY,
		payload: {
			overlayAction
		}
	};
}

export function addMember( member ) {
	return {
		type: types.ADD_MEMBER,
		payload: {
			member
		}
	};
}

export function editMember( memberId ) {
	return {
		type: types.EDIT_MEMBER,
		payload: {
			memberId
		}
	};
}