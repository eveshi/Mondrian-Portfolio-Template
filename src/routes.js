import React, { Suspense, lazy, Fragment } from "react";

import { Helmet } from "react-helmet";
import ReactLoading from "react-loading";
import { Switch, Route } from "react-router-dom";

import PageLayout from "./layouts/PageLayout";

export const renderRoutes = (routes = []) => (
    <Suspense
        fallback={
            <div className="w-screen h-screen flex flex-col items-center justify-center bg-white">
                <ReactLoading type={"cubes"} color="#FB9966" />
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
                                <Helmet>
                                    <title>{`Eve Shi - ${route.name}`}</title>
                                </Helmet>
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
        name: "About Me",
        exact: true,
        path: "/about",
        layout: PageLayout,
        component: lazy(() => import("./pages/AboutMe")),
    },
    {
        name: "Education",
        exact: true,
        path: "/education",
        layout: PageLayout,
        component: lazy(() => import("./pages/School")),
    },
    {
        name: "Projects",
        exact: true,
        path: "/projects",
        layout: PageLayout,
        component: lazy(() => import("./pages/Projects")),
    },
    {
        name: "Experience",
        exact: true,
        path: "/experience",
        layout: PageLayout,
        component: lazy(() => import("./pages/Experience")),
    },
    {
        name: "Home",
        path: "*",
        component: lazy(() => import("./pages/Home")),
    },
];
