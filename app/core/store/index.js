import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

import reducer from '../reducers';

function getStore( initialState ) {
	const enhancer = compose(
		applyMiddleware(
			createLogger(),
		)
	);

	return createStore( reducer, initialState, enhancer );
}

const initialState = {
	overlayAction: "",
	members: []
};

export default getStore( initialState );