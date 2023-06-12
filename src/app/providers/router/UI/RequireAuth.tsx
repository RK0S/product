import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ReactNode } from 'react';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
    const user = useSelector(getUserAuthData);
    const location = useLocation();

    if (!user) {
        return <Navigate to={RoutePath.main} state={{from: location}} replace />;
    }
    return <>{children}</>;
};
