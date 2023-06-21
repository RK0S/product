import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDynamicModuleLoader, ReducersList } from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import cls from './ArticleDetails.module.scss';
import { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from './../../model/services/fetchArticleById.ts/fetchArticleById';
import { useSelector } from 'react-redux';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './../../model/selectors/articleDetails';
import { Text } from 'shared/UI/Text/Text';
import { Skeleton } from 'shared/UI/Skeleton/Skeleton';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const data = useSelector(getArticleDetailsData);

    useDynamicModuleLoader(reducers);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text theme='error' textAlign='center' title={t('An error occurred while uploading articles')} />
        );
    } else {
        content = (
            <div>{t('Article Details Page')}</div>
        );
    }

    return (
        <div className={classNames(cls.articleDetails, {}, [className])}>
            {content}
        </div>
    );
});
