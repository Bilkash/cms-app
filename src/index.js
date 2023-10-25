import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Loader from 'components/Loader';
import tabs from "./tabs.json";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={`${tabs[0].id}`}/>}/>
          {tabs.map((item) => {
            const Lazy = lazy(() => import(`${item.path}`));

            return (
              <Route 
                key={item.order} 
                path={`/${item.id}`} 
                element={
                  <Suspense fallback={<Loader/>}>
                    <Lazy/>
                  </Suspense>
                }
              />
            )
          })}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();