import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

type ActionCreatorType<Return, Arg, RejectedValue> = (
    arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

export const TestAsyncThunk = <Return, Arg, RejectedValue>(
    actionCreatorArg: ActionCreatorType<Return, Arg, RejectedValue>
) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispatch: jest.MockedFn<any> = jest.fn();
    const getState: () => StateSchema = jest.fn();

    const callThunk = async (arg: Arg) => {
        const actionCreator = actionCreatorArg(arg);
        const action = await actionCreator(dispatch, getState, undefined);
        return action;
    };

    return {
        dispatch,
        getState,
        actionCreatorArg,
        callThunk
    };
};
