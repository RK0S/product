import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { memo } from 'react';

type Variant = 'comment' | 'profile' | 'corner' | 'article'

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    variant?: Variant;
}

export const Avatar = memo((props: AvatarProps) => {
    const { className, alt, src, variant = 'comment' } = props;

    return (
        <img
            className={classNames(cls.avatar, {}, [className, cls[variant]])}
            src={src}
            alt={alt}
        />
    );
});
