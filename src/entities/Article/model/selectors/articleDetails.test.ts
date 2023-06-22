import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetails';

describe('getArticleDetailsData.test', () => {
    test('return data', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data: {
                    title: 'sdf'
                }
            }
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual({
            title: 'sdf'
        });
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });
});

describe('getArticleDetailsError.test', () => {
    test('return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error'
            }
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });
});

describe('getArticleDetailsIsLoading.test', () => {
    test('return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true
            }
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(undefined);
    });
});