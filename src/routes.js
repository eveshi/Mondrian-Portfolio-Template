import React, { Suspense, lazy, Fragment } from "react";

import { Helmet } from "react-helmet-async";
import { Switch, Route, Redirect } from "react-router-dom";
import Loader from "src/components/Loader";
import PageLayout from "src/layouts/PageLayout";

export const renderRoutes = (routes = []) => (
    <Suspense fallback={<Loader />}>
        <Switch>
            {routes.map((route, index) => {
                const Layout = route.layout || Fragment;

                const Component = route.component;

                return (
                    <Route
                        key={"route_" + index}
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
        exact: true,
        path: "/",
        component: lazy(() => import("./pages/Home")),
    },
    { path: "*", component: () => <Redirect to="/" /> },
];
