import { BugButton } from 'app/providers/ErrorBoundary/UI/BugButton';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <BugButton />
            {t('Main page')}
        </div>
    );
};

export default MainPage;