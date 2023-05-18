import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';

import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Sidebar', () => {
    test('render', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle', () => {
        componentRender(<Sidebar />);
        const btn = screen.getByTestId('sidebar_btn');
        fireEvent.click(btn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        fireEvent.click(btn);
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});