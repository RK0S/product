import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
    const { className } = props;

    return <div className={classNames(cls.articleCodeBlockComponent, {}, [className])}>ArticleCodeBlockComponent</div>;
});
