/* eslint-disable @typescript-eslint/no-explicit-any */
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';

type ActionCreatorType<Return, Arg, T> = (
    arg: Arg
) => AsyncThunkAction<Return, Arg, ThunkConfig<T>>;

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Return, Arg, T> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreatorArg: ActionCreatorType<Return, Arg, T>;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    navigate: jest.MockedFn<any>;

    constructor(
        actionCreatorArg: ActionCreatorType<Return, Arg, T>,
        state?: DeepPartial<StateSchema>
    ) {
        this.actionCreatorArg = actionCreatorArg;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);

        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunk(arg: Arg) {
        const actionCreator = this.actionCreatorArg(arg);
        const action = await actionCreator(this.dispatch, this.getState, {
            api: this.api,
            navigate: this.navigate
        });

        return action;
    }
}
