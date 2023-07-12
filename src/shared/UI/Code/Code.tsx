import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { AppButton } from 'shared/UI/AppButton/AppButton';
import CopyIcon from 'shared/assets/icons/copy.svg';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <AppButton onClick={onCopy} className={cls.copyBtn} theme='primary'>
                <CopyIcon className={cls.copyIcon} />
            </AppButton>
            <code>
                {text}
            </code>
        </pre>
    );
});
