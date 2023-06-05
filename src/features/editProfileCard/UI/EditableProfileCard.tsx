import { ProfileCard } from 'entities/Profile';
import { useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { AppButton } from 'shared/UI/AppButton/AppButton';
import { Loader } from 'shared/UI/Loader/Loader';
import { Text } from 'shared/UI/Text/Text';
import { getProfileData } from '../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../model/slice/profileSlice';
import cls from './EditableProfileCard.module.scss';

interface EditProfileCardProps {
    className?: string;
}

const initialReducers = {
    profile: profileReducer
};

export const EditableProfileCard = (props: EditProfileCardProps) => {
    const { className } = props;
    useDynamicModuleLoader(initialReducers, true);

    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancel = useCallback(() => {
        dispatch(profileActions.setReadonly(true));
    }, [dispatch]);

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfileData({ first: value || '' }));
        },
        [dispatch]
    );

    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfileData({ lastname: value || '' }));
        },
        [dispatch]
    );

    if (isLoading) {
        return (
            <div className={classNames(cls.editableProfileCard, {}, [className, cls.isLoading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.editableProfileCard, {}, [className, cls.isLoading])}>
                <Text
                    theme='error'
                    title={t('Something went wrong', { ns: 'translation' })}
                    text={t('Reload page', { ns: 'translation' })}
                    textAlign='center'
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.editableProfileCard, {}, [className])}>
            <ProfileCard
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                readonly={readonly}
                data={data}
            />
            <div className={cls.bottom}>
                {readonly ? (
                    <AppButton onClick={onEdit} theme='filled'>
                        {t('Edit')}
                    </AppButton>
                ) : (
                    <>
                        <AppButton className={cls.edit_btn} onClick={onCancel} theme='outlined'>
                            {t('Cancel')}
                        </AppButton>
                        <AppButton theme='filled'>{t('Save')}</AppButton>
                    </>
                )}
            </div>
        </div>
    );
};
