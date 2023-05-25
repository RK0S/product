import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/UI/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { loginActions } from '../.././model/slice/loginSlice';

interface LoginModalProps {
    className?: string;
    onClose: () => void;
    isOpened: boolean;
}

export const LoginModal = (props: LoginModalProps) => {
    const { className, isOpened, onClose } = props;

    const dispatch = useDispatch();

    const onCloseWithClean = () => {
        onClose();
        dispatch(loginActions.cleanErrorMessage());
    };

    return (
        <Modal isOpened={isOpened} onClose={onCloseWithClean} className={classNames('', {}, [className])}>
            <LoginForm />
        </Modal>
    );
};