import { Suspense, useEffect } from 'react';
import { Navbar } from 'widgets/Navbar';
import { useTheme } from 'shared/lib/hooks/useTheme/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Sidebar } from 'widgets/Sidebar';
import { userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import './styles/index.scss';


const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
        if (user) {
            dispatch(userActions.initAuthData(JSON.parse(user)));
        }
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <div className='content-page'>
                    <Navbar />
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
