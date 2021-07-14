import React from "react";

import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

import { routes, renderRoutes } from "./routes";

const history = createBrowserHistory();

const App = () => {
    return <Router history={history}>{renderRoutes(routes)}</Router>;
};

export default App;
