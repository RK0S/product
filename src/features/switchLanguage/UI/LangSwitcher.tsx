import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/UI/AppButton/AppButton';
import { toggleLang } from '../lib/toggleLang/toggleLang';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = props => {
    const { className } = props;

    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(toggleLang(i18n.language));
    };

    return (
        <AppButton className={classNames('', {}, [className])} onClick={toggle}>
            {t('Language')}
        </AppButton>
    );
};
