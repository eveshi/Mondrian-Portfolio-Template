import React, { Suspense, lazy, Fragment } from "react";

import ReactLoading from "react-loading";
import { Switch, Route } from "react-router-dom";

import PageLayout from "./layouts/PageLayout";

export const renderRoutes = (routes = []) => (
    <Suspense
        fallback={
            <div className="w-screen h-screen flex flex-col items-center justify-center bg-black">
                <ReactLoading type={"cubes"} color="#ffffff" />
            </div>
        }
    >
        <Switch>
            {routes.map((route, index) => {
                const Layout = route.layout || Fragment;

                const Component = route.component;

                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        render={(props) => (
                            <Layout>
                                <Component {...props} />
                            </Layout>
                        )}
                    />
                );
            })}
        </Switch>
    </Suspense>
);

export const routes = [
    {
        exact: true,
        path: "/about",
        layout: PageLayout,
        component: lazy(() => import("./pages/AboutMe")),
    },
    {
        exact: true,
        path: "/education",
        layout: PageLayout,
        component: lazy(() => import("./pages/School")),
    },
    {
        exact: true,
        path: "/projects",
        layout: PageLayout,
        component: lazy(() => import("./pages/Projects")),
    },
    {
        exact: true,
        path: "/experience",
        layout: PageLayout,
        component: lazy(() => import("./pages/Experience")),
    },
    {
        path: "*",
        component: lazy(() => import("./pages/Home")),
    },
];
