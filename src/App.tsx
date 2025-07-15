import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Nav from './components/layouts/Nav/Nav';
import MainPage from './pages/MainPage/MainPage';
import CountryPage from './pages/CountryPage/CountryPage';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  { path: '/', element: <MainPage /> },
  { path: '*', element: <CountryPage /> },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
