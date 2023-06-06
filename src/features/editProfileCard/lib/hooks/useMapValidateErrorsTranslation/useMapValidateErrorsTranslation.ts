import { ValidateProfileErrors } from 'entities/Profile';
import { useTranslation } from 'react-i18next';

export const useMapValidateErrorsTranslation = () => {
    const { t } = useTranslation('profile');

    return {
        [ValidateProfileErrors.INCORRECT_AGE]: t('Incorrect age value'),
        [ValidateProfileErrors.INCORRECT_LINK_FOR_AVATAR]: t('Invalid avatar link'),
        [ValidateProfileErrors.INCORRECT_NAME_CITY]: t('Incorrect name city'),
        [ValidateProfileErrors.INCORRECT_NAME_OR_SURNAME]: t('Incorrect name or surname'),
        [ValidateProfileErrors.INCORRECT_USERNAME]: t('Invalid username'),
        [ValidateProfileErrors.NO_DATA]: t('No data available'),
        [ValidateProfileErrors.SERVER_ERROR]: t('Server error'),
    };
};
