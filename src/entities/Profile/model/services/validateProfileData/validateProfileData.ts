import { Profile, ValidateProfileErrorsType, ValidateProfileErrors } from '../../types/profile';

export const validateProfileData = (profile?: Profile): ValidateProfileErrorsType[] => {
    if (!profile) {
        return [ValidateProfileErrors.NO_DATA];
    }

    const { age, avatar, city, name, surname, username } = profile;
    const errors: ValidateProfileErrorsType[] = [];

    if (name && name.length > 15 || surname && surname.length > 20) {
        errors.push(ValidateProfileErrors.INCORRECT_NAME_OR_SURNAME);
    }

    if (age && age > 150) {
        errors.push(ValidateProfileErrors.INCORRECT_AGE);
    }

    if (city && city.length > 30) {
        errors.push(ValidateProfileErrors.INCORRECT_NAME_CITY);
    }

    if (!avatar) {
        errors.push(ValidateProfileErrors.INCORRECT_LINK_FOR_AVATAR);
    }

    if (username && username.length > 20) {
        errors.push(ValidateProfileErrors.INCORRECT_USERNAME);
    }

    return errors;
};
