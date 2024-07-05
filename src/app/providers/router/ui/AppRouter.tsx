import  { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Импортируйте Router
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';


const AppRouter = () => (
    <Router>
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={'loading...'}>
                            <div className="page-wrapper">{element}</div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    </Router>
);

export default AppRouter;
