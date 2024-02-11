import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/UI/Text/Text';
import { CommentList } from 'entities/Comment';

import cls from './ArticleDetailsPage.module.scss';
import {
    ReducersList,
    useDynamicModuleLoader
} from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { articleDetailsCommentsReducer } from '../../model/slices/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleComments } from './../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from './../../model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchCommentsByArticleId } from './../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddNewComment } from 'features/addNewComment';
import { addCommentForArticle } from './../../model/services/addCommentForAtricle/addCommentForArticle';
import { Page } from 'widgets/Page/Page';

const initialReducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer
};

const ArticleDetailsPage = () => {
    const { id = '1' } = useParams<{ id: string }>();
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);

    useDynamicModuleLoader(initialReducers);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback(
        (value: string) => {
            dispatch(addCommentForArticle(value));
        },
        [dispatch]
    );

    if (!id && __PROJECT__ !== 'storybook') {
        return <Page className={classNames('', {}, [])}>{t('Article was not found')}</Page>;
    }

    return (
        <Page className={classNames('', {}, [])}>
            <ArticleDetails id={id} />
            <Text className={cls.commentTitle} title={t('Comments')} />
            <AddNewComment onSendComment={onSendComment} />
            <CommentList isLoading={isLoading} comments={comments} />
        </Page>
    );
};

export default memo(ArticleDetailsPage);
