import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/UI/Modal/Modal';
import { Suspense } from 'react';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Loader } from 'shared/UI/Loader/Loader';

interface LoginModalProps {
    className?: string;
    onClose: () => void;
    isOpened: boolean;
}

export const LoginModal = (props: LoginModalProps) => {
    const { className, isOpened, onClose } = props;

    return (
        <Modal isOpened={isOpened} onClose={onClose} className={classNames('', {}, [className])}>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};