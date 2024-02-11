import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import { TabItem, Tabs } from 'shared/UI/Tabs/Tabs';
import { TArticleType, ArticleType } from '../../model/types/article';

interface ArticleTypeTabsProps {
    className?: string;
    value: TArticleType;
    onChangeType: (type: TArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;

    const typeTabs = useMemo<TabItem<TArticleType>[]>(() => [
        {
            value: ArticleType.ALL,
            content: 'Все cтатьи',
        },
        {
            value: ArticleType.IT,
            content: 'Айти',
        },
        {
            value: ArticleType.ECONOMICS,
            content: 'Экономика',
        },
        {
            value: ArticleType.SCIENCE,
            content: 'Наука',
        },
    ], []);

    const onTabClick = useCallback((tab: TabItem<TArticleType>) => {
        onChangeType(tab.value);
    }, [onChangeType]);

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            className={classNames('', {}, [className])}
        />
    );
});
