import { Story } from '@storybook/react';
import { ThemeType } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: ThemeType) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);