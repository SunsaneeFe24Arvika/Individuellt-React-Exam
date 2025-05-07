import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from './pages/StartPage/StartPage';
import EventsListPage from "./pages/EventsListPage/EventsListPage";
import EventInfoPage from "./pages/EventInfoPage/EventInfoPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import Tickets from "./pages/Tickets/Tickets";


function App() {
  const router = createBrowserRouter([   
    { path: "/", 
      element: <StartPage /> 
    },
    {
      path: "/events",
      element: <EventsListPage />,
    },
    {
      path: "/info/:id",
      element: <EventInfoPage />,
    },
    {
      path: "/order/:id",
      element: <OrderPage />,
    },
    {
      path: "/tickets",
      element:<Tickets />,
    }
    
  ]);

  return (
    
      <div className="app">
      <RouterProvider router={router} />
      
    </div>
    

   
  );
}

export default App;

