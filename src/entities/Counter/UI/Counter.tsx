import { useDispatch, useSelector } from 'react-redux';
import { AppButton } from 'shared/UI/AppButton/AppButton';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from './../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid='counterValue'>{counterValue}</h1>
            <AppButton data-testid='inc-btn' onClick={increment}>Increment</AppButton>
            <AppButton data-testid='dec-btn' onClick={decrement}>Decrement</AppButton>
        </div>
    );
};