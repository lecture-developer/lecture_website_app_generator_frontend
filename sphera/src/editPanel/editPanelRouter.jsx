import {Route, Switch , useRouteMatch} from "react-router-dom";
import SideMenu from "../libraries/SideMenu/SideMenu";


import PublicationsRoot from "./Publications/Root";
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(() => ({
    content: {
      flexGrow: 1,
      background: '#F5F8FC',
      width: "100%",
      padding: "64px",
      height: "90vh"
  
    },
  }));

export default function EditPanelRouter(props) {
  const classes = useStyles();

    const { url, path } = useRouteMatch();


    return (
        <>
            <SideMenu url={url} />
            <main className={classes.content}>
                {/* toolbar pushes the contents so it wont be hidden by the navbar */}
                <Toolbar />
                {/*insert main window - publications etc */}
                <Switch>
                    <Route exact path={`${path}`}>
                        <div>Edit panel Home</div>
                    </Route>
                    <Route path={`${path}/publications`}>
                        <PublicationsRoot />
                    </Route>
                    <Route path={`${path}/courses`}>
                        <div>Courses</div>
                    </Route>
                    <Route path={`${path}/resources`}>
                        <div>resources</div>
                    </Route>
                </Switch>
            </main>
            </>
    );
}


