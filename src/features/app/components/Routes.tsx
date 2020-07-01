import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

// import Loader from './components/Loader';

const renderPageComponent = (Comp: React.FC) => (
  <Suspense
    fallback={(
      <div className="flex items-center justify-center w-screen h-screen">
        {/* <Loader className="mx-auto" /> */}
        <p>Loading...</p>
      </div>
    )}
  >
    <Comp />
  </Suspense>
);

type IRoute = {
  path: string,
  component: any,
}

const routes: IRoute[] = [
  {
    path: '/',
    component: renderPageComponent(
      lazy(() => import(/* webpackChunkName: "home.page" */'../../../pages/home')),
    ),
  },
  {
    path: '/about-us',
    component: renderPageComponent(
      lazy(() => import(/* webpackChunkName: "about-us.page" */'../../../pages/about-us')),
    ),
  },
];

const Routes: React.FC = () => {
  return (
    <Switch>
      {routes.map(route => (
        <Route key={route.path} path={route.path} exact>
          {route.component}
        </Route>
      ))}
    </Switch>
  );
};

export default Routes;