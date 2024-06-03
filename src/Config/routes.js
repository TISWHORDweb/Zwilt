import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../Pages/Home/Home';


export const Routes = () => {
    return useRoutes([
        {
          path: '/',
          element: < Home />
        }
    ]);
};
