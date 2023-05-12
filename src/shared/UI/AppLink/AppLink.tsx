import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
    className?: string;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
    const { className, children, to, ...otherProps } = props;

    return (
        <Link 
            {...otherProps}
            to={to} 
            className={classNames(cls.appLink, {}, [className])}
        >
            {children}
        </Link>
    );
};