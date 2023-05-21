import { ReactNode, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/UI/Portal/Portal';
import { useMount } from 'shared/lib/useMount/useMount';

import cls from './Modal.module.scss';

interface ModalProps {
    children: ReactNode;
    onClose?: () => void;
    isOpened: boolean;
    className?: string;
}

interface KeyboardEvent {
    key: string;
}

export const Modal: React.FC<ModalProps> = (props) => {
    const { children, onClose, isOpened, className } = props;

    const isMounted = useMount({ isOpened });

    const onKeyDown = useCallback((e: KeyboardEvent): void => {
        if (e.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (isOpened) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpened, onKeyDown]);

    if (!isMounted) {
        return null;
    }

    const toClose = isMounted && !isOpened;

    return (
        <Portal>
            <div className={classNames(cls.modal, {}, [className])}>
                <div
                    className={classNames(cls.overlay, {}, [])}
                    role='button'
                    onClick={onClose}
                />
                <div className={classNames(cls.content, {[cls.closing]: toClose, [cls.opening]: isOpened}, [])}>{children}</div>
            </div>
        </Portal>
    );
};
