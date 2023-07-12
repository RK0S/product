import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { Comment } from './../../model/types/comment';
import { Avatar } from 'shared/UI/Avatar/Avatar';
import { Text } from 'shared/UI/Text/Text';
import { Skeleton } from 'shared/UI/Skeleton/Skeleton';

interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.commentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton className={cls.avatar} width={60} height={60} border={'50%'} />
                    <Skeleton width={100} height={26} />
                </div>
                <Skeleton width={'100%'} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.commentCard, {}, [className])}>
            <div className={cls.header}>
                {comment.user.avatar && (
                    <Avatar className={cls.avatar} variant='comment' src={comment.user.avatar} />
                )}
                <Text className={cls.username} title={comment.user.username} />
            </div>
            <Text text={comment.text} />
        </div>
    );
});
