import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleSortField, ArticleView, TArticleType } from 'entities/Article';
import { SortOrder } from 'shared/types';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    limit: number;
    page: number;
    hasMore: boolean;
    
    // filters
    view: ArticleView;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: TArticleType;

    _inited: boolean;
}
