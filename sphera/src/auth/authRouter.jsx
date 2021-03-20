
import { Route, Switch,useRouteMatch } from "react-router-dom";
import React from "react";
import Login from "./login/Login";
import { makeStyles } from '@material-ui/core/styles';

export default function AuthRouter(props) {
    const useStyles = makeStyles(() => ({
        content: {
          flexGrow: 1,
          background: '#F5F8FC',
          width: "100%",
          padding: "64px",
          height: "90vh"
      
        },
      }));
    const { url, path } = useRouteMatch();
    const classes = useStyles();


    return (
        <main className={classes.content}>
        <Switch>
            <Route exact path={`${path}`}>
                <div><h1>Auth main page</h1></div>
            </Route>
            <Route path={`${path}/login`}>
                <Login />
            </Route>
            <Route path={`${path}/register`}>
            <div><h1>Register</h1></div>
            </Route>
        </Switch>
        </main>
    );
}
