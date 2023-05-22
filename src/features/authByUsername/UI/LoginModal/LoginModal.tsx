import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/UI/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    onClose: () => void;
    isOpened: boolean;
}

export const LoginModal = (props: LoginModalProps) => {
    const { className, isOpened, onClose } = props;

    return (
        <Modal isOpened={isOpened} onClose={onClose} className={classNames('', {}, [className])}>
            <LoginForm />
        </Modal>
    );
};