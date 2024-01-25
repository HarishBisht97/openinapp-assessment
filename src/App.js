import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Registration from "./components/Registration";
import Panel from "./components/Panel";
import "./App.css";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Registration />,
  },
  {
    path: "/dashboard",
    element: <Panel />,
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
