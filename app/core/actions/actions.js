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
	//TODO: should be changed
	member.id = new Date().getTime();

	return {
		type: types.ADD_MEMBER,
		payload: {
			member
		}
	};
}

export function editMember( member ) {
	return {
		type: types.EDIT_MEMBER,
		payload: {
			member
		}
	};
}

export function updateMember( updatedMember ) {
	return {
		type: types.UPDATE_MEMBER,
		payload: {
			updatedMember
		}
	};
}

export function deleteMember( memberIdToDelete ) {
	return {
		type: types.DELETE_MEMBER,
		payload: {
			id: memberIdToDelete
		}
	};
}