import { useTheme } from 'shared/lib/useTheme/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

import './styles/index.scss';


const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <button onClick={toggleTheme}>toggle</button>
            <AppRouter />
        </div>
    );
};

export default App;
