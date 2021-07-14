import React, { Suspense, lazy } from "react";

import ReactLoading from "react-loading";
import { Switch, Route } from "react-router-dom";

export const renderRoutes = (routes = []) => (
    <Suspense fallback={<ReactLoading type={"bubbles"} color="#6434eb" />}>
        <Switch>
            {routes.map((route, index) => {
                const Component = route.component;

                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        render={(props) => <Component {...props} />}
                    />
                );
            })}
        </Switch>
    </Suspense>
);

export const routes = [
    {
        exact: true,
        path: "*",
        component: lazy(() => import("./pages/Home")),
    },
];
