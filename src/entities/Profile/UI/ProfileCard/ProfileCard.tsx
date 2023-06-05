import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { Text } from 'shared/UI/Text/Text';
import { useTranslation } from 'react-i18next';
import { AppInput } from 'shared/UI/AppInput/AppInput';
import { Profile } from './../../model/types/profile';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { 
        className, 
        data, 
        readonly, 
        onChangeFirstname, 
        onChangeLastname
    } = props;

    const { t } = useTranslation('profile');

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <Text className={cls.title} title={t('Profile', { ns: 'translation'})} />
            <div className={cls.personal_data}>
                <div className={cls.input_wrapper}>
                    <Text className={cls.descr} text={t('Name')} />
                    <AppInput onChange={onChangeFirstname} readonly={readonly} value={data?.first} />
                </div>
                <div className={cls.input_wrapper}>
                    <Text className={cls.descr} text={t('Surname')} />
                    <AppInput onChange={onChangeLastname} readonly={readonly} value={data?.lastname} />
                </div>
            </div>
        </div>
    );
};