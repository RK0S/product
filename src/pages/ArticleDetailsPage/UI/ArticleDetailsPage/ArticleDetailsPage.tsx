import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const ArticleDetailsPage = () => {
    const { t } = useTranslation('article');

    return <div className={classNames('', {}, [])}>
        {t('Article Details Page')}
    </div>;
};

export default memo(ArticleDetailsPage);