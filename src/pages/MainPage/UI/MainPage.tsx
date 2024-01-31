import { BugButton } from 'app/providers/ErrorBoundary/UI/BugButton';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/UI/Page/Page';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            <BugButton />
            {t('Main page')}
        </Page>
    );
};

export default MainPage;