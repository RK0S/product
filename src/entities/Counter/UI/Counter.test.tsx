import { fireEvent, screen } from '@testing-library/react';
import { Counter } from './Counter';

import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Sidebar', () => {
    test('render', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        });
        expect(screen.getByTestId('counterValue')).toHaveTextContent('10');
    });

    test('increment', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        });
        expect(screen.getByTestId('counterValue')).toHaveTextContent('10');
        const btn = screen.getByTestId('inc-btn');
        fireEvent.click(btn);
        expect(screen.getByTestId('counterValue')).toHaveTextContent('11');
    });

    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        });
        expect(screen.getByTestId('counterValue')).toHaveTextContent('10');
        const btn = screen.getByTestId('dec-btn');
        fireEvent.click(btn);
        expect(screen.getByTestId('counterValue')).toHaveTextContent('9');
    });
});
