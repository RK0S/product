import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import i18n from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export const componentRender = (component: ReactNode, options: componentRenderOptions = {}) => {
    const { route = '/', initialState } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
};
