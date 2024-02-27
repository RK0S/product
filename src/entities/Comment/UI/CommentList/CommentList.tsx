import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Comment } from './../../model/types/comment';
import { Text } from 'shared/UI/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import { VStack } from 'shared/UI/Stack';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();

    return (
        <VStack gap='16' className={classNames('', {}, [className])}>
            {comments?.length
                ? comments.map(com => 
                    <CommentCard isLoading={isLoading} className={cls.commentCard} comment={com} key={com.id} /> 
                )
                : !isLoading && <Text text={t('No comments')} />
            }
        </VStack>
    );
});
