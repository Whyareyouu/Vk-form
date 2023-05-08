import React from 'react';
import { FormStateContext } from '../ui/context/context';

function useFormState() {
	const context = React.useContext(FormStateContext);
	if (context === undefined) {
		throw new Error('useCountState must be used within a CountProvider');
	}
	return context;
}

export { useFormState };
