import React from "react";

import { createBrowserHistory } from "history";
import { HelmetProvider } from "react-helmet-async";
import { Router } from "react-router-dom";

import { routes, renderRoutes } from "./routes";

const history = createBrowserHistory();

const App = () => {
    return (
        <HelmetProvider>
            <Router history={history}>{renderRoutes(routes)}</Router>
        </HelmetProvider>
    );
};

export default App;
