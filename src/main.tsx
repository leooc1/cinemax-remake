import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
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
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      // series
      {
        path: "serie/popular",
        element: <SeriePopular />,
      },
      {
        path: "serie/on-the-air",
        element: <SerieOnTheAir />,
      },
      {
        path: "serie/top-rated",
        element: <SerieTopRated />,
      },
      {
        path: "serie/:id",
        element: <SerieDetails />,
      },
      // filme
      {
        path: "movie/popular",
        element: <FilmePopular />,
      },
      {
        path: "movie/now-showing",
        element: <FilmeNowShowing />,
      },
      {
        path: "movie/top-rated",
        element: <FilmeTopRated />,
      },
      {
        path: "movie/upcoming",
        element: <FilmeUpcoming />,
      },
      {
        path: "movie/:id",
        element: <FilmeDetails />,
      },
      // search
      {
        path: "search/:name",
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