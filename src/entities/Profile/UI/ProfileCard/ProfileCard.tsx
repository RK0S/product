import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useSelector } from 'react-redux';
import { getProfileData } from './../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from './../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from './../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { Text } from 'shared/UI/Text/Text';
import { useTranslation } from 'react-i18next';
import { AppInput } from 'shared/UI/AppInput/AppInput';
import { AppButton } from 'shared/UI/AppButton/AppButton';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { fetchProfileData } from './../../model/services/fetchProfileData/fetchProfileData';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { profileReducer } from '../../model/slice/profileSlice';

interface ProfileCardProps {
    className?: string;
}

const initialReducers = {
    profile: profileReducer
};

export const ProfileCard = (props: ProfileCardProps) => {
    const { className } = props;
    useDynamicModuleLoader(initialReducers, true);

    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <Text className={cls.title} title={t('Profile', { ns: 'translation'})} />
            <div className={cls.personal_data}>
                <div className={cls.input_wrapper}>
                    <Text className={cls.descr} text={t('Name')} />
                    <AppInput value={data?.first} />
                </div>
                <div className={cls.input_wrapper}>
                    <Text className={cls.descr} text={t('Surname')} />
                    <AppInput value={data?.lastname} />
                </div>
            </div>
            <div className={cls.bottom}>
                <AppButton theme='filled'>{t('Edit')}</AppButton>
            </div>
        </div>
    );
};