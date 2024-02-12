import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/UI/Text/Text';
import { CommentList } from 'entities/Comment';

import cls from './ArticleDetailsPage.module.scss';
import {
    ReducersList,
    useDynamicModuleLoader
} from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { useSelector } from 'react-redux';
import { getArticleComments } from './../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from './../../model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchCommentsByArticleId } from './../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddNewComment } from 'features/addNewComment';
import { addCommentForArticle } from './../../model/services/addCommentForAtricle/addCommentForArticle';
import { Page } from 'widgets/Page/Page';
import { articleDetailsPageReducer } from '../../model/slices';
import { getArticleRecommendations } from './../../model/slices/articleDetailsPageRecommendationsSlice';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { fetchArticleRecommendations } from './../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';

const initialReducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer
};

const ArticleDetailsPage = () => {
    const { id = '1' } = useParams<{ id: string }>();
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

    useDynamicModuleLoader(initialReducers);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
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
            <ArticleList
                articles={recommendations}
                isLoading={recommendationsIsLoading}
                className={cls.recommendations}
                target='_blank'
            />
            <Text className={cls.commentTitle} title={t('Comments')} />
            <AddNewComment onSendComment={onSendComment} />
            <CommentList isLoading={commentsIsLoading} comments={comments} />
        </Page>
    );
};

export default memo(ArticleDetailsPage);
