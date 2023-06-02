import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './../../model/services/loginByUsername/loginByUsername';

describe('LoginForm', () => {
    test('render', () => {
        componentRender(<LoginForm onSuccess={() => null} />);
        expect(screen.getByTestId('loginform')).toBeInTheDocument();
    });

    test('type in input', () => {
        componentRender(<LoginForm onSuccess={() => null} />);
        const name = screen.getByTestId<HTMLInputElement>('name');
        const password = screen.getByTestId<HTMLInputElement>('password');
        userEvent.type(name, 'name');
        expect(name.value).toBe('name');
        userEvent.type(password, 'password');
        expect(password.value).toBe('password');
    });

    test('error fetching', async () => {
        componentRender(<LoginForm onSuccess={() => null} />);
        const name = screen.getByTestId<HTMLInputElement>('name');
        const password = screen.getByTestId<HTMLInputElement>('password');
        const btn = screen.getByTestId<HTMLButtonElement>('fetching_btn');

        userEvent.type(name, 'name');
        userEvent.type(password, 'password');
        userEvent.click(btn);
        const error = await screen.findByText('Incorrect username or password');
        expect(error).toBeInTheDocument();
    });

    test('success fetching', async () => {
        const userValue = { username: '123', id: '1' };
        const { unmount } = componentRender(<LoginForm onSuccess={() => null} />);

        const name = screen.getByTestId<HTMLInputElement>('name');
        const password = screen.getByTestId<HTMLInputElement>('password');
        const btn = screen.getByTestId<HTMLButtonElement>('fetching_btn');

        userEvent.type(name, 'name');
        userEvent.type(password, 'password');
        userEvent.click(btn);

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const result = await thunk.callThunk({ username: 'name', password: 'password' });
        if (result.meta.requestStatus === 'fulfilled') {
            unmount();
        }

        expect(screen.queryByTestId('loginform')).not.toBeInTheDocument();
    });
});