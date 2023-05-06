import React from 'react';
import { FormStateContext } from '../ui/context/context';

function useFormState() {
	const context = React.useContext(FormStateContext);
	if (context === undefined) {
		throw new Error(
			'useCountDispatch must be used within a FormDispatchProvider'
		);
	}
	return context;
}

export { useFormState };
