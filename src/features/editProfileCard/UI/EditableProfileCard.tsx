import { ProfileCard } from 'entities/Profile';
import { useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    useDynamicModuleLoader,
    ReducersList
} from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
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
import { CurrencySelect } from 'entities/Currency';
import { Currency, Country } from 'shared/const/common';
import { CountrySelect } from 'entities/Country';
import { getProfileValidateErrors } from '../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { useMapValidateErrorsTranslation } from './../lib/hooks/useMapValidateErrorsTranslation/useMapValidateErrorsTranslation';
import { useInitialEffect } from './../../../shared/lib/hooks/useInitialEffect/useInitialEffect';
import { redirect, useParams } from 'react-router-dom';
import { getUserAuthData } from 'entities/User';
import { getProfileData } from './../model/selectors/getProfileData/getProfileData';

interface EditProfileCardProps {
    className?: string;
}

const initialReducers: ReducersList = {
    profile: profileReducer
};

export const EditableProfileCard = (props: EditProfileCardProps) => {
    const { className } = props;
    useDynamicModuleLoader(initialReducers);
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('profile');
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErros = useSelector(getProfileValidateErrors);

    const dispatch = useAppDispatch();
    const errorsTranslations = useMapValidateErrorsTranslation();

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        } else {
            redirect('/profile/1');
        }
    });

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancel = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    const onChangeName = useCallback(
        (value?: string) => {
            const validateValue = value?.replace(/\d+/gm, '');
            dispatch(profileActions.updateProfileForm({ name: validateValue || '' }));
        },
        [dispatch]
    );

    const onChangeSurname = useCallback(
        (value?: string) => {
            const validateValue = value?.replace(/\d+/gm, '');
            dispatch(profileActions.updateProfileForm({ surname: validateValue || '' }));
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

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfileForm({ avatar: value || '' }));
        },
        [dispatch]
    );

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfileForm({ username: value || '' }));
        },
        [dispatch]
    );

    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(profileActions.updateProfileForm({ currency }));
        },
        [dispatch]
    );

    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(profileActions.updateProfileForm({ country }));
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
                onChangeName={onChangeName}
                onChangeSurname={onChangeSurname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                readonly={readonly}
                data={formData}
                onChangeAvatar={onChangeAvatar}
                onChangeUsername={onChangeUsername}
            />
            <div className={cls.bottom}>
                <div className={cls.selects}>
                    <CurrencySelect
                        value={formData?.currency}
                        onChange={onChangeCurrency}
                        readonly={readonly}
                    />
                    <CountrySelect
                        value={formData?.country}
                        onChange={onChangeCountry}
                        readonly={readonly}
                    />
                </div>
                <div>
                    {validateErros?.length &&
                        validateErros.map((err) => (
                            <Text key={err} theme='error' text={errorsTranslations[err]} />
                        ))}
                </div>
                {canEdit && (
                    <>
                        {readonly ? (
                            <AppButton onClick={onEdit} theme='filled'>
                                {t('Edit')}
                            </AppButton>
                        ) : (
                            <div>
                                <AppButton
                                    className={cls.cancel_btn}
                                    onClick={onCancel}
                                    theme='outlined'
                                >
                                    {t('Cancel')}
                                </AppButton>
                                <AppButton theme='filled' onClick={onSave}>
                                    {t('Save')}
                                </AppButton>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    );
};
