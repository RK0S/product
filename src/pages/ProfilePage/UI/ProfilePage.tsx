import { fetchProfileData, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const initialReducers = {
    profile: profileReducer
};

const ProfilePage = () => {
    const { t } = useTranslation('profile');
    useDynamicModuleLoader(initialReducers, true);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <div>
            {t('Profile page')}
        </div>
    );
};

export default ProfilePage;