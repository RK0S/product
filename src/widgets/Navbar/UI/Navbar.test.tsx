import { screen } from '@testing-library/react';
import { Navbar } from './Navbar';
import userEvent from '@testing-library/user-event';

import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { StateSchema } from 'app/providers/StoreProvider';

describe('Navbar', () => {
    test('render', () => {
        componentRender(<Navbar />);
        expect(screen.getByTestId('navbar')).toBeInTheDocument();
    });

    test('not auth modal', () => {
        componentRender(<Navbar />);
        expect(screen.getByText('Log in')).toBeInTheDocument();
    });

    test('auth modal', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {}
            }
        };
        componentRender(<Navbar />, {initialState: state});

        expect(screen.getByText('Log out')).toBeInTheDocument();
    });
});