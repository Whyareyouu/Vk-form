import React from 'react';
import { TAction, TState } from '../../types/types';
import { reducer } from '../reducer/reducer';

export const FormStateContext = React.createContext<TState | undefined>(
	undefined
);
export const FormDispatchContext = React.createContext<
	React.Dispatch<TAction> | undefined
>(undefined);

type FormProviderProps = {
	children: React.ReactNode;
};
export const initialState: TState = {
	tower: '',
	floor: '',
	meetingroom: '',
	date: {
		startTime: '',
		endTime: '',
		date: '',
	},
	comment: '',
};

function FormProvider({ children }: FormProviderProps): JSX.Element {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	return (
		<FormStateContext.Provider value={state}>
			<FormDispatchContext.Provider value={dispatch}>
				{children}
			</FormDispatchContext.Provider>
		</FormStateContext.Provider>
	);
}

export default FormProvider;
