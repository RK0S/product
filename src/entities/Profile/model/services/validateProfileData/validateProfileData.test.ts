import { validateProfileData } from './validateProfileData';
import { ValidateProfileErrors } from '../../types/profile';

const data = {
    avatar: 'https://i.ytimg.com/vi/fsvTC-PONB8/hqdefault.jpg',
    age: 19,
    city: 'Moscow',
    name: 'Kid',
    surname: 'VS cat',
    username: '<3 cat'
};

const longStr = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
describe('validateProfileData.test', () => {
    test('success validation', () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without name and surname', () => {
        const result = validateProfileData({...data, name: longStr, surname: longStr});

        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_NAME_OR_SURNAME
        ]);
    });

    test('incorrect age', () => {
        const result = validateProfileData({...data, age: 1211});

        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_AGE
        ]);
    });

    test('no data', () => {
        const result = validateProfileData();

        expect(result).toEqual([
            ValidateProfileErrors.NO_DATA
        ]);
    });
});
