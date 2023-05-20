import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton, ThemeButton } from 'shared/UI/AppButton/AppButton';
import { toggleLang } from '../lib/toggleLang/toggleLang';

import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
    isCollapsed: boolean;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = props => {
    const { className, isCollapsed } = props;

    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(toggleLang(i18n.language));
    };

    return (
        <AppButton theme={ThemeButton.WHITE} className={classNames(cls.langSwitcher, {}, [className])} onClick={toggle}>
            {isCollapsed ? t('Language-short') : t('Language')}
        </AppButton>
    );
};
