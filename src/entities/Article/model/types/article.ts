import { User } from 'entities/User';

export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'created'
}

export enum ArticleView {
    BIG = 'BIG',
    SMALL = 'SMALL'
}

export const ArticleType = {
    IT: 'IT',
    SCIENCE: 'SCIENCE',
    KNITTING: 'KNITTING',
    ALL: 'ALL',
    ECONOMICS: 'ECONOMICS'
} as const;

export type TArticleType = keyof typeof ArticleType;

export const ArticleBlockType = {
    TEXT: 'TEXT',
    CODE: 'CODE',
    IMAGE: 'IMAGE'
} as const;

export type TArticleBlockType = keyof typeof ArticleBlockType;

export interface ArticleBlockBase {
    id: string;
    type: TArticleBlockType;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: typeof ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: typeof ArticleBlockType.CODE;
    code: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: typeof ArticleBlockType.TEXT;
    paragraphs: string[];
    title?: string;
}

export type ArticleBlock = ArticleImageBlock | ArticleTextBlock | ArticleCodeBlock;

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: TArticleType[];
    blocks: ArticleBlock[];
    user: User;
}
