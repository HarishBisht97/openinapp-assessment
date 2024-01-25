import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Registration from "./components/Registration";
import Dashboard from "./components/Dashboard";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Registration />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  );
}

export default App;
