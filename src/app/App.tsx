import { Suspense } from 'react';
import { Navbar } from 'widgets/Navbar';
import { useTheme } from 'shared/lib/useTheme/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Sidebar } from 'widgets/Sidebar';

import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();

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
