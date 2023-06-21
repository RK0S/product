export const ArticleType = {
    IT: 'IT',
    SCIENCE: 'Science',
    KNITTING: 'Knitting'
} as const;

export type TArticleType = typeof ArticleType[keyof typeof ArticleType];

export const ArticleBlockType = {
    TEXT: 'TEXT',
    CODE: 'CODE',
    IMAGE: 'IMAGE'
} as const;

export type TArticleBlockType = typeof ArticleBlockType[keyof typeof ArticleBlockType];

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
    type: typeof ArticleBlockType.IMAGE;
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
}
