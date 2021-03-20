import { Route, Switch, Redirect } from "react-router-dom";
import EditPanelRouter from './editPanel/editPanelRouter';
import AuthRouter from './auth/authRouter';

import React from "react";

// Router for all project
export default function MainRouter(props) {

    return (
        <Switch>
            <Route exact path="/">
                <Redirect to={{ pathname: "/edit-panel" }} />
            </Route>
            <Route path="/auth"><AuthRouter /></Route>
            <PrivateRoute path="/edit-panel">
                <EditPanelRouter />
            </PrivateRoute>
        </Switch>
    );
}

// A wrapper for <Route> that redirects to the login
// screen if user not yet authenticated.
function PrivateRoute({ children, ...rest }) {
    // let auth = useAuth(); TO DO: Changw back after creating auth!!!!
    let auth = { user: true };
    return (
        // If user loged in go to the child tag (i.e. edit-panel)
        <Route {...rest} render={({ location }) =>
            auth.user ? (children) : (
                <Redirect to={{
                    pathname: "/auth/login",
                    state: { from: location }
                }} />
            )
        } />
    );
}