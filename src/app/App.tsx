import { Navbar } from 'widgets/Navbar';
import { useTheme } from 'shared/lib/useTheme/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/UI/ThemeSwitcher';
import { AppRouter } from './providers/router';

import './styles/index.scss';


const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <ThemeSwitcher />
            <AppRouter />
        </div>
    );
};

export default App;
