import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import Loader from "./Loader.jsx";
import {commonRoutes} from "../utils/consts/Routes.jsx";

const AppRouter = () => {
    return (
        <Routes>
            {commonRoutes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<Suspense fallback={<Loader/>}>{route.element}</Suspense>}
                />
            ))}
        </Routes>
    );
};

export default AppRouter;