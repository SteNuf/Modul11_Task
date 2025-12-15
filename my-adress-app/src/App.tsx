import "./app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import CreateView from "./routes/create/CreateView";
import EditView from "./routes/edit/EditView";
import OverView from "./routes/overview/OverView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "overview", element: <OverView /> },
      { path: "create", element: <CreateView /> },
      { path: "edit/:id", element: <EditView /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
