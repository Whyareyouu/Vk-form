import React from 'react';
import { FormDispatchContext } from '../ui/context/context';

function useFormDispatch() {
	const context = React.useContext(FormDispatchContext);
	if (context === undefined) {
		throw new Error(
			'useCountDispatch must be used within a FormDispatchProvider'
		);
	}
	return context;
}

export { useFormDispatch };
