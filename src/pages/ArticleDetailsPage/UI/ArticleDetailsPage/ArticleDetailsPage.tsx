import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ArticleDetailsPage = () => {
    const { id }= useParams<{id: string}>();
    const { t } = useTranslation('article');

    if (!id && __PROJECT__ !== 'storybook') {
        return (
            <div className={classNames('', {}, [])}>
                {t('Article was not found')}
            </div>
        );
    }

    return (
        <div className={classNames('', {}, [])}>
            <ArticleDetails id={id} />
        </div>
    );
}; 

export default memo(ArticleDetailsPage);
