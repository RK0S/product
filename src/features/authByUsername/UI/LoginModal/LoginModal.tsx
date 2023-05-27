import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/UI/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../.././model/slice/loginSlice';
import { useCallback } from 'react';
import { getLoginState } from './../../model/selectors/getLoginState/getLoginState';

interface LoginModalProps {
    className?: string;
    onClose: () => void;
    isOpened: boolean;
}

export const LoginModal = (props: LoginModalProps) => {
    const { className, isOpened, onClose } = props;
    const { error } = useSelector(getLoginState);

    const dispatch = useDispatch();

    const onCloseWithClean = useCallback(() => {
        onClose();
        if (error) {
            dispatch(loginActions.cleanErrorMessage());
        }
    }, [onClose, dispatch, error]);

    return (
        <Modal isOpened={isOpened} onClose={onCloseWithClean} className={classNames('', {}, [className])}>
            <LoginForm />
        </Modal>
    );
};