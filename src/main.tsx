import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import '../style/index.css';
import App from './App.tsx';
import Home from './pages/Home.tsx';
import SeriePopular from './pages/SeriePopular.tsx';
import SerieOnTheAir from './pages/SerieOnTheAir.tsx';
import SerieTopRated from './pages/SerieTopRated.tsx';
import SerieDetails from './pages/SerieDetails.tsx';
import FilmePopular from './pages/FilmePopular.tsx';
import FilmeNowShowing from './pages/FilmeNowShowing.tsx';
import FilmeTopRated from './pages/FilmeTopRated.tsx';
import FilmeDetails from './pages/FilmeDetails.tsx';
import FilmeUpcoming from './pages/FilmeUpcoming.tsx';
import SearchPage from './pages/SearchPage.tsx';
import NotFound from './components/NotFound.tsx';

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