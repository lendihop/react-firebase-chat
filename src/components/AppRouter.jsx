import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/consts";

const AppRouter = () => {
    const isAuth = true;

    return (
        <Routes>
            {isAuth
                ? (privateRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>}/>))
                : (publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>}/>))
            }
            <Route path="*" element={<Navigate to={isAuth ? CHAT_ROUTE : LOGIN_ROUTE} replace/>}/>
        </Routes>
    );
};

export default AppRouter;
