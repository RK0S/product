import { render, screen } from '@testing-library/react';
import { AppButton } from './AppButton';

describe('AppButton', () => {
    test('render', () => {
        render(<AppButton>Test</AppButton>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('add theme', () => {
        render(<AppButton theme={'outlined'}>Test</AppButton>);
        expect(screen.getByText('Test')).toHaveClass('outlined');
        screen.debug();
    });
});