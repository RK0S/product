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
import { getProfileForm } from '../model/selectors/getProfileForm/getProfileForm';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly';
import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../model/slice/profileSlice';
import cls from './EditableProfileCard.module.scss';
import { updateProfileData } from './../model/services/updateProfileData/updateProfileData';
import { getProfileData } from '../model/selectors/getProfileData/getProfileData';

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
    const formData = useSelector(getProfileForm);
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
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfileForm({ first: value || '' }));
        },
        [dispatch]
    );

    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfileForm({ lastname: value || '' }));
        },
        [dispatch]
    );

    const onChangeAge = useCallback(
        (value?: string) => {
            const validateValue = value?.replace(/\D+/gm, '');
            dispatch(profileActions.updateProfileForm({ age: Number(validateValue) || 0 }));
        },
        [dispatch]
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfileForm({ city: value || '' }));
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
        <>
            <ProfileCard
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                readonly={readonly}
                data={formData}
            />
            <div className={cls.bottom}>
                {readonly ? (
                    <AppButton onClick={onEdit} theme='filled'>
                        {t('Edit')}
                    </AppButton>
                ) : (
                    <>
                        <AppButton className={cls.cancel_btn} onClick={onCancel} theme='outlined'>
                            {t('Cancel')}
                        </AppButton>
                        <AppButton theme='filled' onClick={onSave}>
                            {t('Save')}
                        </AppButton>
                    </>
                )}
            </div>
        </>
    );
};
