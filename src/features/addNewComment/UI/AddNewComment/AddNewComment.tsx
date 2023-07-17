import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton } from 'shared/UI/AppButton/AppButton';
import { AppInput } from 'shared/UI/AppInput/AppInput';
import cls from './AddNewComment.module.scss';
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { addNewCommentReducer, addNewCommentActions } from '../../model/slices/addNewCommentSlice';
import { useSelector } from 'react-redux';
import { getAddNewCommentText } from './../../model/selectors/addNewCommentSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface AddNewCommentProps {
   className?: string;
   onSendComment: (value: string) => void;
}

const initialReducers: ReducersList = {
    addCommentForm: addNewCommentReducer
};

export const AddNewComment = memo((props: AddNewCommentProps) => {
    const { t } = useTranslation();
    const { className, onSendComment } = props;
    useDynamicModuleLoader(initialReducers);
    const dispatch = useAppDispatch();
    const text = useSelector(getAddNewCommentText);

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addNewCommentActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onCommentTextChange('');
        onSendComment(text || '');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <div className={classNames(cls.addNewComment, {}, [className])}>
            <AppInput onChange={onCommentTextChange} value={text} placeholder={t('Enter the comment text')} />
            <AppButton onClick={onSendHandler} className={cls.button} theme='outlined'>{t('Send')}</AppButton>
        </div>
    );
});
