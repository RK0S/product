import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <div className='page-wrapper'>
                <Routes>
                    {Object.values(routeConfig).map(({ path, element, authOnly }) => (
                        <Route key={path} path={path} element={authOnly ? <RequireAuth>{element}</RequireAuth> : <>{element}</>}  />
                    ))}
                </Routes>
            </div>
        </Suspense>
    );
};

export default AppRouter;
