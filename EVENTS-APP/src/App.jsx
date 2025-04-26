import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from './pages/StartPage/StartPage';
import EventsListPage from "./pages/EventsListPage/EventsListPage";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <StartPage />,
    },
    {
      path: '/Events',
      element: <EventsListPage />,
    },
    
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
