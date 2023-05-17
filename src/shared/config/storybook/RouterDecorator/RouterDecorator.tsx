import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line react/display-name
export const RouterDecorator = (story: () => Story) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);