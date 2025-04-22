import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { publicRoutes } from './Routes/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Provider } from './store/Provider';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider>
            <Router>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        return <Route key={index} path={route.path} element={route.component} />;
                    })}
                </Routes>
            </Router>
        </Provider>
    </StrictMode>,
);
