import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const ArticlesPage = () => {
    const { t } = useTranslation('article');

    return <div className={classNames('', {}, [])}>
        {t('Articles Page')}
    </div>;
};

export default memo(ArticlesPage);