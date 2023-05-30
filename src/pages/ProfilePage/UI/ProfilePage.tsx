import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';

const initialReducers = {
    profile: profileReducer
};

const ProfilePage = () => {
    const { t } = useTranslation('profile');
    useDynamicModuleLoader(initialReducers, true);

    return (
        <div>
            {t('Profile page')}
        </div>
    );
};

export default ProfilePage;