import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { Text } from 'shared/UI/Text/Text';
import { useTranslation } from 'react-i18next';
import { AppInput } from 'shared/UI/AppInput/AppInput';
import { Profile } from './../../model/types/profile';
import { Avatar } from 'shared/UI/Avatar/Avatar';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    readonly?: boolean;
    onChangeName?: (value?: string) => void;
    onChangeSurname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        readonly,
        onChangeName,
        onChangeSurname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername
    } = props;

    const { t } = useTranslation('profile');

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <Text className={cls.title} title={t('Profile', { ns: 'translation' })} />
            <div className={cls.main_info}>
                <div className={cls.avatar_wrapper}>
                    <Avatar src={data?.avatar} alt='Avatar' variant='profile' />
                </div>
                <div className={cls.data}>
                    <Text className={cls.subtitle} text={t('Personal data')} />
                    <div className={cls.row}>
                        <div className={cls.input_wrapper}>
                            <Text className={cls.descr} text={t('Name')} />
                            <AppInput
                                onChange={onChangeName}
                                readonly={readonly}
                                value={data?.name}
                            />
                        </div>
                        <div className={cls.input_wrapper}>
                            <Text className={cls.descr} text={t('Surname')} />
                            <AppInput
                                onChange={onChangeSurname}
                                readonly={readonly}
                                value={data?.surname}
                            />
                        </div>
                    </div>
                    <div className={cls.row}>
                        <div className={cls.input_wrapper}>
                            <Text className={cls.descr} text={t('Age')} />
                            <AppInput
                                size='small'
                                onChange={onChangeAge}
                                readonly={readonly}
                                value={data?.age}
                            />
                        </div>
                        <div className={cls.input_wrapper}>
                            <Text className={cls.descr} text={t('City')} />
                            <AppInput
                                onChange={onChangeCity}
                                readonly={readonly}
                                value={data?.city}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cls.data}>
                <Text className={cls.subtitle} text={t('User settings')} />
                <div className={cls.row}>
                    <div className={cls.input_wrapper}>
                        <Text className={cls.descr} text={t('Username')} />
                        <AppInput
                            onChange={onChangeUsername}
                            readonly={readonly}
                            value={data?.username}
                        />
                    </div>
                    <div className={cls.input_wrapper}>
                        <Text className={cls.descr} text={t('Link to the avatar')} />
                        <AppInput
                            onChange={onChangeAvatar}
                            readonly={readonly}
                            value={data?.avatar}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
