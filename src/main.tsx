import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import '../style/index.css';
import App from './App.tsx';
import NotFound from './components/NotFound.tsx';
import FilmeDetails from './pages/FilmeDetails.tsx';
import FilmeNowShowing from './pages/FilmeNowShowing.tsx';
import FilmePopular from './pages/FilmePopular.tsx';
import FilmeTopRated from './pages/FilmeTopRated.tsx';
import FilmeUpcoming from './pages/FilmeUpcoming.tsx';
import Home from './pages/Home.tsx';
import SearchPage from './pages/SearchPage.tsx';
import SerieDetails from './pages/SerieDetails.tsx';
import SerieOnTheAir from './pages/SerieOnTheAir.tsx';
import SeriePopular from './pages/SeriePopular.tsx';
import SerieTopRated from './pages/SerieTopRated.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // Séries
      {
        path: 'serie',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Navigate to="popular" replace />,
          },
          {
            path: 'popular',
            element: <SeriePopular />,
          },
          {
            path: 'on-the-air',
            element: <SerieOnTheAir />,
          },
          {
            path: 'top-rated',
            element: <SerieTopRated />,
          },
          {
            path: ':id',
            element: <SerieDetails />,
          },
        ],
      },
      // Filmes
      {
        path: 'movie',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Navigate to="popular" replace />,
          },
          {
            path: 'popular',
            element: <FilmePopular />,
          },
          {
            path: 'now-showing',
            element: <FilmeNowShowing />,
          },
          {
            path: 'top-rated',
            element: <FilmeTopRated />,
          },
          {
            path: 'upcoming',
            element: <FilmeUpcoming />,
          },
          {
            path: ':id',
            element: <FilmeDetails />,
          },
        ],
      },
      // Busca
      {
        path: 'search/:name',
        element: <SearchPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <RouterProvider router={router} />
    </>
  </React.StrictMode>,
)