import React from 'react';
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { routes } from '../../router';
import SideMenu from '../../components/SideMenu';
import styles from './App.module.less';


export default function App() {
  return (
    <HashRouter>
      <div className={styles.warpper}>
        <SideMenu />
        <div className={styles.content}>
          <Switch>
            {routes.map((route, idx) => (
              <RouteWithSubRoutes key={idx} {...route} />
            ))}
          </Switch>
        </div>
      </div>
    </HashRouter>
  )
}

function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={props => {
        return <route.component {...props} routes={route.routes} />
      }}
    />
  );
}