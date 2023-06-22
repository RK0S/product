import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const { className } = props;

    return <div className={classNames(cls.articleImageBlockComponent, {}, [className])}>ArticleImageBlockComponent</div>;
});
