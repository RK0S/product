import { render, screen } from '@testing-library/react';
import { AppButton, ThemeButton } from './AppButton';

describe('AppButton', () => {
    test('render', () => {
        render(<AppButton>Test</AppButton>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('add theme', () => {
        render(<AppButton theme={ThemeButton.CLEAR}>Test</AppButton>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});