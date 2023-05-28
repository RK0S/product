import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/UI/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../.././model/slice/loginSlice';
import { Suspense, useCallback } from 'react';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Loader } from 'shared/UI/Loader/Loader';
import { getLoginError } from './../../model/selectors/getLoginError/getLoginError';

interface LoginModalProps {
    className?: string;
    onClose: () => void;
    isOpened: boolean;
}

export const LoginModal = (props: LoginModalProps) => {
    const { className, isOpened, onClose } = props;
    const error = useSelector(getLoginError);

    const dispatch = useDispatch();

    const onCloseWithClean = useCallback(() => {
        onClose();
        if (error) {
            dispatch(loginActions.cleanErrorMessage());
        }
    }, [onClose, dispatch, error]);

    return (
        <Modal isOpened={isOpened} onClose={onCloseWithClean} className={classNames('', {}, [className])}>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
};